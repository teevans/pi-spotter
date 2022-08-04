import React, { useContext } from "react";
import TransmissionList from "./spotter/transmission-list";
import { ApiContext } from "../contexts/ApiContext";
import { useQuery } from "@tanstack/react-query";

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
      <h1 className="text-4xl font-bold">Spotter</h1>
      <p>Contacts will appear here as they call in. </p>

      <div className="mt-4">
        <TransmissionList transmissions={data} />
      </div>
    </>
  );
};

export default Spotter;
