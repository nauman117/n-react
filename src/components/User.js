import React, { useEffect, useState } from "react";

function User(props) {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(2);
  const { name, location } = props;
  useEffect(() => {
    //make api calls
  }, [])
  async function getUserInfo() {
    const data = await fetch("https://api.github.com/users/naumaniac")
  }
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h2>Count : {count}</h2>
      <h2>Count2 : {count2}</h2>
      <h2>Name : {name}</h2>
      <h2>Location : {location}</h2>
      <h2>This i s Namaste React WebSeries</h2>
    </div>
  );
}

export default User;
