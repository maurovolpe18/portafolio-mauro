import React from "react";
import Particles from "react-particles-js";

export const ParticleComponentMovil = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "15rem",
          left: "0rem",
          width: "100%",
          height: "100%",
        }}
      >
        <Particles
          style={{
            position: "absolute",
            top: "10rem",
            left: "0",
          }}
          height="100vh"
          width="100vw"
          params={{
            particles: {
              color: {
                value: "#f9a826",
              },
              line_linked: {
                color: {
                  value: "#f5deb3",
                },
              },
              number: {
                value: 9,
              },
              size: {
                value: 1,
              },
              move: {
                random: true,
                speed: 1,
                out_mode: "out",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
          }}
        />
      </div>
    </div>
  );
};
