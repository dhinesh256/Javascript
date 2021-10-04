import React from 'react';
import { buyCake } from './cakeAction';
import {connect} from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h1>Number of cakes is {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numOfCakes : state.numOfCakes         
        //numOfCakes is a prop here(a state is passed to prop)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : () => dispatch(buyCake())   
        //buyCake is a prop here(a dispatchis passed to prop)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);
//connect helps component to connect to redux store
// Here connects CakeContainer to store 