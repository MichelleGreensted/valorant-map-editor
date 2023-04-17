import "./App.css";
import { Toolbar } from "./components/Toolbar";
import { EditableMapUsingCanvas } from "./components/EditableMapUsingCanvas";
import { CustomCanvas } from "./components/CustomCanvas";

function App() {
  //empty ref here - pass it to EditableMap... as a prop
  //useEffect here to say anytime the ref changes, if it's not null and it is canvas, draw stuff
  return (
    <div className="App">
      <header className="App-header">
        <h1>Valorant Map Editor</h1>
      </header>
      <Toolbar />
      <EditableMapUsingCanvas />
    </div>
  );
}

export default App;
