import socket from "../socket";
import { useState, useEffect } from "react";
import { BiWifiOff } from "react-icons/bi";

// Using react Hooks
function useDroneState() {
  const [droneState, updateDroneState] = useState([]);
  useEffect(() => {
    socket.on("dronestate", updateDroneState);
  }, []);

  return droneState;
}

// Connection to Backend server
function useSocket() {
  const [status, updateStatus] = useState(
    <span>
      <p>
        <strong>DISCONNECTED:</strong>
        <BiWifiOff />
        You're disconnected from server, please connect you to backend server
        typing npm start in your backend directory!
      </p>
    </span>
  );
  useEffect(() => {
    socket.on("status", updateStatus);
  }, []);
  return status;
}

const DroneState = () => {
  const status = useSocket();
  const droneState = useDroneState([]);
  return (
    <div className="grid grid-cols-1 gap-3 px-10 py-10 rounded-lg text-black bg-gray-300">
      <div>
        <p>
          <strong>Status: </strong>
          <span className="text-black font-bold">{status}</span>
        </p>
      </div>
      <div className=" w-screen">
        <p className="font-bold">
          Drone State: <span className="text-green-700">{droneState}</span>
        </p>
      </div>
    </div>
  );
};
export default DroneState;
