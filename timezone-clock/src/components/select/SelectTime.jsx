import React, { useState } from "react";
import { useSelector } from "react-redux";

const SelectTime = ({ city, setCity }) => {
  const cities = useSelector((state) => state.timezones.cities);
  //   const citiesArr = cities.map((city) => city.city);

  const handleCities = (event) => {
    setCity(event.target.value);
  };
  //   console.log("cities: ", citiesArr);
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
