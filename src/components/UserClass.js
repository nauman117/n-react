import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            count: 1,
            count2: 2, //useState is doing this internally
        }
    }
    render() {
        const { name, location } = this.props;
        const { count, count2 } = this.state;
        return (
            <div className="user-card">
                <h2>Count : {count}</h2>
                <h2>Count2 : {count2}</h2>
                <h2>Name : {name}</h2>
                <h2>Location : {location}</h2>
                <h2>This i s Namaste React WebSeries</h2>
            </div>
        );
    }
}

export default UserClass;