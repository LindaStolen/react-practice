// import React, { Component } from 'react'
import React from 'react';

// export default class Message extends Component {
//   render() {
//     return (
//       <div>
//         <p>try</p>
//       </div>
//     )
//   }
// }

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value:null, //屬於Square的私人初始狀態
    }
  }
  render(){
    return (
      <button className="Square" onClick={() => { this.setState({value:'X'}) }}>
        {this.state.value} 
        {/* props是上一層的board傳進來的 */}
      </button>
    );
  }
}
export default Square;


// function Message(){
//   return <p>trytrytry</p>
// }
// export default Message;