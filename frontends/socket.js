import io from "socket.io-client";

// Connection to the backend
const socket = io("http://localhost:7000");

export default socket;
