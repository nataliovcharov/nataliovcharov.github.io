import React from "react";
import "../pages/Projects.css"; 

function Projects() {
  return (
    <div className="projects-page">
      <h1 className="projects-heading">Projects</h1>
      <p className="projects-description">Here are some of my featured projects:</p>

      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card">
          <h2>Project 1</h2>
          <p>We developed <strong>WEARther</strong>, a web app that combines real-time weather data with curated outfit recommendations. This project applied <strong>software teamwork, database integration, containerization, deployment, and CI/CD pipelines</strong>. Our system includes <strong>Dockerized subsystems</strong>, featuring a <strong>MongoDB database</strong> and a <strong>Python-based service</strong> within a <strong>monorepo</strong>. Each subsystem has its own <strong>CI/CD pipeline</strong> using <strong>GitHub Actions</strong> for automated testing, Docker image delivery to <strong>Docker Hub</strong>, and deployment to <strong>Digital Ocean</strong>.</p>          <video controls>
            <source src="/project1-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a href="https://github.com/software-students-fall2024/5-final-java_and_the_scripts_1" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h2>Project 2</h2>
          <p><strong>Voice Journal</strong> is a hands-free journal that transcribes and analyzes speech to track mood trends. This project applied <strong>machine learning, database integration, containerization, deployment, and CI/CD pipelines</strong>. The system includes <strong>Dockerized subsystems</strong>, featuring a <strong>machine learning client</strong>, a <strong>Flask web app</strong>, and a <strong>MongoDB database</strong> within a monorepo. Each subsystem has its own <strong>CI/CD pipeline</strong> using <strong>GitHub Actions</strong> for automated testing, Docker image delivery to <strong>Docker Hub</strong>, and deployment to <strong>Digital Ocean</strong>.</p>
          <video controls>
            <source src="/project2-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a href="https://github.com/software-students-fall2024/4-containers-java-and-the-scripts-1" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>


        <div className="project-card">
          <h2>Project 3</h2>
          <p>We built a <strong>Python package</strong> with four versatile functions that adapt to <strong>user-defined arguments</strong>. Managed with <strong>pipenv</strong>, tested with <strong>pytest</strong>, and published on <strong>PyPI</strong>. It includes <strong>automated testing</strong> via <strong>GitHub Actions</strong>. Our <strong>structured workflow</strong> ensures reliability with <strong>feature branches</strong>, <strong>peer reviews</strong>, and <strong>clear documentation</strong>.</p>
          <a href="https://github.com/software-students-fall2024/3-python-package-java_and_the_scripts_" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          <a href="https://github.com/software-students-fall2024/4-containers-java-and-the-scripts-1" target="_blank" rel="noopener noreferrer">
            PyPI package link
          </a>
        </div>


        <div className="project-card">
          <h2>Project 4</h2>
          <p>I worked with a team to create a <strong>complete specification</strong> for a mobile app of our choice. Using <strong>Figma</strong> for prototyping, we covered <strong>ideation, requirements analysis, a product vision statement, user stories, UML diagrams,</strong> and a <strong>final presentation</strong> for stakeholders.</p>
          <a href="https://github.com/software-students-fall2024/1-specification-java-and-the-scripts" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          <a href="https://www.figma.com/proto/x2JhHpZTehmD7ZdGMTlu7I/SEprojectwireframe?node-id=0-1&t=jdBQfUi0t9potZVz-1" target="_blank" rel="noopener noreferrer">
            View our Figma clickable prototype
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
