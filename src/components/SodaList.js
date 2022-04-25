import React from "react";
import Soda from "./Soda";
import PropTypes from "prop-types";

export default function SodaList (props) {
  return (
    <>
      {props.sodaList.map((soda) =>
        <Soda 
        key = {soda.id}
        name = {soda.name}
        brand = {soda.brand}
        current = {soda.current}
        id = {soda.id}
        sellPint = {props.sellPint}
        addSoda = {props.addSoda}
        />
      )}
      <button onClick={() => props.addSoda()}>Add MOAR SODA.</button>
    </>
  )
}

SodaList.propTypes = {
  sodaList: PropTypes.array
};