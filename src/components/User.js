import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    setInterval(console.log("shubhang is the best", 1000));
    return () => {};
  }, []);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count 2 = {count2}</h1>
      <h2> Name: {name}</h2>
      <h3>This is Shubhang</h3>
      <h3>Location: {location}</h3>
      <h4>shubhangkhattar@gmail.com</h4>
    </div>
  );
};

export default User;
