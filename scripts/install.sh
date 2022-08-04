
if [[ $(/usr/bin/id -u) -ne 0 ]]; then
    echo "Pi-Spotter requires root to be installed. Please try again using sudo!"
    exit
fi

# Create tmp file
echo "Creating temp download location.."
rm -rf /tmp/pispotter
mkdir /tmp/pispotter
echo "Created /tmp/pispotter"

# Download the compiled version of pi-spotter from releases
echo "Downloading latest release"
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

# Present url for accses
echo "You're done! You can now access your Pi-Spotter at URL HERE"
