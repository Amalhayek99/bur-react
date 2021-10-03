import React from "react";

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

function PriceFilter(props) {
  return (
    <fieldset>
      <legend>Price:</legend>

      <input
        type="range"
        id="Min Price"
        name="Min Price"
        min="0"
        max="9"
        step="0.5"
        value={props.min}
        onChange={(event) => props.setMin(event.target.value)}
      />
      <label htmlFor="Min Price">Min Price</label>

      <input
        type="range"
        id="Max Price"
        name="Max Price"
        min="0"
        max="9"
        step="0.5"
        value={props.max}
        onChange={(event) => props.setMax(event.target.value)}
      />
      <label htmlFor="Max Price">Max Price</label>
    </fieldset>
  );
}

export default PriceFilter;
