import React from 'react'

function Utilityclass() {
  return (
    <div>
        {/* <!-- margin & padding --> */}
  <div className="m-1 p-1 bg-primary">small margin & padding</div>
  <div className="m-5 p-5 bg-primary">large margin & padding</div>
  <div className="my-3 px-5 bg-primary">margin in y dir, padding in x dir</div>
  <div className="mt-3 mb-4 ps-5 pt-4 pe-2 pb-1 bg-primary">m & p for each direction</div>
  {/* In horizontal direction reffered as start and end */}

  {/* <!-- borders --> */}
  <div className="m-3 p-3 border">default border</div>
  <div className="m-3 p-3 border-top border-end">individual borders</div>
  <div className="m-3 p-3 border-start border-success">border success colour</div>
  <div className="m-3 p-3 border-start border-danger border-5">thicker border</div>
  <div className="m-3 p-3 rounded border border-5">rounded corners</div>
  <div className="m-3 p-3 rounded-pill border border-5">rounded corners</div>

  {/* <!-- box shadow --> */}
  <div className="m-3 p-3 shadow-sm ">element with small shadow</div>
  <div className="m-3 p-3 shadow">element with shadow</div>

  {/* <!-- font weight and font style--> */}
  <p className="fw-bold">bold text</p>
  <p className="fw-bolder">bolder text</p>
  <p>normal text</p>
  <p className="fw-light">light text</p>
  <p className="fst-italic">italic text</p>
  <p className="fst-italic fw-light">italic light text</p>
    </div>
  )
}

export default Utilityclass