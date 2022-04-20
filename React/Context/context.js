import React from "react";
import Hello from "./Hello";

const MyContext = React.createContext("hello class component");
export const AuthConsumer = MyContext.Consumer


class MyClass extends React.Component {
    // componentDidMount() {
    //   let value = this.context;
    //   /* perform a side-effect at mount using the value of MyContext */
    // }
    // componentDidUpdate() {
    //   let value = this.context;
    //   /* ... */
    // }
    // componentWillUnmount() {
    //   let value = this.context;
    //   /* ... */
    // }
    static MyClass = MyContext
    render() {
      //let value = this.context;
      /* render something based on the value of MyContext */
      return(
          <div>
              <MyContext.Provider value={{name:'dhinesh',lastname:'kumar'}}>
                    <Hello />
              </MyContext.Provider>
              
          </div>
      )
    }
  }
//   MyClass.contextType = MyContext;

  export default MyClass