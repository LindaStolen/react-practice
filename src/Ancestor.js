import React, { Component } from 'react'

const scaleNames = {
    c: "攝氏",
    f: "華氏"
}
function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9
}
function toFahrenheit(celsius){
    return (celsius * 9 / 5) + 32
}

function convert(temperature, convert){
    const input = parseFloat(temperature)
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
//子元件有點像是沒有狀態的容器，只負責接住東西給父層
class TemperatureInput extends Component { //父層中的兩個長一樣的子元件共用，由副層指派負責不同事情
    constructor(props){
        super(props)
    //     this.state={ //所以這邊拿到的東西會不一樣
    //         value: ''
    //     }
        this.handleChange = this.onChange.bind(this)
    } 
    onChange(e){
        // this.setState({ 把這邊追蹤修改的功能提到上一層的元件中的功能
        //     value: e.target.value
        // })
        this.props.onTemperatureChange(e.target.value) //子元件改變原本的資料，但前面用props承接父層的事件屬性，會把這個需求往上層元件傳遞
    }
    render(){        
        const temperature = this.props.temperature
        const scale = this.props.scale
        //上面const的屬性值都是來自上層元件
        return(
            <div>
                輸入{scaleNames[scale]}溫度:
                現在<input type="text" name="temp" onChange={this.handleChange} value={temperature}/>度
            </div>
        )
    }
}

function TemperatureText(props) {
    if(props.ccc >= 100){
        return <div>水會滾。</div>
    }else if(0 < props.ccc < 100){
        return <div>要滾還早咧。</div>
    }
}

export class Ancestor extends Component {
    constructor(props){
        super(props)
        this.state={
            value: '',
            scale: 'c' //預設子元件的屬性
        }
        //下面handler綁定在子元件上後，不論在哪一個子元件改變資料就能改變元件屬性並執行轉換動作
        this.handleToFahrenheit = this.fahrenheitChange.bind(this)
        this.handleToCelsius = this.celsiusChange.bind(this)     
    }
    fahrenheitChange(value){
        this.setState({
            value, //上面的state寫甚麼，這邊就可以用甚麼，不受render()裡的變數影響。
            scale: 'f'
        })
    }
    celsiusChange(value){
        this.setState({
            value,
            scale: 'c'
        })
    }


    render() {
        const scale = this.state.scale
        const temperature = this.state.value
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature
        return (
            <div>
                <TemperatureInput style={style} scale='c' onTemperatureChange={this.handleToCelsius} temperature={celsius}/>
                <TemperatureInput style={style} scale='f' onTemperatureChange={this.handleToFahrenheit} temperature={fahrenheit}/>
                <TemperatureText style={style} ccc={celsius}/>
            </div>
        )
    }
}

const style = {
    marginLeft: "10px",
}

export default Ancestor
