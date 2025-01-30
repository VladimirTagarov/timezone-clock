import "./App.css";
import Header from "./components/header/Header";
import Clock from "./components/clock/Clock";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCities } from "./store/timezonesSlices";

function App() {
  const [city, setCity] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  console.log(city);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const handleCityChange = (index, newCity) => {
    setCity((prevCities) => {
      const updatedCities = [...prevCities];
      updatedCities[index] = newCity;
      return updatedCities;
    });
  };

  return (
    <div className="App">
      <Header quantity={quantity} setQuantity={setQuantity} />
      <div className="clock-container">
        {Array.from({ length: quantity }, (_, index) => (
          <div key={index}>
            <Clock
              key={index}
              index={index}
              city={city ? city[index] : "Москва"}
              setCity={(newCity) => handleCityChange(index, newCity)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
