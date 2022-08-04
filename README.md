# Pi-Spotter

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/teevans/pi-spotter/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/teevans/pi-spotter/tree/master)

Welcome to Pi-Spotter! This is meant to be an additional dashboard to Pi-Star to see live tracking of
your hotspot callers that shows their callsign, country, city, and state! Get started by following the
instructions below.

## Install

To install Pi-Spotter simply execute the following command from an SSH session on your hotspot!

```bash
# Then execute this to install Pi-Spotter
wget -O - https://github.com/teevans/pi-spotter/releases/latest/download/install.sh | sudo bash
```

## Uninstall

To uninstall Pi-Spotter simply execute the following command from an SSH session on your hotspot!

```bash
# Then execute this to install Pi-Spotter
wget -O - https://github.com/teevans/pi-spotter/releases/latest/download/uninstall.sh | sudo bash
```

## Under the Hood

This is a React single page app that get installed into the Nginx configuration that Pi-Star
uses out of the box! All of the compiled files are loaded into the `/var/html/pispotter`
directory to be served. The installer also takes care of loading in an nginx configuration file
to serve the pages and static files properly.
