import TransmissionItem from "./transmission-item";

const TransmissionList = ({ transmissions }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {transmissions &&
          transmissions.map((transmission) => (
            <TransmissionItem transmission={transmission} />
          ))}
      </ul>
    </div>
  );
};

export default TransmissionList;
