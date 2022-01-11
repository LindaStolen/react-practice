import React, { Component } from 'react'


const nameArray = []
export class NameForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '',
            // nameArray: [],
        }
        this.handleClick = this.onChange.bind(this)
        this.submitClick = this.submitClick.bind(this)        
    }
    onChange(e){
        this.setState({
            value: e.target.value,
        })
    }
    submitClick(e){
        const val = this.state.value
        if(val.length > 1){
            nameArray.push(this.state.value)
            console.log(nameArray)
            this.setState({
                value: '',
            })
            //畫面上的state沒有被重置，就不會進行下一個新的更新
            e.preventDefault()
        }else{
            alert("請輸入名字")
            console.log("沒東西")
            e.preventDefault()
        }
        
    }
    render() {
        return (
            <div style={style}>
                <form onSubmit={this.submitClick}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.value} onChange={this.handleClick} autoComplete='off'/>
                    </label>
                    <input type="submit" value="Submit" style={submitStyle}/>
                </form>
                { 
                    nameArray.map(
                        (nameArray, i) => <li key={i}>{nameArray}</li>
                    )
                }
            </div>
        )
    }
}

const style = {
    width: "500px",
    padding: "10px 8px",
    backgroundColor: "#aadfee",
}
const submitStyle = {
    padding: "3px 5px",
    margin: "0 5px",
    borderRadius: "5px",
}

export default NameForm
