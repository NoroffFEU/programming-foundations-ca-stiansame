//Drone as an object

const drone = {
  //ignition is moved further down
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
      active: false,
    },
    {
      name: "collisionDetection",
      active: false,
    },
    {
      name: "gyroscopicStabilizer",
      active: false,
    },
    {
      name: "returnHome",
      active: false,
    },
    {
      name: "manualOverride",
      active: false,
    },
  ],
};

//--------EVERYTHING BELOW IS JUST TO SHOW FUNCTIONALITY WITH HTML AND CSS----------

//specs
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

var gps = false;
var collisionDetection = false;
var gyroscopicStabilizer = false;
var returnHome = false;
var manualOverride = false;

var num = 1;
var numm = 1;

var functions = document.querySelector(".functions");
for (i = 0; i < drone.functions.length; i++) {
  functions.innerHTML +=
    "<div class='container'>" +
    "<div class='function" +
    numm++ +
    "'>" +
    drone.functions[i].name +
    "</div>" +
    "<label class='switch'>" +
    "<input type='checkbox'>" +
    "<span class='slider round' onclick='toggle" +
    num++ +
    "()'>" +
    "</span>" +
    "</label>" +
    "</div>";
}

//functions toggle

//gps

var gpsToggle = gps.active;
function toggle1() {
  gpsToggle = !gpsToggle;

  var gpsStatus = document.querySelector(".function1");
  if (gpsToggle === true) {
    gpsStatus.style.color = "green";
  } else {
    gpsStatus.style.color = "red";
  }
}

//collisionDetection

var colDecToggle = collisionDetection.active;
function toggle2() {
  colDecToggle = !colDecToggle;

  var colDecStatus = document.querySelector(".function2");
  if (colDecToggle === true) {
    colDecStatus.style.color = "green";
  } else {
    colDecStatus.style.color = "red";
  }
}

//Stabilizer

var stabToggle = gyroscopicStabilizer.active;
function toggle3() {
  stabToggle = !stabToggle;

  var stabStatus = document.querySelector(".function3");
  if (stabToggle === true) {
    stabStatus.style.color = "green";
  } else {
    stabStatus.style.color = "red";
  }
}

//returnHome

var returnToggle = gyroscopicStabilizer.active;
function toggle4() {
  returnToggle = !returnToggle;

  var returnStatus = document.querySelector(".function4");
  if (returnToggle === true) {
    returnStatus.style.color = "green";
  } else {
    returnStatus.style.color = "red";
  }
}

//manualOverride

var overrideToggle = gyroscopicStabilizer.active;
function toggle5() {
  overrideToggle = !overrideToggle;

  var overrideStatus = document.querySelector(".function5");
  if (overrideToggle === true) {
    overrideStatus.style.color = "green";
  } else {
    overrideStatus.style.color = "red";
  }
}

//ignition
var ignitionToggled = drone.on;
function toggle0() {
  ignitionToggled = !ignitionToggled;
  var igniteStatus = document.querySelector("#ignition");
  var status;
  if (ignitionToggled) {
    status = "ON";
    igniteStatus.style.color = "green";
  } else {
    status = "OFF";
    igniteStatus.style.color = "red";
  }
  igniteStatus.innerHTML = status;
}
