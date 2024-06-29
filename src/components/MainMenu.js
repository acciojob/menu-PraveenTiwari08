import React, { useState } from "react";

function MainMenu({ data }) {
  const [filterData, setfilterData] = useState(data);

  const handler = (category)=> {
    if(category === "all"){
      setfilterData(data)
    }else{
      const filter = data.filter(
        item => item.category === category
      )
      setfilterData(filter)
    }
  }

  const alldata = filterData.map((item) => {
    return <div key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <img src={item.img} alt={item.title} />
      <p>${item.price}</p>
    </div>;
  });

  return (
    <div>
      <h1>Our Menu</h1>
      <button
        style={{ width: "90px", height: "50px", backgroundColor: "lightblue" , cursor:"pointer" }}
        onClick={() => handler("all")}
      >
        All
      </button>
      <button
        style={{ width: "90px", height: "50px", backgroundColor: "lightblue" }}
        onClick={() => handler("breakfast")}
      >
        Breakfast
      </button>
      <button
        style={{ width: "90px", height: "50px", backgroundColor: "lightblue" }}
        onClick={() => handler("lunch")}
      >
        Lunch
      </button>
      <button
        style={{ width: "90px", height: "50px", backgroundColor: "lightblue" }}
        onClick={() => handler("shakes")}
      >
        Shakes
      </button>
      {alldata}
    </div>
  );
}

export default MainMenu;
