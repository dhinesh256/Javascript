import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import ParentComponent from './Hooks/useCallBack/ParentComponent';
//import Ex2 from './Hooks/useEffect/Ex2';
//import Ex2DataFetching from './Hooks/useEffect/Ex2DataFetching';
//import Ex21 from './Hooks/useEffect/Ex21';
//import { BrowserRouter as Router } from 'react-router-dom';
//import App from './App';
//import RouteTest from './RouteTest';
//import Ex1 from './Hooks/Ex1';
// import Context from './Hooks/useContext/Context';
// import MyClass from './Context/context';
//import Ex4 from './Hooks/useReducer/Ex4';
//import Ex41 from './Hooks/useReducer/Ex41'
//import Ex42DataFetching from './Hooks/useReducer/Ex42DataFetching';
//import Usememo from './Hooks/Usememo';
//import RefTimer from './Hooks/useRef/RefTimer';
//import CakeContainer from './Redux/Cake/CakeContainer';
//import ToDo from './ToDo/ToDo';
//import './ToDo/Style.css'
////import './index.css';
// import App from './ReduxSaga-testing/App';
//import Game from './tik-tok-toe/Game';
//mport Forms from './Redux/Forms';
//import Top1 from './Hooks/Top1';
import reportWebVitals from './reportWebVitals';
import RouteV6 from './routerv6';
//import Main from './Redux-Saga/Main'

    ReactDOM.render(<div>
        {/* <Context />
        <br/>
        <MyClass /> */}
        {/* <App/> */}
        <RouteV6/>
    </div>
    ,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

