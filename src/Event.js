import React, { Component } from 'react'

class Event extends React.Component {
    //方法一
    // constructor(props){
    //     super(props) 
    //     this.handleClick=this.onClick.bind(this)
    // }
    // onClick(){
    //     console.log("class component")
    // }

    //方法二
    // handleClick = ()=>{
    //     console.log("class fields:",this)
    // }

    //方法三
    handleClick (){
        console.log("arrow function:",this)
    } 
    render(){
        return(
            <div>
                {/* 跟方法一、二搭配 */}
                {/* <button style={btnStyle} onClick={this.handleClick}>點爆</button>   */}
                {/* 跟方法三搭配 */}
                <button style={btnStyle} onClick={(e)=>{this.handleClick(e)}}>點爆</button>  
            </div>
        )
    }
}

//上面這個等於下面這個

// function Event(){
//     function click() {
//         alert("點點點點點點點")
//         console.log("洋碩真的很機掰")
//     }
//     return (
//         <div>
//             <button style={btnStyle} onClick={click}>點爆</button>  
//         </div>
//     )
// }
const btnStyle = {
    backgroundColor: "gray",
    width: "120px",
    lineHeight: "2rem",
    borderRadius: "12px",
    color: "white",
    marginLeft: "15px",
}

export default Event
