import React, { Component } from 'react'
// 包含
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
//------------------------------特別化------------------------------------
// function WelcomeDialog(props){  //通用component
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
//-------------------------------包含-----------------------------------
function Composition(props) {
    return(
        <div className='bbbbbox' style={style}>
            {props.children}
        </div>
    )
}

function WelcomeDialog(props){  // 子層
    return(
        <Composition color='blue'>
            <h1 className='Dialog-title' style={titleStyle}>繼承&組合</h1>
            <p className='Dialog-message'>用class component做孩子</p>
            <p className='subTitle'>{props.subtitle}</p>
            {props.children}
        </Composition>
    )
}

export class ChildBtn extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.onChange.bind(this)
        this.state = { text: 'origin' ,change: true}
    }
    onChange(){
        console.log('fuck')
        const origin = this.state.change
        if(origin){
            this.setState({
                text: 'change',
                change: false
            })
        }else {
            this.setState({
                text: 'origin',
                change: true
            })
        }
        
    }
    render() {
        return (
            <WelcomeDialog subtitle='這種方式最後是輸出小孩，不是父層'>
                <button style={btn} className='child' onClick={this.handleChange}>{this.state.text}</button>
                {/* 白癡，不要再綁錯動作了 */}
            </WelcomeDialog>
        )
    }
}
const style = {
    width: "300px",
    padding: "10px 15px",
    margin: "5px 8px",
    border: "2px solid gray",
    borderRadius: "8px",
}
const btn = {
    width: "80px",
    border: "1.5px solid red",
    marginTop: "20px",
    borderRadius: "5px"
}
const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: "bolder"
}
//-----------------------------特別化-------------------------------------
// function WelcomeDialog(){ // 子層
//     return (
//         <Composition color='blue' title="Welcome" message="肚子好餓可以吃飯了嘛?"/>
//     )
// }
// class Composition extends React.Component{ //通用component
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
// function Composition(props){ //通用component
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
//---------------------------------包含---------------------------------
//父層有很多個洞，但不確定內容放甚麼
// function Here(){
//     return(
//         <div style={here}>here!here!</div>
//     )
// }
// function There(){
//     return(
//         <div style={there}>there!there!</div>
//     )
// }
// function Child(props){
//     return(
//         <div className='outer'>
//             <div className='here'>{props.here}</div>
//             <div className='there'>{props.there}</div>
//         </div>
//     )
// }
// function Composition(){
//     return(
//         <Child here={<Here/>} there={<There/>}/>
//     )
// }
// const here ={
//     backgroundColor: "#FFBB66",
//     width: "120px",
//     marginLeft: "30px"
// }
// const there = {
//     backgroundColor: "#00DDAA",
//     width: "200px",
//     marginLeft: "30px"
// }
// export default WelcomeDialog
// export default Composition
export default ChildBtn
