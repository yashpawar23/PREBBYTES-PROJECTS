import React from "react";
export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
        console.warn("constructor")

    }
    componentDidUpdate(){
        console.warn("componentDidUpdate")
    }
    render(){
        console.warn("render")

        return(
            <>
             <h1>{this.state.count}</h1>
             <button onClick={()=>{this.setState({count : this.state.count + 1})}}>Inc</button>
            </>
        )
    }
}