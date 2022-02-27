import React from 'react'
import { Button , View ,Text} from 'react-native'
import { clearTodos } from '../actions/todoActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export function ClearButton(props) {

    const clearAllTodos = () => {
        props.clearTodos()
    }
  return (
    <View>
        <Button onPress={clearAllTodos} title='Clear All'>
        </Button>
    </View>
    )
}


const mapStateToProps = () => ({
});
  
const mapDispatchToProps = (dispatch) =>
bindActionCreators({ clearTodos }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(ClearButton);