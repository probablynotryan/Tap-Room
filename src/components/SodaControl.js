import React from "react";
import SodaList from "./SodaList";

export default class SodaControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sodas: [
        {
          name: 'Dr. Salt',
          brand: 'Wizzys Fizzies',
          price: 4,
          full: 124,
          current: 124,
          id: 1
        },
        {
          name: 'Valley Dew',
          brand: 'Bestseat Zola',
          price: 4,
          full: 124,
          current: 124,
          id: 2
        },
        {
          name: 'Banta',
          brand: 'Bestseat Zola',
          price: 4.5,
          full: 124,
          current: 124,
          id: 3
        }
      ]
    };
  }

  handleSellPint = (id) => {
    this.setState(prevState => {
      return ({sodas: prevState.sodas.map(s => (s.id === id) &&
        {...s, current: Math.max(s.current - 1, 0)} || {...s})})
    });
  }


  render(){
    return (
      <>
      <SodaList
      sodaList = {this.state.sodas}
      sellPint = {this.handleSellPint}
        />
      </>
    )
  }
}

