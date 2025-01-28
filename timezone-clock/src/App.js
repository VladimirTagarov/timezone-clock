import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <select>
          <option>Выберите город</option>
        </select>
      </header>
    </div>
  );
}

export default App;
