import React from 'react'
import UserClass from './UserClass';
import User from './User';

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parent constructor")
  }

  componentDidMount() {
    // console.log("parent componentDidMount")
  }

  render() {
    // console.log("parent render")

    return (
      <div>
        <h1>Contact us Page</h1>
        {/* <User name="Nauman (function)" location="Lahore"/> */}
        <UserClass name="First (class)" location="Lahore" />
        {/* <UserClass name="Second (class)" location="Lahore"/> */}
      </div>
    )
  }
}

// function About() {
//   return (
//     <div>
//         <h1>About</h1>
//         <h2>This is a tutorial.</h2>
//     </div>
//   )
// }

export default About