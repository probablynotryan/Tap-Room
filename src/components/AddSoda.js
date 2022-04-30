import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

export default function AddSoda(props) {

  function handleNewSodaFormSubmission(e) {
    e.preventDefault();
    props.onNewSodaCreation({name: e.target.name.value, calories: e.target.calories.value, brand: e.target.brand.value, price: e.target.price.value, full: 124, current: 124, id:v4()});
  }

  return (
    <>
      <form onSubmit={handleNewSodaFormSubmission}>
        <input
          type = "text"
          name = "brand"
          placeholder = "Brand" />
        <input
          type = "text"
          name = "name"
          placeholder = "Name of Soda" />
        <input
          type = "text"
          name = "calories"
          placeholder = "Calories per Pint" />
        <input
          type = "text"
          name = "price"
          placeholder = "Price per Pint" />
        <button type = 'submit'>Add Soda</button>
      </form>
    </>
  );
}

AddSoda.propTypes = {
  onNewSodaCreation: PropTypes.func
}