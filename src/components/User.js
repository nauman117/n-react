import React, { useState } from "react";

function User(props) {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(2);
  const { name, location } = props;
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

export default User;
