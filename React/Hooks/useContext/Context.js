import React  from 'react';
import Comp1 from './comp1'

export const context1 = React.createContext()
export const context2 = React.createContext()

function Context(props) {
    return (
        <div>
            <context1.Provider value="Dhinesh" >
                <context2.Provider value="kumar">
                    <Comp1/>
                </context2.Provider>
            </context1.Provider>
        </div>
    );
}

export default Context;