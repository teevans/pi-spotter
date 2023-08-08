import React, { useContext } from "react";
import TransmissionList from "./spotter/transmission-list";
import { ApiContext } from "../contexts/ApiContext";
import { useQuery } from "@tanstack/react-query";
import TransmissionMap from "./spotter/transmission-map";
import YSFCard from "../components/YSFCard";

const Spotter = () => {
  const apiUrl = useContext(ApiContext);

  const { data } = useQuery(
    ["lastHeard"],
    () => fetch(`${apiUrl}/api/last_heard.php`).then((res) => res.json()),
    {
      refetchInterval: 1000,
    }
  );

  if (!data) return <></>;

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        <div>
          <p className="font-semibold font-sm text-gray-500 mb-2">Last Heard</p>
          <TransmissionList transmissions={[data[0]]} />

          <p className="font-semibold font-sm text-gray-500 mb-2 mt-2">
            Call History
          </p>
          <TransmissionList transmissions={data.slice(1)} />
        </div>
        <div>
          <p className="font-semibold font-sm text-gray-500 mb-2">
            System Fusion Settings
          </p>
          <div className="col-span-4">
            <YSFCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Spotter;
