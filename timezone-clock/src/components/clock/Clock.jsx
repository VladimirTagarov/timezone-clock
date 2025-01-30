import React, { useEffect, useState } from "react";
import SelectTime from "../select/SelectTime";
import { useSelector } from "react-redux";

const Clock = ({ city, setCity }) => {
  const [time, setTime] = useState("");
  const currentTime = new Date();
  const cities = useSelector((state) => state.timezones.cities);
  console.log("re: ", city);
  const resultOffset = cities.find((obj) => obj.city === city);
  const [cityOffset, setCityOffset] = useState("");
  useEffect(() => {
    setCityOffset(resultOffset?.offset);
  }, [city]);
  console.log(cityOffset);
  const getCurrentTime = () => {
    const date = new Date();
    // const localTime = date.getTime();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const localCurrentTime = new Date(utc + 360000 * cityOffset);
    console.log("dsds", localCurrentTime.offset);
    return localCurrentTime.toLocaleTimeString();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 10000);
    return () => clearInterval(interval);
  }, [city, setCity]);

  return (
    <div>
      <div className="App-clock-container">
        <div className="App-clock">
          <div className="arrow hour"></div>
          <div className="arrow minute"></div>
          <div className="arrow second"></div>
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
      <div>{time}</div>
      <SelectTime city={city} setCity={setCity} />
    </div>
  );
};

export default Clock;
