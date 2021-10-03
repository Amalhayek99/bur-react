import React from "react";
import dishes from "../data.js";

// const categories = [
//   "all",
//   "burger",
//   "hot dog",
//   "sandwich",
//   "fries",
//   "topping",
//   "drink",
//   "extra",
// ];

function DishList(props) {
  return (
    <section className="dishes">
      <h2>Dishes</h2>
      <ul className="grid">
        <li className="card">dishes go here</li>
        {dishes
          .filter((dish) => dish.price >= props.min && dish.price <= props.max)
          .filter((dish) => dish.category === props.cat || props.cat === "all")
          .map((dish, index) => (
            <li className="card" key={index}>
              <b>{dish.name}</b>
              <p>{dish.description}</p>
              <span>฿{dish.price}.00</span>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default DishList;
