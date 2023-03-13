const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) { // this is a method
      this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) { // this is a method
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },
  };
  

  //   ACCESSING OBJECTS
var query = "pocketNum";
var lid = "lidOpen";

console.log("The backpack object:", backpack.color); // DOT NOTATION   
console.log("pocketNum value:", backpack["pocketNum"]); // BRACKET NOTATION

console.log("pocketNum value:", backpack[query]);  // different type of bracket notation
console.log("lid value:", backpack[lid]);

// OBJECT CONSTRUCTOR

function Backpack(
  name,
  volume,
  color,
  pocketNum,
  strapLengthL,
  strapLengthR,
  lidOpen
) {
  this.name = name;
  this.volume = volume;
  this.color = color;
  this.pocketNum = pocketNum;
  this.strapLength = {
    left: strapLengthL,
    right: strapLengthR,
  };
  this.lidOpen = lidOpen;
  this.toggleLid = function (lidStatus) {
    this.lidOpen = lidStatus;
  };
  this.newStrapLength = function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  };
}

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);