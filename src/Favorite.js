// function Friut(props){

//     return(
//         <div>{props.me}+"喜歡的水果很多，但不太喜歡"+{props.friut}+"；"</div>
//     )
// }
// const hate = <Friut friut="papaya" me="Linda"/>


function favorite(){
    const friut = [
        {   person: "UU",
            favorite: "cherry",
            hate: "apple",
        },
        {   person: "Linda",
            favorite: "apple",
            hate: "papaya",
        },
        {   person: "Marty",
            favorite: "guava",
            hate: "lemon",
        },
    ]
    
    return (
        friut.map(    
            (friut, i) => 
            <div key={"person"+i}>
                {friut.person}最喜歡的水果是{friut.favorite}，不喜歡吃{friut.hate}
            </div>  
        )
    )
}
// function favorite(){
//     return(
//         <div className="font-extrabold">
//             <Fruit friut={friut.friut} me={friut.me}/>
//             <Fruit friut="木瓜" me="Linda"/> 
//             <Fruit friut="芭樂" me="Marty"/> 
//         </div>
//     )
// }
export default favorite;