import React from "react";
import dishes from "../data.js";

const categories = [
  "all",
  "burger",
  "hot dog",
  "sandwich",
  "fries",
  "topping",
  "drink",
  "extra",
];

function CatFilter(props) {
  return (
    <fieldset>
      <legend>Categories</legend>
      {categories.map((currentCategory) => (
        <label htmlFor={currentCategory} key={currentCategory}>
          {" "}
          {currentCategory}
          <input
            checked={props.cat === currentCategory}
            type="radio"
            name="categories"
            id={currentCategory}
            value={currentCategory}
            onChange={(event) => props.setCat(event.target.value)}
          ></input>
        </label>
      ))}
    </fieldset>
  );
}

export default CatFilter;
