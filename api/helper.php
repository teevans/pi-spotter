<?php

date_default_timezone_set('UTC');
define("MMDVMLOGPATH", "/var/log/pi-star");
define("MMDVMLOGPREFIX", "MMDVM");
define("MMDVMINIPATH", "/etc");
define("MMDVMINIFILENAME", "mmdvmhost");
define("MMDVMHOSTPATH", "/usr/local/bin");
define("DMRIDDATPATH", "/usr/local/etc");
define("YSFGATEWAYLOGPATH", "/var/log/pi-star");
define("YSFGATEWAYLOGPREFIX", "YSFGateway");
define("YSFGATEWAYINIPATH", "/etc");
define("YSFGATEWAYINIFILENAME", "ysfgateway");
define("P25GATEWAYLOGPATH", "/var/log/pi-star");
define("P25GATEWAYLOGPREFIX", "P25Gateway");
define("P25GATEWAYINIPATH", "/etc");
define("P25GATEWAYINIFILENAME", "p25gateway");
define("LINKLOGPATH", "/var/log/pi-star");
define("IRCDDBGATEWAY", "ircddbgatewayd");
define("REFRESHAFTER", "30");
define("TEMPERATUREHIGHLEVEL", "");
define("REBOOTMMDVM", "");
define("REBOOTSYS", "");
define("HALTSYS", "");


// Converts the TOML File to an Array to be 
// pushed to json
function getMMDVMConfig() {
	// loads /etc/mmdvmhost into array for further use
	$conf = array();
	if ($configs = @fopen(MMDVMINIPATH."/".MMDVMINIFILENAME, 'r')) {
    $lines = array();
		while ($config = fgets($configs)) {
			array_push($lines, trim ( $config, " \t\n\r\0\x0B"));
		}
		fclose($configs);

    // Now that we have the lines. Let's parse them.
    $currentHeader = "";
    foreach ($lines as $line) {

      if ($line == "") {
        continue;
      }

      if (substr($line, 0, 1) === "[") {
        $currentHeader = trim($line, "[]");
        $conf[$currentHeader] = array();
        continue;
      }

      if ($currentHeader === "") {
        continue;
      }
      $items = explode("=",$line);
      $conf[$currentHeader][$items[0]] = $items[1];
    }

	}
	return $conf;
}

?>
