import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(){
    super()
    this.state = {
      pizzas: [],
      selectedPizza: {}
    }
  }

  // initial fetch to get all the pizzas from the server
  componentDidMount() {
    fetch(`http://localhost:3000/pizzas`)
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas: pizzas}))
  }

  handleEdit = pizza => {
    this.setState({selectedPizza: pizza})
  }

  handleChange = (e, pizza) => {
    // debugger
    if (e.target.name === "vegetarian" && e.target.value === "Vegetarian") {
      this.setState({selectedPizza: {...pizza, [e.target.name]: true}})
    } else if (e.target.name === 'vegetarian' && e.target.value === 'Not Vegetarian') {
      this.setState({selectedPizza: {...pizza, vegetarian: false}})
    } else{
      this.setState({selectedPizza: {...pizza, [e.target.name]: e.target.value}})
    }
    console.log(this.state.selectedPizza)
  }

  submitUpdate = (pizza, e) => {
    
    this.setState({selectedPizza: {}, pizzas: this.state.pizzas.map(p => 
      {
        if (p.id === pizza.id) {
          this.handlePizzaPatch(pizza)
          return pizza
        } else {return p}
      })
    })
  }

  handlePizzaPatch(pizza){
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(pizza)
    })
    .then(res => res.json())
    .then(console.log)
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.selectedPizza} handleChange={this.handleChange} submitUpdate={this.submitUpdate}/>
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit} />
      </Fragment>
    );
  }
}

export default App;
