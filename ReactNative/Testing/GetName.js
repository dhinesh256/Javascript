import React, { Component } from "react";
import {View,TextInput,Text} from 'react-native'
class GetName extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    },this.checkFields);
  };
  
  render() {
    return (
      <View>
          <TextInput 
          type="text"
          name="title"
          value={this.state.title}
          onChange={event => {
            this.handleChange(event);  
          }}
        />
        <Text>{this.state.title}</Text>
        
      </View>
        
    );
  }
}
export default GetName;