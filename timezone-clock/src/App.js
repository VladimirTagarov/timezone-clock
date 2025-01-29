import "./App.css";
import Header from "./components/header/Header";
import Clock from "./components/clock/Clock";
import { useState } from "react";

function App() {
  // const currentQuantitys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="App">
      <Header
        // currentQuantitys={currentQuantitys}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <div>
        {Array.from({ length: quantity }, (_, index) => (
          <Clock key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
