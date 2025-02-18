import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // ✅ Use loadSlim instead of loadFull

function AnimatedBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // ✅ This is the correct way to load tsparticles now
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#000000" }, // Change the background color here
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff" },
          move: { enable: true, speed: 1 },
          number: { value: 50 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: 3 },
        },
      }}
    />
  );
}

export default AnimatedBackground;

