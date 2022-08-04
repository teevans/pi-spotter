
if [[ $(/usr/bin/id -u) -ne 0 ]]; then
    echo "Pi-Spotter uninstall requires root to be installed. Please try again using sudo!"
    exit
fi

mount -o remount,rw / 
mount -o remount,rw /boot

rm -rf /tmp/pispotter
rm -rf /var/www/pispotter
rm -f /etc/nginx/default.d/pispotter.conf

# Reload nginx
systemctl reload nginx

# Present url for accses
echo "Pi-Spotter has been removed!"
