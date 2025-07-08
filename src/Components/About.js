import React, { useEffect } from "react";
import UserClass from "./UserClass";


function About() {
  useEffect(() => {
    console.log("About component mounted");
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Welcome to Foodie's Paradise</h1>
       
   
      <UserClass name="Frirst" />
      <UserClass name="Second" />
    </div>
    </div>
  );
}

export default About;
