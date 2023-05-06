import { Component } from "react";
class ClassComponent extends Component {
    constructor(props){
        console.log('constructor')
        super(props)
        this.state={
            name:"Naruto",
            age:21
        }
    }
   async componentDidMount(){
      const userData =  await fetch('https://api.github.com/users/abinth11')
      const parsedUserData = await userData.json()
      console.log(parsedUserData)
      console.log('class component mounted')
    }
    componentDidUpdate(){
        console.log('class component updated')

    }
    componentWillUnmount(){
        console.log('class component unmounted')
    }
    render(){
        console.log('class component rendered')
        return (
            <div className="class-component">
                <h1>from class component</h1>
                <button onClick={()=>{
                    this.setState({age:this.state.age+=1})
                }}>Age+</button>
                <p>Name:{this.state.name}</p>
                <p>Age:{this.state.age}</p>
            </div>
        )
    }
}
export default ClassComponent