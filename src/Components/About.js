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
        <p className="about-description">
          At <strong>Foodie's Paradise</strong>, we believe food is more than just nourishment —
          it's a celebration of culture, flavor, and community. Since 2005, we've been serving
          handcrafted meals using the freshest ingredients, sourced locally and prepared with love.
        </p>
        <p className="about-description">
          Whether you're here for a romantic dinner, a family gathering, or just a quick bite,
          we strive to make every moment memorable. Our chefs blend tradition with creativity,
          bringing you dishes that warm the heart and delight the senses.
        </p>
        <p className="about-signature">Bon Appétit!<br /><em>— The Foodie's Paradise Team</em></p>
      </div>
      <div className="about-image">
        {/* You can add an image or content here if needed */}
      </div>
      <UserClass name="Frirst" />
      <UserClass name="Second" />
    </div>
  );
}

export default About;
