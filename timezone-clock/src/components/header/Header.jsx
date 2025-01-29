import React from "react";

const Header = ({ quantity, setQuantity }) => {
  const handleSelect = (event) => {
    setQuantity(Number(event.target.value));
  };
  return (
    <div>
      <h1>Тестовое задание</h1>
      <select onChange={handleSelect} value={quantity}>
        <option>Выберите количество часов</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
      {/* <select name="" id="">
        <option>Выберите количество часов</option>
        {currentQuantitys.map((currentQuantity) => (
          <option>{currentQuantity}</option>
        ))}
      </select> */}
    </div>
  );
};

export default Header;
