// import Particles from 'react-tsparticles';
// import { useCallback } from "react";
// import { loadSlim } from "tsparticles-slim";

// const Particle = () => {
//   const particlesInit = useCallback(async engine => {
//     console.log(engine);
//     await loadSlim(engine);
//   }, []);

//   return (
//     <>
//       <Particles
//         width="100%"
//         height="100vh"
//         init={particlesInit}
//         options={{
//           particles: {
//             number: {
//               value: 109,
//               density: {
//                 enable: true,
//                 value_area: 1200
//               }
//             },
//             shape: {
//               type: 'circle',
//               stroke: {
//                 width: 1
//               },
//               //polygon: {
//                // nb_sides: 20
//               //}
//             },
//             line_linked: {
//               enable: false,
//               distance: 150,
//               opacity: 0.4,
//               width: 1,
//               shadow: {
//                 enable: false,
//                 color: "#e74c3c",
//                 blur: 5
//               }
//             },
//             move: {
//               enable: true,
//               random: true,
//               speed: 0.6,
//               attract: {
//                 rotateX: 600,
//                 rotateY: 1200
//               }
//             },
//             size: {
//               value: 4,
//               random: true,
//               anim: {
//                 speed: 40,
//                 size_min: 0.1
//               }
//             },
//             opacity: {
//               value: 0.5,
//               anim: {
//                 speed: 1,
//                 opacity_min: 0.1
//               }
//             }
//           }
//         }}
//       />
//     </>
//   );
// };

// export default Particle;


import Particles from 'react-tsparticles';
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

const Particle = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  return (
    <>
      <Particles
        width="100%"
        height="100vh"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 109,
              density: {
                enable: false,
                value_area: 1200
              }
            },
            
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                    
                },
            shape: {
              type: 'circle',
              stroke: {
                width: 1
              }
            },
            links: {
              enable: false // ✅ This removes all visible connection lines
            },
            move: {
              enable: true,
              random: true,
              speed: 0.9,
              attract: {
                rotateX: 600,
                rotateY: 1200
              }
            },
            size: {
              value: 4,
              random: true,
              anim: {
                speed: 40,
                size_min: 0.1
              }
            },
            opacity: {
              value: 0.5,
              anim: {
                speed: 3,
                opacity_min: 0.1
              }
            },
            color: {
              value: "#ffffff"
            }
          }
        }}
      />
    </>
  );
};

export default Particle;


// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// const App = () => {
//     const particlesInit = useCallback(async engine => {
//         console.log(engine);
//         await loadSlim(engine);
//     }, []);

//     const particlesLoaded = useCallback(async container => {
//         await console.log(container);
//     }, []);

//     return (
//         <Particles
//             id="tsparticles"
//             init={particlesInit}
//             loaded={particlesLoaded}
//             options={{
//                 background: {
//                     color: {
//                         value: "#0d47a1", // you can keep your background color here
//                     },
//                 },
//                 fpsLimit: 120,
//                 particles: {
//                     number: {
//                         value: 109,
//                         density: {
//                             enable: true,
//                             value_area: 1200,
//                         },
//                     },
//                     shape: {
//                         type: "circle",
//                         stroke: {
//                             width: 1,
//                         },
//                     },
//                     line_linked: {
//                         enable: false,
//                         distance: 150,
//                         opacity: 0.4,
//                         width: 1,
//                         shadow: {
//                             enable: false,
//                             color: "#e74c3c",
//                             blur: 5,
//                         },
//                     },
//                     move: {
//                         enable: true,
//                         random: true,
//                         speed: 0.6,
//                         attract: {
//                             rotateX: 600,
//                             rotateY: 1200,
//                         },
//                     },
//                     size: {
//                         value: 4,
//                         random: true,
//                         anim: {
//                             speed: 40,
//                             size_min: 0.1,
//                         },
//                     },
//                     opacity: {
//                         value: 0.5,
//                         anim: {
//                             speed: 1,
//                             opacity_min: 0.1,
//                         },
//                     },
//                 },
//                 detectRetina: true,
//                 interactivity: {
//                     events: {
//                         onClick: { enable: true, mode: "push" },
//                         onHover: { enable: true, mode: "repulse" },
//                         resize: true,
//                     },
//                     modes: {
//                         push: { quantity: 4 },
//                         repulse: { distance: 200, duration: 0.4 },
//                     },
//                 },
//             }}
//         />
//     );
// };

// export default App;
