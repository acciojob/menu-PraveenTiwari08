import React from 'react';

function CategoryButtons({ handleFilter }) {
  return (
    <div className="buttons">
      <button onClick={() => handleFilter('all')}>All</button>
      <button onClick={() => handleFilter('breakfast')}>Breakfast</button>
      <button onClick={() => handleFilter('lunch')}>Lunch</button>
      <button onClick={() => handleFilter('shakes')}>Shakes</button>
    </div>
  );
}

export default CategoryButtons;
