# Use the official Nginx image as the base image
FROM nginx:1.13-alpine

# Install Certbot dependencies and obtain SSL certificate
RUN apt-get update && apt-get install -y certbot

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose ports 80 (HTTP) and 443 (HTTPS)
EXPOSE 80
EXPOSE 443

# Run Certbot to obtain SSL certificate
RUN certbot certonly --standalone --agree-tos --non-interactive --email rotondwamulelu@gmail.com -d weblinnk.com

# Renew SSL certificate automatically
RUN echo "0 0 1 * * certbot renew --quiet --post-hook 'nginx -s reload'" | crontab -

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
