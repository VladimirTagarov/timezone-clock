import React, { useState } from "react";
import { useSelector } from "react-redux";

const SelectTime = ({ city, setCity }) => {
  const cities = useSelector((state) => state.timezones.cities);
  const handleCities = (event) => {
    setCity(event.target.value);
  };
  return (
    <>
      <select onChange={handleCities}>
        {cities.map((city, index) => (
          <option key={index}>{city.city}</option>
        ))}
      </select>
    </>
  );
};

export default SelectTime;
