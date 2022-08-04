<?php

include_once 'helper.php';
header('Content-type: application/json');

$config = array();

// Mode Setup
if (file_exists('/etc/dstar-radio.mmdvmhost')) {
  $config['modem_mode'] = "MMDVM";
  $config['mmdvm_config'] = getMMDVMConfig();
} elseif (file_exists('/etc/dstar-radio.dstarrepeater')) {
  $config['modem_mode'] = "DSTARREPEATER";
} else {
  $config['modem_mode'] = "UNKNOWN";
}


echo json_encode($config);
?>
