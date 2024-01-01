import React from "react";  
export default  class App extends React.Component{
    constructor(){
        super();
        this.state = {
            post : []
        }
    console.log("constructer")
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((response)=>this.setState({post:response})
            
        )
      console.log("componentDidMount")
    }
    render(){
        console.log("render")
      
        return(<>
          {
            this.state.post.map(post=><div>{post.name}</div>)
          }
        </>)
    }
}