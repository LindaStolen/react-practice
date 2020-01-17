// import React, { Component } from 'react'
import React from 'react';
// --------------------------第一種寫法---------------------------------
// export default class Message extends Component {
//   render() {
//     return (
//       <div>
//         <p>try</p>
//       </div>
//     )
//   }
// }
// --------------------------class Compontent---------------------------------
// class Square extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     value:null, //屬於Square的私人初始狀態
  //   }
  // }
//   render(){
//     return (
//       <button className="Square" onClick={() => { this.props.onClick() }}>
//         {this.props.value} 
//         {/* props是上一層的board傳進來的 
//         }*/}
//       </button>
//     );
//   }
// }
// export default Square;

// --------------------------function Compontent---------------------------------
function Square(props){
  return (
    <button className="Square" onClick={ props.onClick }>
                      {/* 事件綁定, 前面的參數事porps, 所以這邊原地的 this.props 替換成 props, 後面原本執行事件的 "()" 也要拿掉 */}
      {props.value} 
      {/* props是上一層的board傳進來的 
      }*/}
    </button>
  );
}
export default Square;