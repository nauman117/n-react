import React from 'react'
import User from './User'
import UserClass from "./UserClass"

function Contact() {
  return (
    <div>
        <h1>Contact us Page</h1>
        <User name="Nauman (function)"/>
        <UserClass name="Nauman (class)"/>
    </div>
  )
}

export default Contact