const options=['rock','paper','scissors'];
function getComputerChoice(){
    const choices= options[Math.floor(Math.random()*options.length)];
    return choices;
}
// we want to declare a winner every time a game round is completed
function playRound(playerSelection,computerSelection){
           const results= whoIsTheWinner(playerSelection,computerSelection)
           if(results==='Tie'){
            return 'It is a tie!'
           }else if(results==='player'){
            return `You win! ${playerSelection} beats ${computerSelection}`
           }else{
            return`You lost! ${computerSelection} beats ${playerSelection}`
           }
}
//we want to determine the winner between the player and computer
function whoIsTheWinner(playerSelection,computerSelection){
  if(playerSelection===computerSelection){
    return 'Tie'
  }else if(playerSelection==='rock'&& computerSelection==='paper'||
  playerSelection==='scissors'&& computerSelection==='rock'||
  playerSelection==='paper'&&computerSelection==='scissors'
  ){
    return 'player';
  }else{
    return 'computer';
  }
}
function getPlayerChoice(){
  
}


const playerSelection=getPlayerChoice();
const computerSelection=getComputerChoice() ; 
      console.log(playRound(playerSelection,computerSelection));  