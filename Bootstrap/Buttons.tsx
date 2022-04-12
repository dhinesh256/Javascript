import React from 'react'

function Buttons() {


  return (
  <div>

  {/*  basic buttons */}
  <h2>Buttons</h2>

  <button>default button</button>
  <button className="btn btn-primary" >primary button</button> 
  {/* auto lightens text */}
  <button className="btn btn-secondary " disabled>disabled secondary button</button>

{/* anchor tags as buttons */}
  <h2>Links as buttons</h2>

  <a href="#" className="btn btn-info" >info anchor tag</a>
  <a href="#" className="btn btn-success disabled" aria-disabled="true"> disabled success anchor tag</a>

{/* button sizes */}
  <h2>Button sizes</h2>

  <button className="btn btn-lg btn-danger">large danger button</button>
  <button className="btn btn-sm btn-warning">small warning button</button>

{/* outlined styles */}
  <h2>Button Styles</h2>

    {/* on hover colour change */}
  <button className="btn btn-outline-primary">outlined button</button>
  <button className="btn btn-outline-secondary btn-lg">large outlined button</button>

{/* button groups*/}
  <h2>Button Groups</h2>

  <div className="btn-group">
    <a href="#" className="btn btn-primary">button 1</a>
    <a href="#" className="btn btn-warning">button 2</a>
    <a href="#" className="btn btn-success">button 3</a>
  </div>
  </div>

  )
}

export default Buttons