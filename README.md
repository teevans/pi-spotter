# Pi-Spotter

Welcome to Pi-Spotter! This is meant to be an additional dashboard to Pi-Star to see live tracking of
your hotspot callers that shows their callsign, country, city, and state! Get started by following the
instructions below.

## Install

To install Pi-Spotter simply execute the following command from an SSH session on your hotspot!

```bash
wget https://github.com/teevans/pi-spotter/releases/latest/download/install.sh | sudo sh
```

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
