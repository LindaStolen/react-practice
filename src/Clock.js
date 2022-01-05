// import ReactDOM from 'react-dom';

import React from "react";

// function clock(props){
    // return(
    //     <div>
    //         <h1>Hello, world!</h1>
    //         <h2>It is {this.props.time.toLocaleTimeString()}.</h2>
    //     </div>
    // )
// }
function FormattedDate(props) {
    return <h2 key={props.another}>It is {props.date.toLocaleTimeString()}.</h2>;
}
//console.log(<FormattedDate another="123"/>) //執行一個FormattedDate的方法，尚未把react element產出到畫面

class Clock extends React.Component {
    constructor(props){ //建立元件狀態
        super(props)
        this.state = {
            time: new Date(),
        };
    }
    render(){ //發生更新的時候都會呼叫
        return(
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.time} another={this.props.name} timer={this.timerID2}/>
                {/* <h2>It is {this.state.time.toLocaleTimeString()}.</h2> */}
            </div>
        )
    }
    componentDidMount(){
        //在component被render後才執行此方法
        this.timerID = setInterval(
            ( ) => this.tick(this.state.name),1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            time: new Date()
        });
    }
}

// setInterval(clock, 1000);
export default Clock;