import Edit from "./components/edition/Edit";
import "./styles/App.css";
import RenderedCv from "./components/rendering/RenderedCv";

function App() {
  return (
    <div className="app-container">
      <Edit></Edit>
      <RenderedCv></RenderedCv>
    </div>
  );
}

export default App;
