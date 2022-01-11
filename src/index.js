import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Favorite from './Favorite';
import Dismantle from './Component';
import NameForm from './NameForm';
import Ancestor from './Ancestor';
import Composition from './Composition';
// import Clock from "./Clock";
// import Toggle from "./Toggle";
// import Event from "./Event";
// import Login from "./Login";
// import InlineJsx from "./InlineJsx";

// import reportWebVitals from './reportWebVitals';


// function Clock(props){
//   return(
//       <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {props.time.toLocaleTimeString(props)}.</h2>
//       </div>
//   )
// }

let sum = (
  <div className="container">
    <Favorite/>
    <Composition/>
    {/* <App/> */}
    <Ancestor />
    <NameForm />
    {/* <Login />
    <Event/> */}
    <Dismantle/>
    {/* <Clock />
    <Toggle />
    <InlineJsx /> */}
  </div>
)
// function tick(){
  // ReactDOM.render(
  //   <div className="container">
  //     <Favorite/>
  //     <App/>
  //     <Dismantle/>
  //     <Clock />
  //   </div>
  //   // sum
  //   ,
  //   document.getElementById('root')
  // );
// }

// setInterval(tick, 1000);




ReactDOM.render(
  sum,
  document.getElementById('root')
);
