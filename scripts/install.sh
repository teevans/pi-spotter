#!/bin/sh

if [[ $(/usr/bin/id -u) -ne 0 ]]; then
    echo "Pi-Spotter requires root to be installed. Please try again using sudo!"
    exit
fi

# Enable the read-write file system
mount -o remount,rw / 
mount -o remount,rw /boot

printf -- '======================================\n'
printf -- '==           Pi-Spotter             ==\n'
printf -- '==           Installer              ==\n'
printf -- '======================================\n'
printf -- '\n'
printf -- 'Installing...'

{ 

  # Create tmp file
  rm -rf /tmp/pispotter
  mkdir /tmp/pispotter

  # Download the compiled version of pi-spotter from releases
  wget -O /tmp/pispotter/pispotter.zip https://github.com/teevans/pi-spotter/releases/latest/download/pispotter.zip

  # Extract the contents
  unzip /tmp/pispotter/pispotter.zip -d /tmp/pispotter/

  # Create the folder for nginx
  rm -rf /var/www/pispotter
  mkdir /var/www/pispotter

  # Copy the contents to an nginx available folder
  cp -r /tmp/pispotter/build/* /var/www/pispotter/

  # Copy the pi-spotter nginx file to /etc/nginx/default.d/pispotter.conf
  rm -f /etc/nginx/default.d/pispotter.conf
  cp -r /tmp/pispotter/build/pispotter.conf /etc/nginx/default.d/

  # Reload nginx
  systemctl reload nginx

  # Clean Up
  rm -rf /tmp/pispotter


} > pispotter-install.log 2>&1 

# Enable RO Filesystem
mount -o remount,ro / 
mount -o remount,ro /boot

ipaddress=$(ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1')
printf -- '\033[32m Done! \033[0m\n'
printf -- 'Access Pi-Spotter from the URL Below!\n'
printf -- '\n'
printf -- "http://$ipaddress/pispotter\n"
printf -- '\n'

