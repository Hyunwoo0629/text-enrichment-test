#!/bin/bash
set -e

# ============================================================
# Text Enrichment Interface - VPS Deployment Script
# Run this on a fresh Ubuntu 22.04 VPS
# ============================================================

# Load environment variables
if [ ! -f .env ]; then
    echo "ERROR: .env file not found. Copy .env.example to .env and fill in your values."
    exit 1
fi
source .env

echo "=================================================="
echo "  Text Enrichment Interface - Deployment"
echo "=================================================="

# --- Step 1: Install Docker ---
if ! command -v docker &> /dev/null; then
    echo "[1/5] Installing Docker..."
    apt-get update
    apt-get install -y ca-certificates curl gnupg
    install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    chmod a+r /etc/apt/keyrings/docker.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
    apt-get update
    apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
    echo "Docker installed."
else
    echo "[1/5] Docker already installed. Skipping."
fi

# --- Step 2: Configure Firewall ---
echo "[2/5] Configuring firewall..."
apt-get install -y ufw
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable
echo "Firewall configured (SSH, HTTP, HTTPS only)."

# --- Step 3: Create directories ---
echo "[3/5] Creating directories..."
mkdir -p certbot/conf certbot/www

# --- Step 4: Get SSL Certificate (if domain is set) ---
if [ -n "$DOMAIN" ] && [ "$DOMAIN" != "yourdomain.com" ]; then
    echo "[4/5] Obtaining SSL certificate for $DOMAIN..."
    # Install certbot
    apt-get install -y certbot

    # Get certificate using standalone mode (before nginx starts)
    certbot certonly --standalone \
        --non-interactive \
        --agree-tos \
        --email admin@$DOMAIN \
        -d $DOMAIN \
        --cert-path certbot/conf/

    # Copy certs to local certbot directory for Docker mount
    cp -rL /etc/letsencrypt/* certbot/conf/

    # Use HTTPS nginx config
    echo "SSL certificate obtained. Using HTTPS config."

    # Set up auto-renewal cron job
    (crontab -l 2>/dev/null; echo "0 3 * * * certbot renew --quiet && cp -rL /etc/letsencrypt/* $(pwd)/certbot/conf/ && docker compose restart nginx") | crontab -
    echo "Auto-renewal cron job added."
else
    echo "[4/5] No domain configured. Using HTTP-only mode."
    echo "       To enable HTTPS later, set DOMAIN in .env and re-run this script."
    cp nginx/nginx-http-only.conf nginx/nginx.conf
fi

# --- Step 5: Build and Start ---
echo "[5/5] Building and starting containers..."
docker compose up -d --build

echo ""
echo "=================================================="
echo "  Deployment Complete!"
echo "=================================================="
if [ -n "$DOMAIN" ] && [ "$DOMAIN" != "yourdomain.com" ]; then
    echo "  Your app is live at: https://$DOMAIN"
else
    echo "  Your app is live at: http://$(curl -s ifconfig.me)"
    echo ""
    echo "  To enable HTTPS:"
    echo "  1. Buy a domain and point its A record to this IP"
    echo "  2. Set DOMAIN=yourdomain.com in .env"
    echo "  3. Run: sudo ./deploy.sh"
fi
echo "=================================================="
