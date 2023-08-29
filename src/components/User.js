import React from 'react'

function User(props) {
  return (
    <div className="user-card">
        <h2>Name : {props.name}</h2>
        <h2>This i s Namaste React WebSeries</h2>
    </div>
  )
}

export default User