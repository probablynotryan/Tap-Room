import React from "react";

export default function Soda (props) {
  return (
    <>
      <p>
        {props.name} -- {props.brand} -- {props.current} {props.id}
        <button type="button" onClick = {() => props.sellPint(props.id)}>Gimme.</button>
      </p>
    </>

  );
}