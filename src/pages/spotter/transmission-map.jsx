import React, { useEffect, useState } from "react";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { countryForCallsign } from "../../helpers/countries";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const TransmissionMap = ({ transmissions }) => {
  const [countryCodes, setCountryCodes] = useState({});

  useEffect(() => {
    if (!transmissions) return;
    let codes = {};
    transmissions.forEach((transmission) => {
      codes[countryForCallsign(transmission.callsign).country_code] = true;
    });
    setCountryCodes(codes);
  }, [transmissions]);

  return (
    <ComposableMap
      projection={"geoEquirectangular"}
      projectionConfig={{
        scale: 130,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const shouldHighlight = countryCodes[geo.properties["Alpha-2"]];
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: shouldHighlight
                      ? "rgb(79 70 229)"
                      : "rgba(0,0,0,0.2)",
                    stroke: "rgba(0,0,0,0.1)",
                  },
                  hover: {
                    fill: shouldHighlight
                      ? "rgba(79, 70, 229, 0.95)"
                      : "rgba(0,0,0,0.3)",
                    stroke: "rgba(0,0,0,0.1)",
                  },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default TransmissionMap;
