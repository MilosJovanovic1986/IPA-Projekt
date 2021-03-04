import io from "socket.io-client";

// This socket use for connection to backend
const socket = io("http://localhost:7000");

export default socket;
// const io = require("socket.io")(httpServer, {
//     cors: {
//       origin: "http://localhost:7000",
//       methods: ["GET", "POST"]
//     }
//   });

//   httpServer.listen(7000);
