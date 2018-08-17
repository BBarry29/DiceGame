"use strict"


let username = prompt("What is your name?" , "")
if (confirm("Hello " + username +"!" + " Click OK to roll the dice get your future!")) {
                    
    } else {
    console.log("Username Error");
}

let rollDice = (Math.floor(Math.random() * 4) + 1);
let yourCar =  
["Maserati",
"Tesla",
"Aston Martin",
"Lamborghini"];
function getDice() {
  return rollDice;
}
console.log("You rolled a " + rollDice + "!" +  " You will drive a(n) " + yourCar[rollDice-1] + "!");
  
rollDice = (Math.floor(Math.random() * 6) + 1);
let yourHome = 
["Igloo", 
"RV", 
"Wigwam", 
"Castle", 
"Bullet Proof Glass Compound", 
"The ISS"];

function getDice() {
  return rollDice;
}
console.log("You rolled a " + rollDice + "!" + " You will live in a(n)/at " + yourHome[rollDice-1] + "!");

rollDice = (Math.floor(Math.random() * 8) + 1);
let yourPet = 
["Chinchilla", 
"Hissing Cockroach", 
"Miniature Donkey", 
"Flying Squirrel", 
"Monitor Lizard", 
"Koala Bear", 
"Sugar Glider", 
"Redknee Tarantula"]; 

function getDice() {
    return rollDice;
 }
  console.log("You rolled a(n) " + rollDice + "!" + " You will have a(n) " + yourPet[rollDice-1] +  " as a pet!");

  rollDice = (Math.floor(Math.random() * 10) + 1);
  let yourOccupation = 
  ["Duck Master",
  "Professional Apologizer", 
  "Iceburg Mover",
  "Elephant Dresser",
  "Ostrich Babysitter",
  "Undertaker",
  "Physical Therapist",
  "MMA Instructor",
  "Catfish Farmer",
  "911 Operator"]

  function getDice() {
     return rollDice;
  }
  console.log("You rolled a(n)" + rollDice + "!" + " You will be a(n) " + yourOccupation[rollDice-1] + " when you grow up!")
  
  rollDice = (Math.floor(Math.random() * 12) + 1);
  let yourLocation =
  ["Batman, Turkey", 
   "Satan's Kingdom, VT",
   "Beer, Devon, Eng.", 
   "Monster, Netherlands.",
   "F*cking, Austria",
   "Waga Waga, Australia",
   "Blue Ball, Ireland",
   "Anus, France.",
   "Dull Scotland",
   "Moron, Mongolia",
   "Silly, Belgium",
   "Punkeydoodles Corners, Ontario"]

   function getDice() {
      return rollDice;
   }
   console.log("You rolled a(n) " + rollDice + "!" + " You will live in " + yourLocation[rollDice-1] + "!")

   rollDice = (Math.floor(Math.random() * 14) + 1);
   let button = document.getElementById("button");
   let yourKidsName =
   ["Sage",
    "Casper",
    "Kymber", 
    "Finley",
    "Zane",
    "Milo",
    "Dallas",
    "Randy",
    "Orion",
    "Armani",
    "Wallis",
    "Sidney"]

   function getDice() {
      return rollDice;
   }
console.log("You rolled a(n) " + rollDice + "!" + " You will name your first child " + yourKidsName[rollDice-1] + "!")