import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Clock = ({ city, setCity }) => {
  const [time, setTime] = useState();
  const currentTime = new Date();
  const cities = useSelector((state) => state.timezones.cities);
  const resultOffset = cities.find((obj) => obj.city === city);
  const [cityOffset, setCityOffset] = useState(resultOffset?.offset || 3);
  useEffect(() => {
    if (resultOffset) {
      setCityOffset(resultOffset.offset);
    }
  }, [city, resultOffset]);
  const getCurrentTime = () => {
    const date = new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const localCurrentTime = new Date(utc + 3600000 * cityOffset);
    return localCurrentTime.toLocaleTimeString();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [cityOffset]);

  const handleCities = (event) => {
    setCity(event.target.value);
  };

  function timeStringToDate(timeString) {
    if (typeof timeString === "string") {
      const [hours, minutes, seconds] = timeString.split(":").map(Number);
      const date = new Date(); // Создаем объект Date с текущей датой
      date.setHours(hours, minutes, seconds); // Устанавливаем часы, минуты и секунды
      return date;
    }
    return null;
  }

  const seconds =
    timeStringToDate(time) instanceof Date
      ? timeStringToDate(time).getSeconds()
      : 0;
  const minutes =
    timeStringToDate(time) instanceof Date
      ? timeStringToDate(time).getMinutes()
      : 0;
  const hours =
    timeStringToDate(time) instanceof Date
      ? timeStringToDate(time).getHours() % 12
      : 0;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds / 10;
  const hourDeg = hours * 30 + minutes / 2;

  return (
    <div>
      <div className="App-clock-container">
        <div className="App-clock">
          <div
            className="arrow hour"
            style={{ transform: `rotate(${hourDeg}deg)` }}
          ></div>
          <div
            className="arrow minute"
            style={{ transform: `rotate(${minuteDeg}deg)` }}
          ></div>
          <div
            className="arrow second"
            style={{ transform: `rotate(${secondDeg}deg)` }}
          ></div>
          <div className="streak streak_1"></div>
          <div className="streak streak_2"></div>
          <div className="streak streak_3"></div>
          <div className="streak streak_4"></div>
          <div className="streak streak_5"></div>
          <div className="streak streak_6"></div>
          <div className="streak streak_7"></div>
          <div className="streak streak_8"></div>
          <div className="streak streak_9"></div>
          <div className="streak streak_10"></div>
          <div className="streak streak_11"></div>
          <div className="streak streak_12"></div>
        </div>
      </div>
      <div className="App-small-text">{time}</div>
      <select onChange={handleCities}>
        {cities.map((cityObj, index) => (
          <option key={index} value={cityObj.city}>
            {cityObj.city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Clock;
