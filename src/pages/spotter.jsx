import React, { useContext } from "react";
import TransmissionList from "./spotter/transmission-list";
import { ApiContext } from "../contexts/ApiContext";
import { useQuery } from "@tanstack/react-query";
import TransmissionMap from "./spotter/transmission-map";

const Spotter = () => {
  const apiUrl = useContext(ApiContext);

  const { data } = useQuery(
    ["lastHeard"],
    () => fetch(`${apiUrl}/api/last_heard.php`).then((res) => res.json()),
    {
      refetchInterval: 1000,
    }
  );

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        <div>
          <TransmissionList transmissions={data} />
        </div>
        <div className="col-span-4 bg-white shadow overflow-hidden sm:rounded-md">
          <TransmissionMap transmissions={data} />
        </div>
      </div>
    </>
  );
};

export default Spotter;
