import React from "react"

const PizzaForm = ({pizza, handleChange, submitUpdate}) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={e => handleChange(e, pizza)} name="topping" className="form-control" placeholder="Pizza Topping" value={
                pizza.topping
              }/>
        </div>
        <div className="col">
          <select value={pizza.size} name="size" onChange={e => handleChange(e, pizza)} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name='vegetarian' type="radio" value="Vegetarian" onChange={e => handleChange(e, pizza)} checked={pizza.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name='vegetarian' type="radio" value="Not Vegetarian" onChange={e => handleChange(e, pizza)} checked={!pizza.vegetarian? true : false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={e => pizza.id !== undefined ? submitUpdate(pizza, e) : null}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
