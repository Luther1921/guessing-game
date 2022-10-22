//guessingGame function

//prompt user for username
const username = prompt("what is your username?");

console.log('welcome' + ' ' + username)


function guessingGame(max) {
  // generate random number between 1-maximum number
  generatedNumber = Math.floor(Math.random() * max) + 1;
  //interpolating the string
  userNumber = prompt(`Enter the number between 1-${max}`)

  //check if the random number is equal to the user number
  if (generatedNumber == userNumber) {
    console.log("you've been awarded a point, move to the next level")
   
    //increase the maximum number and call the function (recursive)
    guessingGame(max + 1)
  } else {
    //the user answer is wrong
    console.log("wrong answer, game over")
  }
}


console.log(guessingGame(2))


