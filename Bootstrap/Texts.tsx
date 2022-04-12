import React from 'react';


function Texts() {
  return (
    <div className="App">
      
      <h1 className="h2">Hello world</h1>
      <h1>Boostrap 5 Tutorial</h1>
  <h2>this is an h2</h2>
  <h3>this is an h3</h3>
  <h2 className="h3">this is an 2 with an h3 className</h2>

  {/* <!-- display headings --> */}
  <h1 className="display-1">display 1 heading</h1>
  <h1 className="display-2">display 2 heading</h1>
  <h1 className="display-6">display 6 heading</h1>
  <p className="display-5">paragraph with display-5 className</p>

  {/* <!-- lead text & alignment --> */}
  
  <figcaption className="lead mark">Lorem ipsum dolor sit amet consectetur adipisicing elit.</figcaption>
  <p className="blockquote-footer">someone named <cite>Dhinesh</cite></p>

  
  <p className="lead text-center">hello ninjas center</p>
  <p className="lead text-end">hello ninjas end</p>
  <p className="lead text-start">hello ninjas start</p>

  {/* <!-- text decoration & font weight --> */}
  <p className="text-decoration-underline">this is underlined text</p>
  <p className="text-decoration-line-through">this is line-through text</p>
  <p className="fw-bold">this bold text</p>
  <small>this is small text</small>

  {/* <!-- text colours --> */}
  <p className="text-primary">theme primary colour</p>
  <p className="text-secondary">theme secondary colour</p>
  <p className="text-info">theme info colour</p>
  <p className="text-warning">theme warning colour</p>
  <p className="text-success">theme warning colour</p>
  <p className="text-danger">theme danger colour</p>
  <p className="text-muted">theme danger colour</p>

  {/* <!-- bg colors --> */}
  <p className="text-white bg-primary">white text on primary bg</p>
  <p className="text-white bg-secondary">white text on secondary bg</p>
  <p className="text-light bg-danger">white text on secondary bg</p>
    </div>
  );
}

export default Texts;
