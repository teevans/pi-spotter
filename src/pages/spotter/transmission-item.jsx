import React from "react";
import { ClockIcon } from "@heroicons/react/outline";
import { useQuery } from "@tanstack/react-query";

const CallsignOnly = ({ transmission }) => (
  <div className="px-4 py-4 sm:px-6">
    <div className="flex items-center justify-between">
      <p className="text-2xl font-bold text-indigo-600 truncate">
        {transmission.callsign}
      </p>
      <div className="ml-2 flex-shrink-0 flex">
        {transmission.bit_error_rate === "" && (
          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            TX
          </p>
        )}
        {transmission.bit_error_rate !== "" && (
          <>
            <span className="text-sm text-gray-500 mr-1">Error Rate</span>
            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {transmission.bit_error_rate}
            </p>
          </>
        )}
      </div>
    </div>
    <div className="mt-2 sm:flex sm:justify-between">
      <div className="sm:flex">
        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
          <span className="font-bold">Mode&nbsp;</span>
          {transmission.mode}
        </p>
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
        <ClockIcon
          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <p>
          Heard for&nbsp;
          <strong>{transmission.duration}</strong> Sec
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
          {callsign.name}
        </p>
        <p className="font-medium truncate">{transmission.callsign}</p>
        <p className="truncate text-sm">{callsign.address.line1}</p>
      </div>
      <div className="ml-2 flex-shrink-0 flex">
        {transmission.bit_error_rate === "" && (
          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            TX
          </p>
        )}
        {transmission.bit_error_rate !== "" && (
          <>
            <span className="text-sm text-gray-500 mr-1">Error Rate</span>
            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {transmission.bit_error_rate}
            </p>
          </>
        )}
      </div>
    </div>
    <div className="mt-2 sm:flex sm:justify-between">
      <div className="sm:flex">
        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
          <span className="font-bold">Mode&nbsp;</span>
          {transmission.mode}
        </p>
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
        <ClockIcon
          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <p>
          Heard for&nbsp;
          <strong>{transmission.duration}</strong> Sec
        </p>
      </div>
    </div>
  </div>
);

export default ({ transmission }) => {
  // Fetch Callsign Information
  const { data, isLoading, error } = useQuery(
    [transmission.callsign],
    () =>
      fetch(`https://callook.info/${transmission.callsign}/json`).then((res) =>
        res.json()
      ),
    {
      cacheTime: 1000 * 60 * 60,
    }
  );

  return (
    <li key={transmission.time_utc}>
      <a href="#" className="block hover:bg-gray-50">
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

/* This example requires Tailwind CSS v2.0+ */
