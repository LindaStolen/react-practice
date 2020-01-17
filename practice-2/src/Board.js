import React from 'react'
import Square from './Square';


class Board extends React.Component {
  // renderTic(i){
  //   return <Square value={i} />;
  // }
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null), //儲存Board的狀態
      goNext: true, //利用boolean值改變來決定下一位出手者是誰 *
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i){
    const squares = this.state.squares.slice(); //淺copy
    squares[i] = this.state.goNext ? "O" : "X" //寫前面的先出手
    this.setState({
      squares:squares, //事件發生前board的狀態
      goNext: !this.state.goNext, //*
    })
    console.log(squares[i])
    console.log(this.state.squares)
    calWinner(squares);
  }
 

  render(){
    const status = 'Next one: ' + (this.state.goNext ? "O" : "X") //寫前面的先出手
    const rows = []; //用 Array 儲存九宮格
    for(let i = 0; i < 9; i++){
      rows.push(
        <Square key={i} value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
      )
    }
    
    // const winnner = calWinner(this.state.squares);
    // let status;
    // if(winner){
    //   status = 'Winner:' + 
    // }
    console.log(this.state.squares) //事件發生後board的狀態
    return(
      <div className="board">
        <div className="status">{status}</div>
        
        <div className="place">
          { rows } {/* 在這邊呼叫 */}
          
        </div>
      </div>
    );
  }
}

function calWinner(squares) {
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i = 0; i < line.length; i++){
      const [a,c,b] = line[i]
      console.log(squares[a,b,c]);
    }
}

export default Board;

{/*<div className="row">
          {this.renderTic(0)}
          {this.renderTic(1)}
          {this.renderTic(2)}
        </div>
        <div className="row">
          {this.renderTic(3)}
          {this.renderTic(4)}
          {this.renderTic(5)}
        </div>
        <div className="row">
          {this.renderTic(6)}
          {this.renderTic(7)}
          {this.renderTic(8)}
        </div>*/}
        {/*<Square value="1" />
          <Square value="2" />
          <Square value="3" />
          <Square value="4" />
          <Square value="5" />
          <Square value="6" />
          <Square value="7" />
      <Square value="8" />*/}