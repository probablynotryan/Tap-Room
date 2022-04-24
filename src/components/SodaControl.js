import React from "react";
import SodaList from "./SodaList";

export default class SodaControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sodas: [
        {
          name: 'Wizzys Fizzies'
        }
      ]
    };
  }
  render(){
    return (
      <>
      <p>test : {this.state.sodas[0].name}</p>
      </>
    )
  }
}

