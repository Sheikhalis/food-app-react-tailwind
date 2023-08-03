// Pizza.js
import React from 'react';

const Pizza = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default Pizza;
