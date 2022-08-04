
if [[ $(/usr/bin/id -u) -ne 0 ]]; then
    echo "Pi-Spotter uninstall requires root to be installed. Please try again using sudo!"
    exit
fi

# Enable RW Filesystem
mount -o remount,rw / 
mount -o remount,rw /boot

printf -- '======================================\n'
printf -- '==           Pi-Spotter             ==\n'
printf -- '==           Uninstaller            ==\n'
printf -- '======================================\n'
printf -- '\n'
printf -- 'Uninstalling...'

rm -rf /tmp/pispotter
rm -rf /var/www/pispotter
rm -f /etc/nginx/default.d/pispotter.conf

# Reload nginx
systemctl reload nginx

# Enable RO Filesystem
mount -o remount,ro / 
mount -o remount,ro /boot

# Present url for accses
printf -- "Pi-Spotter has been removed!"
