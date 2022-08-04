# Pi-Spotter

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/teevans/pi-spotter/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/teevans/pi-spotter/tree/master)

Welcome to Pi-Spotter! This is meant to be an additional dashboard to Pi-Star to see live tracking of
your hotspot callers that shows their callsign, country, city, and state! Get started by following the
instructions below.

## Prerequisites

To install **Pi-Spotter**, you will need an internet connection, and an SSH shell to your pi-star. Instructions on how
to get an SSH Shell are below!

### SSH Into Pi-Star

You will need your pi-star hotspot on the same network as your machine that you intend to ssh from.

#### Windows

If you are using **Windows** I suggest watching [this video](https://www.youtube.com/watch?v=r2fmkPoHD00) for instructions!

#### Mac / Linux

If you are using a **Mac or Linux** follow the below instructions!

To SSH into your pi-star, first get the IP Address of the device. It will usually be something like `192.168.0.100`.

Once you have the IP Address, open the Terminal application, and type the following command:

```bash
# Replace <ipaddress> with the address found above!
ssh pi-star@<ipaddress>

# If your IP Address is 192.168.0.100, you would use the following command
ssh pi-star@192.168.0.100
```

Press Enter. It may ask you to confirm the identity of the device.

Type the letter Y, then hit enter.

Now it will ask you for a password. The default password is **raspberry** - Hit enter again.

Boom. You should be logged into your Pi-Star through SSH! Continue on to the Install command below!

## Install Command

Simply copy this command into your terminal window, and hit enter. The install will only take a second,
and will let you know when it's done! When complete, the installer will tell you the URL to Access
\*\*Pi-Spotter\* at. It will usually be http://_ipaddress_/pispotter

```bash
wget -qO - github.com/teevans/pi-spotter/releases/latest/download/install.sh | sudo sh
```

## Uninstall

To uninstall Pi-Spotter simply execute the following command from an SSH session on your hotspot!

```bash
wget -qO - github.com/teevans/pi-spotter/releases/latest/download/uninstall.sh | sudo sh
```

## Under the Hood

This is a React single page app that get installed into the Nginx configuration that Pi-Star
uses out of the box! All of the compiled files are loaded into the `/var/html/pispotter`
directory to be served. The installer also takes care of loading in an nginx configuration file
to serve the pages and static files properly.
