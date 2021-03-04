import socket from "../socket";

function sendCommand(command) {
  return function () {
    console.log(`sending command: ${command}`);
    socket.emit("command", command);
  };
}
const Commands = () => (
  <div style={{ backgroundColor: "gray" }}>
    <button onClick={sendCommand("takeoff")}>Take off</button>
    <button onClick={sendCommand("land")}>Land</button>
    <button onClick={sendCommand("up 50")}>Up 50</button>
    <button onClick={sendCommand("down 50")}>Down 50</button>
    <button onClick={sendCommand("left 50")}>Left 50</button>
    <button onClick={sendCommand("right 50")}>Right 50</button>
    <button onClick={sendCommand("forward 100")}>Forward 100</button>
    <button onClick={sendCommand("back 100")}>Back 100</button>
    <button onClick={sendCommand("flip l")}>Flip Left</button>
    <button onClick={sendCommand("flip r")}>Flip Right</button>
    <button onClick={sendCommand("flip f")}>Flip Forward</button>
    <button onClick={sendCommand("flip b")}>Flip Back</button>
    <button onClick={sendCommand("battery?")}>emergency</button>
  </div>
);
export default Commands;
