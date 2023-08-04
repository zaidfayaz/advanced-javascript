 'use strict';

let guessNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = guessNumber;
  
document.querySelector('.check').addEventListener('click', function(){
 const guess = Number(document.querySelector('.guess').value);
 console.log(guess,  typeof guess);

//when there is no input
 if (!guess){
    document.querySelector('.message').textContent = 'No number written';
  //when player wins the game
 }else if ( guess === guessNumber){
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = guessNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = ' 30rem';
    if (score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
} // when guess is wrong 
else if ( guess !== guessNumber){
    if ( score > 1){
        document.querySelector('.message').textContent = guess > guessNumber ? 'Too High!': 'Too Low ';
        score--;
        document.querySelector('.score').textContent = score;
    }else {
            document.querySelector('.message').textContent = ' You lost the game';
            document.querySelector('.score').textContent = 0;
        }
 }

//     //when guess is too hogh
//  else if (guess > guessNumber){
//     if ( score > 1){
//      document.querySelector('.message').textContent = 'Too High!';
//     score--;
//     document.querySelector('.score').textContent = score;
 
// }else {
//     document.querySelector('.message').textContent = ' You lost the game';
//     document.querySelector('.score').textContent = 0;
// }
// // //when guess is too low
// }else if (guess < guessNumber){
//     if ( score > 1){
//         document.querySelector('.message').textContent = 'Too Low!';
//        score--;
//        document.querySelector('.score').textContent = score; 
    
//    }else {
//        document.querySelector('.message').textContent = ' You lost the game';
//        document.querySelector('.score').textContent = 0;
//     }
//  }
});
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    guessNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Start guessing... ';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = " ";
    document.querySelector('body').style.backgroundColor = ' black';
    document.querySelector('.number').style.width = '15rem';
});
