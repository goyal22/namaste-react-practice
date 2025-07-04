// User.js
import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  const divStyle = {
    backgroundColor: "lightblue",
    color: "darkblue",
    padding: "10px",
    borderRadius: "5px",
    marginRight: "10px",
    marginBottom: "10px",
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="card" style={divStyle}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">
          Explore the serene landscapes and breathtaking views of nature around the world.
        </p>
      </div>
    </div>
  );
};

export default User;
