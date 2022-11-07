//1

//Make this into a String
let jonSnowHealth = 100;
// console.log(typeof jonSnowHealth);

// //converting to String
// jonSnowHealth = String(jonSnowHealth);
// //jonSnowHealth = toString(jonSnowHealth);

// console.log(typeof jonSnowHealth);
// console.log(Boolean(jonSnowHealth));

// //converting to a number
// jonSnowHealth = Number(jonSnowHealth);
// console.log(typeof jonSnowHealth);

// //parseInt the number
// let jonSnowHealth2 = '100 health';

// jonSnowHealth2 = parseInt(jonSnowHealth2);
// console.log(jonSnowHealth)

// //converting to a boolean
// jonSnowHealth = Boolean(jonSnowHealth);

// //converting using strin coersion/concatenation
// jonSnowHealth = jonSnowHealth + ' health';
// console.log(jonSnowHealth);

// // jonSnowHealth = 'health - ' + jonSnowHealth;

// console.log(jonSnowHealth);

// 2.

//replace
let theWinnerIs = 'Jamie is the winner';
newWinner = theWinnerIs.toLowerCase().replace('jamie', 'Jon');

// console.log(newWinner)

//includes
if (newWinner.includes('Jon')) {
  console.log('replaced successfully');
} else {
  console.log('not replaced');
}

console.log(newWinner);

//convert to kebab-case eg. Jon-is-the-winner
let newWinnerReplace = newWinner.replaceAll(' ', '-');
console.log(newWinnerReplace);

//convert to kebab-case eg. jon-is-the-winner
// let newWinnerReplace = newWinner.replaceAll(' ', '-')
// let newWinnerLower = newWinner.toLowerCase()
// let newWinnerLowerSplit = newWinnerLower.split(' ')
// let newWinnerKebab = newWinnerLowerSplit.join('-')

let newWinnerKebab = newWinner.toLowerCase().split(" ").join("-");

console.log(newWinnerKebab);

//functions
isJonAlive();

function isJonAlive() {
  if (jonSnowHealth > 0) {
    console.log(`Jon is alive!`);
  } else {
    console.log(`RIP Jon Snow`);
  }
}

//function expression
// const isJonAlive = () => {
//     if(jonSnowHealth > 0){
//         console.log(`Jon is alive!`)
//     } else {
//         console.log(`RIP Jon Snow`)
//     }
// }

//arrow-function
// const isJonAlive = function(){
//     if(jonSnowHealth > 0){
//         console.log(`Jon is alive!`)
//     } else {
//         console.log(`RIP Jon Snow`)
//     }
// }

//create a function to launch attack on Jon

function surpriseAttack(attack) {
  jonSnowHealth -= attack;
  isJonAlive();
  //the same
  // jonSnowHealth = jonSnowHealth - attack
}

surpriseAttack(20);
surpriseAttack(10);
surpriseAttack(40);
surpriseAttack(40);
// let remainingPlusShield = surpriseAttack(18) + 50;

// console.log(jonSnowHealth);


isJonAlive();

//multiple parameters can be used
function greeting(person1, person2) {
  console.log(`${person1} and ${person2} are saying hello to each other`);
}

greeting('Ned', 'Jon');

//functions with return
function rollDice() {
  let possibleRolls = [1, 2, 3, 4, 5, 6]
  let randomIndex = Math.floor(Math.random() * possibleRolls.length)
  return possibleRolls[randomIndex]
}

// let firstRoll = rollDice();
// let secondRoll = rollDice();
// console.log(firstRoll, secondRoll);

function diceMultiplier() {
  let firstRoll = rollDice();
  let secondRoll = rollDice();

  return firstRoll * secondRoll;
}

let multipliedRoll = diceMultiplier();
console.log(multipliedRoll);