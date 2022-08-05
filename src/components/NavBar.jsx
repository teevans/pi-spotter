import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

const NavBar = () => {
  const apiUrl = useContext(ApiContext);
  const { data } = useQuery(["config"], () =>
    fetch(`${apiUrl}/pispotter/api/config.php`).then((res) => res.json())
  );

  console.log(data);

  if (!data) {
    return <></>;
  }

  const formattedFrequency = (freq) => {
    return `${freq.substr(0, 3)}.${freq.substr(3, 3)}`;
  };

  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <div className="h-full items-center">
        <h1 className="text-2xl mt-4 ml-9 font-bold text-gray-800">
          <strong>{data.mmdvm_config.general.Callsign}</strong>&nbsp;Pi-Spotter
        </h1>
      </div>
      <div style={{ width: "1px" }} className="h-full mx-9 bg-gray-100"></div>
      <div>
        <span className="inline-flex items-center mt-4 px-3 py-0.5 rounded-full text-lg font-medium bg-pink-100 text-pink-800">
          On Air
        </span>
        <span className="font-semibold ml-4">
          {data.mmdvm_config.info.RXFrequency ===
            data.mmdvm_config.info.TXFrequency && (
            <>
              TX/RX:{formattedFrequency(data.mmdvm_config.info.RXFrequency)}Mhz
            </>
          )}
          {data.mmdvm_config.info.RXFrequency !==
            data.mmdvm_config.info.TXFrequency && (
            <>
              RX:{formattedFrequency(data.mmdvm_config.info.RXFrequency)}Mhz |
              TX:{formattedFrequency(data.mmdvm_config.info.TXFrequency)}Mhz
            </>
          )}
        </span>
      </div>
      <div style={{ width: "1px" }} className="h-full mx-9 bg-gray-100"></div>
    </div>
  );
};

export default NavBar;
