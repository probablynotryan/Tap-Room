import React from "react";

export default function Soda (props) {
  return (
    <>
      <p>
        {props.name} by {props.brand} -- {props.current} pints remaining
        <button type="button" onClick = {() => props.sellPint(props.id)}>Gimme.</button>
      </p>
    </>

  );
}