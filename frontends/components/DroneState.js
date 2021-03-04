import socket from "../socket";
import { useState, useEffect } from "react";

function useDroneState() {
  const [droneState, updateDroneState] = useState([]);
  useEffect(() => {
    console.log("hey");
    socket.on("dronestate", updateDroneState);
  }, []);

  return droneState;
}

function useSocket() {
  const [status, updateStatus] = useState("DISCONNECTED");
  useEffect(() => {
    socket.on("status", updateStatus);
  }, []);
  return status;
}
//     socket.on('status', message => {
//         console.log('Message from socket');
//         updateStatus(message);
//     });
//     return status;
// }
const DroneState = () => {
  const status = useSocket();
  const droneState = useDroneState([]);
  // console.log(droneState);
  return (
    <div>
      <p>Status: {status}</p>
      <p>Drone State: {droneState}</p>
      Drone state
    </div>
  );
};
export default DroneState;
