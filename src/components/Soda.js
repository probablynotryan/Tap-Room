import React from "react";
import "../index.css";

export default function Soda (props) {
  return (
    <>
      <div class="sodas">
        <span>{props.name} by {props.brand} || Calories: {props.calories} || Price: ${props.price} ---&gt;</span>
        <button type="button" onClick = {() => props.sellPint(props.id)}>Gimme.</button>
      </div>
    </>

  );
}