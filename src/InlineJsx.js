import React, { Component } from 'react'

export class InlineJsx extends Component {
    render() {
        return (
            <div style={style}>
                { drinkStore.length > 1 &&
                    <div>有{drinkStore.length}家飲料店是我會喝的，像是</div>
                }
                {drinkStore.map(
                    (drinkStore, i) =>
                    <div key={i}>
                        {drinkStore.store}的{drinkStore.favorite}，開店時間{drinkStore.open}
                    </div>
                )}
            </div>
        )
    }
}
const drinkStore = [
    {   store: "可不可",
        favorite: "太妃紅茶",
        open: "10:00-21:00",
    },
    {   store: "賀茶樓",
        favorite: "鉑錸紅茶",
        open: "11:00-20:30",
    },
    {   store: "春陽茶室",
        favorite: "魚池18號",
        open: "11:30-21:30",
    },
]
const style = {
    margin: "15px 10px",
    padding: "5px 8px",
    backgroundColor: "#ddd",
}

export default InlineJsx
