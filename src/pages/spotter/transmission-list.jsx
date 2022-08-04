import TransmissionItem from "./transmission-item";

//const transmissions = [
//  {
//    time_utc: "2022-08-03 21:20:52",
//    mode: "YSF",
//    callsign: "KD9TTQ",
//    callsign_suffix: "",
//    target: "DG-ID 0",
//    src: "Net",
//    duration: "26.6",
//    loss: "0%",
//    bit_error_rate: "0.0%",
//    rssi: "",
//  },
//];

export default ({ transmissions }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {transmissions &&
          transmissions.map((transmission) => (
            <TransmissionItem transmission={transmission} />
          ))}
      </ul>
    </div>
  );
};
