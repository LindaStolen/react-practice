import React, { Component } from 'react'
const productList = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
function ProductRow(props){
    const stock = props.stock
    const productPrice = props.price
    // console.log("6542 " + productPrice)
    const name = stock == true ? <td>{props.name}</td> : <td style={{color: "red"}}>{props.name}</td>
    return(
        <tr>
            {name}<td>{productPrice}</td>
            {/* {
                productList.map(
                    (productList,name) => 
                    <div key={name}>
                        { productList.stocked === false ? <span style={{color: "red"}} stocked={productList.stocked}>{productList.name}</span> : <span>{productList.name}</span> }
                        <span>{productList.price}</span>
                    </div>
                )
            } */}
        </tr>
    )
}
function CategoryRow(props){
    const category = props.category
    return(
        <tr>
            <td colSpan='2'>{category}</td>            
        </tr>
    )
}

function ProductTable (props){
    // constructor(props){
    //     super(props)
    // }
    // return(){
        const filterText = props.filter
        // console.log("輸入的文字: " + props.filter)
        const inStock = props.stocked
        // console.log("1523 " + this.props.stocked)
        const row = []
        let lastCategory = null 
        //用陣列中category的前一個根後一個比對，相同就不顯示，不同就顯示(所以都是同一個分類中第一個被印出來)
        productList.forEach((productList)=>{
            // console.log(productList.category)
            // console.log(lastCategory)
            if(productList.name.indexOf(filterText) === -1){
                return
            }
            if(inStock && !productList.stocked){
                return;
            }
            if(productList.category !== lastCategory){
                // console.log(productList.category !== lastCategory)
                row.push(<CategoryRow category={productList.category} key={productList.category}/>)
            }
            
            row.push(<ProductRow key={productList.name} name={productList.name} showStock={props.stocked} stock={productList.stocked} price={productList.price}/>)
            lastCategory = productList.category //前一個category取代原本的null
        })
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th><th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {row}                    
                </tbody> 
            </table>
        )
    // }
}
class Searcher extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.onChange.bind(this)
        this.handleClick = this.onClick.bind(this)
    }
    onChange(e){
        console.log('change')
        this.props.product(e.target.value)
        
    }
    onClick(e){
        // console.log('check!')
        // console.log(e.target.checked)
        this.props.onShowProduct(e.target.checked)
    }
    render(){
        return(
            <form>
                <input style={inputStyle} type='text' onChange={this.handleChange}/>
                <input style={inputStyle} type='checkbox' onClick={this.handleClick}/> only show products in stock.
            </form>
        )
    }
}
export class filterProductTable extends Component {
    constructor(props){
        super(props)
        this.state = { productName: '', stocked: false}
        this.handleShow = this.show.bind(this)
        this.handleSearch = this.search.bind(this)
    }
    search(productName){
        this.setState({ productName })
        // console.log(this.state.productame)
    }
    show(){
        // console.log('show!')
        const stock = this.state.stocked
        stock === false ? this.setState({ stocked: true }) : this.setState({ stocked: false })
    }
    render() {
        const target = this.state.productName
        const inStock = this.state.stocked
        return (
            <div style={containerStyle}>
                <Searcher onShowProduct={this.handleShow} product={this.handleSearch} />
                <ProductTable filter={target} stocked={inStock}/>
            </div>
        )
    }
}
const containerStyle = {
    height: "500px",
    width: "500px",
    margin: "15px 8px",
    border: "2px solid #cd6",
    borderRadius: "8px",
}
const inputStyle = {
    border: "0.5px solid #ddd",
    margin: "5px 15px",
    borderRadius: "3px",
}
export default filterProductTable
