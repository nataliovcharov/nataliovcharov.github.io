import React from "react";
import "../pages/Home.css"; 
import { TypeAnimation } from "react-type-animation"; 

function Home() {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        
        {/* Left Side */}
        <div className="text-section">
          <TypeAnimation
            sequence={[
              "Hi.", 3000,
              "Hi. I'm Natalie.", 2000
            ]}
            wrapper="h1"
            speed={50}
            repeat={Infinity} 
            className="typing-text"
          />
        </div>

        {/* Right Side */}
        <div className="image-section">
          <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Natalie" className="profile-pic" />
        </div>

      </div>
    </div>
  );
}

export default Home;
