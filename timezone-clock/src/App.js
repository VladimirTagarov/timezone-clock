import "./App.css";
import Header from "./components/header/Header";
import Clock from "./components/clock/Clock";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCities } from "./store/timezonesSlices";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCities = async () => {
      setIsLoading(true);
      await dispatch(fetchCities());
      setIsLoading(false);
    };
    loadCities();
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

      {isLoading ? (
        <>
          <div className="App-small-text"> Загружаю ваши данные... </div>
          <div className="clock-container">
            {/* Создаем массив из компонентов Clock в количестве переданном в пропсах quantity из выбранном пользователем через select */}
            {Array.from({ length: quantity }, (_, index) => (
              <div key={index}>
                <Clock
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  key={index}
                  index={index}
                  city={city ? city[index] : "Москва"}
                  setCity={(newCity) => handleCityChange(index, newCity)}
                />
              </div>
            ))}{" "}
          </div>
        </>
      ) : (
        <div className="clock-container">
          {/* Создаем массив из компонентов Clock в количестве переданном в пропсах quantity из выбранном пользователем через select */}
          {Array.from({ length: quantity }, (_, index) => (
            <div key={index}>
              <Clock
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                key={index}
                index={index}
                city={city ? city[index] : "Москва"}
                setCity={(newCity) => handleCityChange(index, newCity)}
              />
            </div>
          ))}{" "}
        </div>
      )}
    </div>
  );
}

export default App;
