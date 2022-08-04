# Pi-Spotter

Welcome to Pi-Spotter! This is meant to be an additional dashboard to Pi-Star to see live tracking of
your hotspot callers that shows their callsign, country, city, and state! Get started by following the
instructions below.

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
