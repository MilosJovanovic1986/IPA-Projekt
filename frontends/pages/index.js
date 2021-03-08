import Commands from "../components/commands";
import DroneState from "../components/DroneState";

const IndexPage = () => (
  <div className="flex flex-col container items-center  min-h-screen min-w-full bg-gray-800 justify-center font-sans py-6 px-4">
    <h1 className="text-5xl pt-20 pb-10 text-gray-300">
      Web Interface für Drohne
    </h1>
    <div>
      <div className="rounded-lg text-black bg-gray-300">
        <DroneState />
      </div>
      <div className="pt-10">
        <div className="pb-10">
          <Commands />
        </div>
        <div className="pt-10"></div>
      </div>
    </div>
  </div>
);

export default IndexPage;
