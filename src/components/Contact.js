import React from 'react'
import User from './User'
import UserClass from "./UserClass"

class Contact extends React.Component {
  constructor(props){
    super(props);

    // console.log("parent constructor")
  }

  componentDidMount() {
      // console.log("parent componentDidMount")
  }

  render(){
    // console.log("parent render")

    return (
      <div>
        <h1>Contact us Page</h1>
        {/* <User name="Nauman (function)" location="Lahore"/> */}
        <UserClass name="First (class)" location="Lahore"/>
        {/* <UserClass name="Second (class)" location="Lahore"/> */}
    </div>
    )
  }
}
// function Contact() {
//   return (
//     <div>
//         <h1>Contact us Page</h1>
//         <User name="Nauman (function)" location="Lahore"/>
//         <UserClass name="Nauman (class)" location="Lahore"/>
//     </div>
//   )
// }

export default Contact