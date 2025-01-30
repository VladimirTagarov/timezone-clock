import React from "react";

const Header = ({ quantity, setQuantity }) => {
  const handleSelect = (event) => {
    setQuantity(Number(event.target.value));
  };
  return (
    <div>
      <h1 className="App-text">Тестовое задание</h1>
      <h3 className="App-small-text">Выберите необходимое количество часов</h3>
      <select onChange={handleSelect} value={quantity}>
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
    </div>
  );
};

export default Header;
