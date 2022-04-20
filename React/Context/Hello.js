import React, { Component } from 'react';
import { AuthConsumer } from './context';


class Hello extends Component {
  render() {
    return (<div>
        <Hello2/>
    </div>);
  }
}

class Hello2 extends Component {
  // const props = this.context
  render() {
    return (<div>
        <Hello3/>
    </div>);
  }
}
// Hello2.contextType = MyContext


class Hello3 extends Component {
  render() {
    return (<div>
      <AuthConsumer>
          {
            props => {
              return 'hello ' + props.name + ', your lastname is ' + props.lastname
            }
          }
        </AuthConsumer>
    </div>);
  }
}

export default Hello