import React from "react";
import Soda from "./Soda";

export default function SodaList (props) {
  return (
    <>
      {props.sodaList.map((soda) =>
        <Soda
        name = {soda.name}
        brand = {soda.brand}
        current = {soda.current}
        id = {soda.id}
        sellPint = {props.sellPint}
        />
      )}
    </>
  )
}