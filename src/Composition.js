import React, { Component } from 'react'

// function WelcomeDialog(){  // 子層
//     return(
//         <Composition color='blue'>
//             <h1 className='Dialog-title'>Welcome</h1>
//             <p className='Dialog-message'>肚子餓了可以吃飯了嘛?</p>
//         </Composition>
//     )
// }
// function Composition(props){
//     return (
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//     )
// }
//---------------------------------------------------------------------
// function WelcomeDialog(props){  // 子層
//     return(
//         <div color='blue'>
//             <h1 className='Dialog-title'>{props.title}</h1>
//             <p className='Dialog-message'>{props.message}</p>
//         </div>
//     )
// }

// export class Composition extends Component {
//     render() {
//         return (
//             <WelcomeDialog title='Welcome2' message='肚子餓了可以吃飯了嘛?'/>
//         )
//     }
// }
//---------------------------------------------------------------------
// function WelcomeDialog(){ // 子層
//     return (
//         <Composition color='blue' title="Welcome" message="肚子好餓可以吃飯了嘛?"/>
//     )
// }
// class Composition extends React.Component{
//     render(){
//         return(
//             <div border={this.props.color}>
//             <div className='title'>
//                 {this.props.title}
//             </div>
//             <div className='message'>
//                 {this.props.message}
//             </div>
//         </div> 
//         )
//     }
// }
// function Composition(props){
//     return(
//         <div border={props.color}>
//             <div className='title'>
//                 {props.title}
//             </div>
//             <div className='message'>
//                 {props.message}
//             </div>
//         </div>
//     )
// }
//---------------------------------------------------------------------
//或是再拆得更小
function Here(){
    return(
        <div style={here}>here!here!</div>
    )
}
function There(){
    return(
        <div style={there}>there!there!</div>
    )
}
function Child(props){
    return(
        <div className='outer'>
            <div className='here'>{props.here}</div>
            <div className='there'>{props.there}</div>
        </div>
    )
}
function Composition(){
    return(
        <Child here={<Here/>} there={<There/>}/>
    )
}
const here ={
    backgroundColor: "#FFBB66",
    width: "120px",
    marginLeft: "30px"
}
const there = {
    backgroundColor: "#00DDAA",
    width: "200px",
    marginLeft: "30px"
}
// export default WelcomeDialog
export default Composition
