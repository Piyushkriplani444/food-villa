import React, { useEffect, useState } from "react";

function Profile(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      console.log("console.log");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Functional Profile</h1>
      <h1>Name : {props?.name}</h1>
    </div>
  );
}

export default Profile;
