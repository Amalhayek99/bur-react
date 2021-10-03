import React from "react";
// import dishes from "../data.js";
import PriceFilter from "./PriceFilter.jsx";
import DishList from "./DishList";
import CatFilter from "./CategoryFilter.jsx";

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

function App() {
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(9);
  const [cat, setCat] = React.useState("all");
  console.log(CatFilter);
  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <form>
          <PriceFilter min={min} setMin={setMin} max={max} setMax={setMax} />
          <CatFilter cat={cat} setCat={setCat} />
        </form>
      </section>
      <DishList min={min} max={max} cat={cat} />
    </main>
  );
}

export default App;
