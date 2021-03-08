/* eslint-disable react/react-in-jsx-scope */
import socket from "../socket";
import { MdFlightLand, MdFlightTakeoff, MdForward } from "react-icons/md";
import {
  HiArrowDown,
  HiArrowLeft,
  HiArrowRight,
  HiArrowUp,
} from "react-icons/hi";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";

function sendCommand(command) {
  return function () {
    console.log(`sending command: ${command}`);
    socket.emit("command", command);
  };
}
const Commands = () => (
  <section>
    <h1 className="text-2xl text-gray-300">Commands</h1>
    <div>
      <div className="grid grid-cols-3 gap-3 border-b-8 pb-7 border-t-8 pt-7 border-white-500">
        <div className="flex justify-center items-center text-2xl  p-4 btn-takeoff">
          <button onClick={sendCommand("takeoff")}>
            <span className="flex justify-center">
              <MdFlightTakeoff />
            </span>
            Take off
          </button>
        </div>
        <div className="flex justify-center items-center btn-direction text-center text-2xl">
          <button onClick={sendCommand("forward 50")}>
            <span className="flex justify-center">
              <HiArrowUp />
            </span>
            Forward 50 cm
          </button>
        </div>
        <div className="flex justify-center items-center text-2xl p-4 rounded-lg btn-land">
          <button onClick={sendCommand("land")}>
            <span className="flex justify-center">
              <MdFlightLand />
            </span>
            Land
          </button>
        </div>
        <div className="flex justify-center items-center text-2xl p-4 rounded-lg btn-direction">
          <button onClick={sendCommand("left 50")}>
            <span className="flex justify-center">
              <HiArrowLeft />
            </span>
            Left 50 cm
          </button>
        </div>
        <div className="flex justify-center items-center lg:text-2xl sm:text-xs p-4 rounded-lg btn-emergency">
          <button onClick={sendCommand("emergency")}>
            <span className="flex justify-center">
              <MdFlightLand />
            </span>
            EMERGENCY
          </button>
        </div>
        <div className="flex justify-center items-center text-2xl p-4 rounded-lg btn-direction">
          <button onClick={sendCommand("right 50")}>
            <span className="flex justify-center">
              <HiArrowRight />
            </span>
            Right 50 cm
          </button>
        </div>
        <div className="flex justify-center items-center text-2xl p-4 rounded-lg btn-upDown">
          <button onClick={sendCommand("up 50")}>
            <span className="flex justify-center">
              <BiArrowToTop />
            </span>
            Up 50 cm
          </button>
        </div>
        <div className="flex justify-center items-center text-2xl p-4 rounded-lg btn-direction">
          <button onClick={sendCommand("back 50")}>
            <span className="flex justify-center">
              <HiArrowDown />
            </span>
            Back 50 cm
          </button>
        </div>
        <div className="flex justify-center items-center text-2xl p-4  rounded-lg btn-upDown">
          <button onClick={sendCommand("down 50")}>
            <span className="flex justify-center">
              <BiArrowToBottom />
            </span>
            Down 50 cm
          </button>
        </div>
        <div className="flex justify-center items-center text-2xl p-4 rounded-lg btn-flip">
          <button onClick={sendCommand("flip r")}>Flip Right</button>
        </div>
        <div className="flex justify-center items-center text-2xl p-4 rounded-lg btn-flip">
          <button onClick={sendCommand("flip l")}>Flip Left</button>
        </div>
        <div className="flex justify-center items-center text-2xl p-4 rounded-lg btn-flip">
          <button onClick={sendCommand("flip f")}>Flip Forward</button>
        </div>
        <div className="flex justify-center items-center text-2xl p-4 rounded-lg btn-flip">
          <button onClick={sendCommand("flip b")}>
            <span className="flex justify-center"></span>Flip Back
          </button>
        </div>
      </div>
    </div>
  </section>
);
export default Commands;
