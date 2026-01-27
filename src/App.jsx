import "./App.css";
import WorldClock from "./Components/WorldClock";

function App() {
  const data = [
      "America/Los_Angeles",
      "Europe/London",
      "Asia/Singapore"
  ]

    return (
    <>
        <h1>World Clock</h1>

      <div>
        <img src="../public/Map.jpg" alt="Map Image"  style={{
            display: "block",
            margin: "0 auto",
            width: "700px",  // Adjust this value to make it smaller
            height: "auto"
        }} />
      </div>

        <div className="App">
            <WorldClock
                clockData={data}
            />
        </div>
    </>
  );
}

export default App;
