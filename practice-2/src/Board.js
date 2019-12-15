import React from 'react'
import Square from './Square';


class Board extends React.Component {
  // renderTic(i){
  //   return <Square value={i} />;
  // }
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null) //儲存Board的狀態
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i]='X';
    this.setState({squares:squares})
  }

  render(){
    const status = 'Next one: ginger'
    const rows = [];
    for(let i = 0; i < 9; i++){
      rows.push(
        <Square key={i} value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
      )
    }
    return(
      <div className="board">
        <div className="status">{status}</div>
        
        <div className="place">
          { rows }
          
        </div>
      </div>
    );
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