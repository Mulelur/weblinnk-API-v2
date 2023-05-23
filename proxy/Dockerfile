FROM nginx:latest

# Install Certbot and its dependencies
RUN apt-get update && apt-get install -y certbot python3-certbot-nginx

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy SSL/TLS certificate files to the appropriate location
COPY ssl/fullchain.pem /etc/nginx/fullchain.pem
COPY ssl/privkey.pem /etc/nginx/privkey.pem

# Expose ports
EXPOSE 80
EXPOSE 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
