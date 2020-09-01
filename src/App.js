import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {


  constructor(){
    super()
    this.state={
      originalApi:[],
      pizzas:[],
      pizzaData: {}
    }
  }

  api = "http://localhost:3001/pizzas/"

  editPizza =(newPizza)=>{
    this.setState({...this.state,
    pizzaData: newPizza})
   

  }

  patchPizza=(pizza)=>{
    if(pizza.id){
      const pizzaID = pizza.id
    this.patchDatabase(pizzaID,pizza)
    this.setState({...this.state,
      pizzaData: {}
    })
    }else{
      console.log('there is nothing here')
    }
  }

  patchDatabase =(id,newPizza)=>{
    const options ={
      method:"PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"},
        body: JSON.stringify(newPizza)
      }
      fetch(this.api+id, options)
      .then(response => response.json())
      

    }
 
  
  
    componentDidMount(){
      this.fetchPizza()
    }


    fetchPizza(){
      fetch(this.api)
      .then(response => response.json())
      .then(pizzas => {
        
        this.setState({
          ...this.state,
          originalApi: pizzas,
          pizzas: pizzas
        })
        
       
        
      })
    }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizzaData} editPizza={this.editPizza} patchPizza={this.patchPizza}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
