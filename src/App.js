import "./App.css";
import Form from "./Form";

function App() {
  const savedName = localStorage.getItem("name");

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "30px" }}>
      {savedName ? <h1>Welcome {savedName}</h1> : <Form />}
    </div>
  );
}

export default App;
