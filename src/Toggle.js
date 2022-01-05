import React, { Component } from 'react';
// import { render } from 'react-dom';

export class Toggle extends Component {
    constructor(props){
        super(props);
        this.state = {
            isToggle: true,
        }
        this.handleClick = this.onClick.bind(this) //像變數那樣
    }
    onClick(){ //props名稱
        this.setState(prevState => ({
            isToggle: !prevState.isToggle,
        }))
    }
    render() {
        return (
            <>
                <button style={this.state.isToggle ? defaultStyle : clickStyle} onClick={this.handleClick}>
                    {this.state.isToggle ? "開" : "關"}
                </button>
            </>
        )
    }
}

//無法改無狀態元件寫法? 元件初始的狀態應該要放在哪?
//我覺得無法直接改寫，元件已是無狀態，state沒有初始、也沒有可以做修改的setState()，傳入的只有props(唯獨，)無法做修改
//可以用hooks方法改寫，讓function component持有狀態


// const Toggle = (props) => {
//     const click = (event) => {
//         console.log(props.status)
//         props.status = false //?????
//         console.log(props.status)
//     }
//     console.log(props)
//     return (
//         <button style={props.status ? defaultStyle : clickStyle} onClick={click()}>
//             {props.status ? "開" : "關"}
//         </button>
//     )
// }
const defaultStyle = {
    width: "100px",
    lineHeight: "2rem",
    backgroundColor: 'black',
    color: "white", 
    borderRadius: "15px",
}
const clickStyle = {
    width: "100px",
    lineHeight: "2rem",
    backgroundColor: 'red',
    color: "white", 
    borderRadius: "15px",
}

export default Toggle;