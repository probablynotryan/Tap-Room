import React from "react";
import SodaList from "./SodaList";
import AddSoda from "./AddSoda";

export default class SodaControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addVisible : null,
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

  // handleAddSoda = () => {

  // }

  handleSellPint = (id) => {
    this.setState(prevState => {
      return ({sodas: prevState.sodas.map(s => (s.id === id) ?
        {...s, current: Math.max(s.current - 1, 0)} : {...s})})
    });
  }

  handleAddSodaForm = () => {
    this.setState(prevState => ({addVisible: !prevState.addVisible}))
  }

  handleAddNewSodaToList = (newSoda) => {
    const newSodaList = this.state.sodas.concat(newSoda);
    this.setState({sodas: newSodaList})
  }

  render(){
    let currentlyVisibileState = (this.state.addVisible) ? <AddSoda onNewSodaCreation = {this.handleAddNewSodaToList} /> : null;
    

    return (
      <>
      <SodaList
      sodaList = {this.state.sodas}
      sellPint = {this.handleSellPint}
      addSoda = {this.handleAddSodaForm}
        />
      {currentlyVisibileState}
      </>
    )
  }
}

