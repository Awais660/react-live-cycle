import React from "react";
class User extends React.Component{
    constructor(){
        super();
        this.state={
            email:"awais@gmail.com"
        }
    }
    render(){
        // console.log(this.props.name);
        console.log(this.state.email);
        return(
            <div>
                {/* <h1>user components {this.props.name}</h1> */}
                <h1>user components {this.state.email}</h1>
                <button onClick={()=>this.setState({email:"asad@gmail.com"})}>update name</button>
            </div>
        )
    }
}
export default User;