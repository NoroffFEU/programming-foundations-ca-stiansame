//Drone as an object

const drone = {
  startStop: function () {
    drone.on = !drone.on;
  },
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
};

/* //specs
var make = document.querySelector("#make");
make.innerHTML += drone.brand.name;
var make = document.querySelector("#model");
make.innerHTML += drone.model;
var make = document.querySelector("#motors");
make.innerHTML += drone.rotors.numberOfmotors;
var make = document.querySelector("#speed");
make.innerHTML += drone.topSpeed + " kmph";
var make = document.querySelector("#range");
make.innerHTML += drone.maxRange + " meters";
var make = document.querySelector("#battery");
make.innerHTML += drone.battery + " minutes";

//functions

var functions = document.querySelector("ul");
for (i = 0; i < drone.functions.length; i++) {
  functions.innerHTML +=
    "<li>" + "<button>" + drone.functions[i].name + "</button>" + "</li>";
}

//ignition
var ignition = document.querySelector("#ignition");
if (drone.on === true) {
  ignition.innerHTML = "Engine is ON";
} else {
  ignition.innerHTML = "Engine is OFF";
} */
