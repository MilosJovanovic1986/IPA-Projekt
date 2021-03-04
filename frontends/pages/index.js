import Commands from "../components/commands";
import DroneState from "../components/DroneState";

const IndexPage = () => (
  <div>
    <div>
      <h1>Web Interface für Drohne</h1>
      <p>Commands</p>
      <Commands />
    </div>
    <div>
      <DroneState />
    </div>
  </div>
);

export default IndexPage;
