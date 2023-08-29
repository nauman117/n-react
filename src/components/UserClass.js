import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        // console.log(this.props.name + " child constructor")
        
        this.state = {
            userInfo:{
                name:"Dummy",//show shimmer
                location:"Default",
                avatar_url:"http://dummy-photo.com"
            }
            
        }
    }

    async componentDidMount() {
        //make api call
        const data = await fetch("https://api.github.com/users/naumaniac");
        const json= await data.json();
        this.setState(
            {
                userInfo : json,
            }
        )
        console.log("🚀 ~ json:", json)
    }

    componentDidUpdate(){

        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    render() { 

        // console.log(this.props.name + " child render")

        const { name, location, avatar_url } = this.state.userInfo;
        // debugger;
        return (
            <div className="user-card">
                <img src={ avatar_url }/>
                <h2>Name : {name}</h2>
                <h2>Location : {location}</h2>
                <h2>This i s Namaste React WebSeries</h2>
            </div>
        );
    }
}

export default UserClass;

/*
 * Mounting Cycle
 *      (
 *           Constructor(dummy)
 *           Render(dummy)
 *           < webpage loaded Dummy >
 *           componentDidMount ApiCall this.setState
 *      )
 * Updating Cycle/Recoinciliation
 *      ( 
 *           Render(API data)
 *           < webpage API data >
 *           componentDidUpdate      
 *      )
 * 
 * 
 * 
 * 
 * 
*/