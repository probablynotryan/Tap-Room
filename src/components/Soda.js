import React from "react";
import "../index.css";

export default function Soda (props) {
  return (
    <>
      <div class="sodas">
        {props.name} by {props.brand} -- {props.current} pints remaining -&gt;
        <button type="button" onClick = {() => props.sellPint(props.id)}>Gimme.</button>
      </div>
    </>

  );
}