import React from "react"

class PizzaForm extends React.Component {
 
  clickHandler=()=>{

     this.props.patchPizza(this.props.pizza)
  }

  sizeChange = (event)=>{

    const newPizza = this.props.pizza
    newPizza.size = event.target.value
    this.props.editPizza(newPizza)
  }

  textChange = (event) =>{
    const textPizza = this.props.pizza
    textPizza.topping = event.target.value
    this.props.editPizza(textPizza)

  }

  changeHandler=(event)=>{
  
    const buttonPizza = this.props.pizza
    if (event.target.value === "Vegetarian"){
    buttonPizza.vegetarian = event.target.checked}
    else{buttonPizza.vegetarian = !event.target.checked}
    this.props.editPizza(buttonPizza)
  }


  

  render(){
   
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={this.props.pizza.topping} onChange={this.textChange}/>
        </div>
        <div className="col">
          <select value={this.props.pizza.size} className="form-control" onChange={this.sizeChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={this.props.pizza.vegetarian} onChange={this.changeHandler}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.props.pizza.vegetarian} onChange={this.changeHandler}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.clickHandler}>Submit</button>
        </div>
      </div>

  )
            }
}

export default PizzaForm
