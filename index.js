// let userName = prompt('Enter your username');
// let level = 1;
// let points = 0;
// let initial = 1;
// let randomNum = Math.floor(Math.random() * level) + 1;
// function guessNumGame(numRange) {
//   let guess = prompt(`Guess the number between 1 and ${initial + level}`);
//   console.log(`Random Number: ${randomNum}`);
//   if (guess == randomNum) {
//     level += 1;
//     points += 1;
//     console.log(`Correct, Ready for level: ${level}`);
//     randomNum = Math.floor(Math.random() * level) + 1;
//   }
//   else {
//     console.log('Oops! you guessed wrong');
//     console.log('Guess Again');
//   }
// }
// console.log(`Level: ${level}`);
// console.log(`Current point: ${points}`);
// console.log(`Random Number: ${randomNum}`);
// guessNumGame();
// for (let numRange = 5; numRange > level; numRange++) {
//   console.log(`Start level: ${level}`);
//   console.log(`Current point: ${points}`);
//   guessNumGame(numRange);
// }



function game() {
  let userName = prompt('Enter your username');
  if (userName.match("[a-zA-Z]+")) {
    console.log('Welcome!');
    let level = 1;
    let points = 0;
    let initial = 1;
    let randomNum = Math.floor(Math.random() * level) + 1;
    function guessNumGame(numRange) {
      let guess = prompt(`Guess the number between 1 and ${initial + level}`);
      console.log(`Random Number: ${randomNum}`);
      if (guess == randomNum) {
        level += 1;
        points += 1;
        console.log(`Correct, Ready for level: ${level}`);
        randomNum = Math.floor(Math.random() * level) + 1;
      }
      else {
        console.log('Oops! you guessed wrong');
        console.log('Guess Again');
      }
    }
    console.log(`Level: ${level}`);
    console.log(`Current point: ${points}`);
    // console.log(`Random Number: ${randomNum}`);
    guessNumGame();
    for (let numRange = 5; numRange > level; numRange++) {
      console.log(`Start level: ${level}`);
      console.log(`Current point: ${points}`);
      guessNumGame(numRange);
    }
  }
  else {
    console.log('Please restart the game and enter a string value as you can\'t play the game without username, thanks.');
  }

}
game();