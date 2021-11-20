import "./App.css";
import Trees from "./Trees";
import ZoomBox from "./ZoomBox";

function App() {
  return (
    <>
      <h1 className="tree__title">Tree Chart</h1>
      <ZoomBox>
        <Trees />
      </ZoomBox>
    </>
  );
}

export default App;
