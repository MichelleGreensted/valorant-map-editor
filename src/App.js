import "./App.css";
import { Toolbar } from "./components/Toolbar";
import { EditableMap } from "./components/EditableMap";

function App() {
  return (
    <div className="App">
      <header className="App-header">Valorant Map Editor</header>
      <Toolbar />
      <EditableMap />
    </div>
  );
}

export default App;
