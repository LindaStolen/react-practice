// import logo from './logo.svg';
import React from 'react';
import './App.css';

const food = {
  ingredient: "apple",
  flavor: "sugar",
  product: "pie", 
}
const want = () => {
  return <div className="px-5">I need to buy some {food.ingredient}s to make a big {food.product} for myself.</div>
}
// const money = React.createElement( //react element物件，依照裡面的描述產生DOM並保持他們在最新的狀態
//   'h2',
//   {className: 'important font-extrabold text-6xl'},
//   'Mom!!!!!! Give me $500!!!!'
// )
class Money extends React.Component { //同樣要引入React模組
  render(){
    return <h2 className='important font-extrabold text-6xl'>Mom!!!!!! Give me $500!!!!</h2>
  }
}

const make = (
  <div className="py-2">
    <p>that's make some {food.ingredient} {food.product}.</p>
    <p>An apple pie need three apples.</p>
  </div>
)

function whatever() {
  return (
    <div className="process">
      {make}
      <Money/>{/* 這是react element，這時候不會直接執行function/class內容，要等到觸發render()才會。*/}
      {want(food)}
    </div>
  );
}

export default whatever;
