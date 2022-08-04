
if [[ $(/usr/bin/id -u) -ne 0 ]]; then
    echo "Pi-Spotter requires root to be installed. Please try again using sudo!"
    exit
fi

# Create tmp file
echo "Creating temp download location.."
mkdir /tmp/pispotter
echo "Created /tmp/pispotter"

# Download the compiled version of pi-spotter from releases
echo "Downloading latest release"
wget https://github.com/

# Copy the contents to an nginx available folder

# Copy the pi-spotter nginx file to /etc/nginx/default.d/pispotter.conf

# Reload nginx

# Present url for accses
