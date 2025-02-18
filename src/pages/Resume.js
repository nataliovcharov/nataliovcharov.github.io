import React from "react";
import "../pages/Resume.css"; 

function Resume() {
  return (
    <div className="page"> {}
      <h1 className="resume-heading">My Resume</h1>
      <p className="resume-text">
        Download my resume{" "}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          here
        </a>.
      </p>
    </div>
  );
}

export default Resume;
