
## Nginx Config

Need to updated the nginx config to allow cross origin requests for testing.

Add this line to the /etc/nginx/default.d/php.conf file. 
```
add_header Access-Control-Allow-Origin *;
```

Then execute this command
```
sudo systemctl reload nginx
```
