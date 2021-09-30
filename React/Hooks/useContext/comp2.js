import React  from 'react';
import Comp3 from './comp3';
import {context1,context2} from './Context'

function Comp2(props) {
    return (
        
        <div>
            <context1.Consumer>{
                firstName => {
                   return (
                       <context2.Consumer>
                           {lastname => {
                               return (
                                <div> From Comp2 without using useContext - {firstName} {lastname} <Comp3/></div>
                               )
                           }}
                       </context2.Consumer>
                   )  }}
                
            </context1.Consumer>
        </div>
        
    );
}

export default Comp2;