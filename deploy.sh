#!/bin/bash
set -e
if [ ! -f .env ]; then
    echo "ERROR: .env file not found. Copy .env.example to .env and fill in your values."
    exit 1
fi
source .env
echo "  Text Enrichment Interface - Deployment"
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
echo "[2/5] Configuring firewall..."
apt-get install -y ufw
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable
echo "Firewall configured (SSH, HTTP, HTTPS only)."
echo "[3/5] Creating directories..."
mkdir -p certbot/conf certbot/www
if [ -n "$DOMAIN" ] && [ "$DOMAIN" != "yourdomain.com" ]; then
    echo "[4/5] Obtaining SSL certificate for $DOMAIN..."
    apt-get install -y certbot
    certbot certonly --standalone \
        --non-interactive \
        --agree-tos \
        --email admin@$DOMAIN \
        -d $DOMAIN \
        --cert-path certbot/conf/
    cp -rL /etc/letsencrypt/* certbot/conf/
    echo "SSL certificate obtained. Using HTTPS config."
    (crontab -l 2>/dev/null; echo "0 3 * * * certbot renew --quiet && cp -rL /etc/letsencrypt/* $(pwd)/certbot/conf/ && docker compose restart nginx") | crontab -
    echo "Auto-renewal cron job added."
else
    echo "[4/5] No domain configured. Using HTTP-only mode."
    echo "       To enable HTTPS later, set DOMAIN in .env and re-run this script."
    cp nginx/nginx-http-only.conf nginx/nginx.conf
fi
echo "[5/5] Building and starting containers..."
docker compose up -d --build
echo ""
echo "  Deployment Complete!"
if [ -n "$DOMAIN" ] && [ "$DOMAIN" != "yourdomain.com" ]; then
    echo "  Your app is live at: https://$DOMAIN"
else
    echo "  Your app is live at: http://$(curl -s ifconfig.me)"
    echo ""
fi
