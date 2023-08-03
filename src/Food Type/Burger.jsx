// Burger.js
import React from 'react';

const Burger = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default Burger;
