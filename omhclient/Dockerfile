# npm install
#deploy to NGINX
FROM nginx
#COPY --from=builder /usr/local/app/dist/omhclient /etc/nginx/html/omhonfhir
COPY app/ /etc/nginx/html/omhonfhir
COPY nginx.conf /etc/nginx/conf.d/default.conf