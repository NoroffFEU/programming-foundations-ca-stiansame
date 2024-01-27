//Drone as an object

const drone = {
  brand: {
    name: "Dji",
    origin: "China",
  },
  model: "Dji FPV",
  rotors: {
    numberOfmotors: 4,
    numberOfPropellers: 4,
  },
  topSpeed: 110,
  maxRange: 3000,
  battery: 20,
  on: false,
  functions: [
    {
      name: "gps",
      active: true,
    },
    {
      name: "collisionDetection",
      active: true,
    },
    {
      name: "gyroscopicStabilizer",
      active: true,
    },
    {
      name: "returnHome",
      active: true,
    },
    {
      name: "manualOverride",
      active: false,
    },
  ],
  startStop: function () {
    drone.on = !drone.on;
  },
};
