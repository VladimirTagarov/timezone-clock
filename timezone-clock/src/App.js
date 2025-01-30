import "./App.css";
import Header from "./components/header/Header";
import Clock from "./components/clock/Clock";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCities } from "./store/timezonesSlices";

function App() {
  // const currentQuantitys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [city, setCity] = useState();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  console.log(city);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div className="App">
      <Header
        // currentQuantitys={currentQuantitys}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <div>
        {Array.from({ length: quantity }, (_, index) => (
          <Clock key={index} index={index} city={city} setCity={setCity} />
        ))}
      </div>
    </div>
  );
}

export default App;
