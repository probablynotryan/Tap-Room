import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

export default function AddSoda(props) {

  function handleNewTicketFormSubmission(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.brand.value);
  }

  return (
    <>
      <form>
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
          name = "price"
          placeholder = "Price per Pint" />
        <button type = 'submit'>ADD IT UP.</button>
      </form>
    </>
  );
}