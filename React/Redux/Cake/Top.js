import React from "react";
import { Provider } from "react-redux";
import CakeContainer from "./CakeContainer";
import store from "../store";

function  Top() {
    return(
        <Provider store={store}>
        <div>
            <CakeContainer />
        </div>
        </Provider>
    )
}

export default Top;