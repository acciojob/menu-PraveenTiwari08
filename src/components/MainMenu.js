import React from 'react';

function MainMenu({ data }) {
  const menuItems = data.map((item) => (
    <div key={item.id} className="menu-item">
      <div>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <p>${item.price}</p>
      </div>
    </div>
  ));

  return <div className="menu">{menuItems}</div>;
}

export default MainMenu;
