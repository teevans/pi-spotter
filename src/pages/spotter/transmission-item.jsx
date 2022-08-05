import React from "react";
import { useQuery } from "@tanstack/react-query";
import { timeSince } from "../../helpers/time";
import { countryForCallsign } from "../../helpers/countries";
import ReactCountryFlag from "react-country-flag";

const CallsignOnly = ({ transmission }) => (
  <div className="px-4 py-4 sm:px-6">
    <div className="flex items-center justify-between">
      <p className="text-2xl font-bold text-indigo-600 truncate">
        {transmission.callsign}
        <ReactCountryFlag
          style={{ verticalAlign: "inherit" }}
          className="h-8 ml-2 pt-1 shadow"
          countryCode={countryForCallsign(transmission.callsign).country_code}
          svg
        />

        {transmission.bit_error_rate === "" && (
          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            TX
          </p>
        )}
      </p>
    </div>
    <div className="mt-2 sm:flex sm:justify-between">
      <div className="sm:flex">
        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {transmission.mode}
          </span>
        </p>
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
        <p>
          <strong>{timeSince(transmission.time_utc)}</strong>
        </p>
      </div>
    </div>
  </div>
);

const FullLookup = ({ transmission, callsign }) => (
  <div className="px-4 py-4 sm:px-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-2xl font-bold text-indigo-600 truncate">
          {transmission.callsign}
          <ReactCountryFlag
            style={{ verticalAlign: "inherit" }}
            className="h-8 ml-2 pt-1 shadow"
            countryCode={countryForCallsign(transmission.callsign).country_code}
            svg
          />
        </p>
        <p className="font-bold truncate">{callsign.name}</p>
        <p className="truncate text-sm">{callsign.address.line2}</p>
      </div>
      <div className="ml-2 flex-shrink-0 flex">
        {transmission.bit_error_rate === "" && (
          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            TX
          </p>
        )}
      </div>
    </div>
    <div className="mt-2 sm:flex sm:justify-between">
      <div className="sm:flex">
        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {transmission.mode}
          </span>
        </p>
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
        <p>
          <strong>{timeSince(transmission.time_utc)}</strong>
        </p>
      </div>
    </div>
  </div>
);

const TransmissionItem = ({ transmission }) => {
  // Fetch Callsign Information
  const { data, isLoading } = useQuery(
    [transmission.callsign],
    () =>
      fetch(`https://callook.info/${transmission.callsign}/json`).then((res) =>
        res.json()
      ),
    {
      cacheTime: 1000 * 60 * 60,
    }
  );

  if (!transmission) return <></>;

  return (
    <li key={transmission.time_utc}>
      <a
        rel="noreferrer"
        href={`https://qrz.com/db/${transmission.callsign}`}
        target="_blank"
        className="block hover:bg-gray-50"
      >
        {(!data || isLoading || data.status === "INVALID") && (
          <CallsignOnly transmission={transmission} />
        )}
        {data && data.status !== "INVALID" && (
          <FullLookup callsign={data} transmission={transmission} />
        )}
      </a>
    </li>
  );
};

export default TransmissionItem;
