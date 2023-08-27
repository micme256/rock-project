function roundResult(playerChoice, computerChoice){
    let result= `Tie!, No one wins. `
    let winner= "Tie";
    if(playerChoice==="rock" && computerChoice==="scissor"){
        result=`You win! Rock breaks scissor`
        winner = "player"
    }
    else if (playerChoice==="rock" && computerChoice==="paper"){
        result=`CPU wins! Paper wraps rock.`
        winner = "CPU"
    }
    else if (playerChoice==="scissor" && computerChoice==="paper"){
        result=`You win! scissor cuts paper.`
        winner = "player"
    }
    else if (playerChoice==="scissor" && computerChoice==="rock"){
        result=`CPU win! Rock breaks scissor.`
        winner = "CPU"
    }
    else if (playerChoice==="paper" && computerChoice==="rock"){
        result=`You win! Paper wraps rock.`
        winner = "player"
    }
    else if (playerChoice==="paper" && computerChoice==="scissor"){
        result=`CPU wins! scissor cuts paper.`
        winner = "CPU"
    }
    return [winner, result]; 
    
    
}
const choiceArr = ["paper", "rock", "scissor"]

function compChoice(){
    const indexValue = Math.floor(Math.random()*choiceArr.length)
    let computerChoice=choiceArr[indexValue]
    return computerChoice
}
function game(arr){
    let [computerChoice, playerChoice, winner, resultDeclaration] = arr;
    const declarationDiv=document.querySelector('#result');
    declarationDiv.textContent=resultDeclaration;
    // let [playerScore, cpuScore]=roundCount();
    roundCount(winner)
    if (winner === "CPU") {
        declarationDiv.style.color = "red";
    } else if (winner === "player") {
        declarationDiv.style.color = "green";
    } else {
        declarationDiv.style.color = "black";
    }
    const playerChoiceDisplayDiv = document.querySelector('.player-display');
    const allPlayerChoiceImages = playerChoiceDisplayDiv.querySelectorAll('img');
        allPlayerChoiceImages.forEach(img => {
        img.style.display = 'none';
        });
    const imgToDisplay1 = playerChoiceDisplayDiv.querySelector(`img[alt="${playerChoice}"]`);
    imgToDisplay1.removeAttribute('style');

    const cpuChoiceDisplayDiv = document.querySelector('.cpu-display');
    const allCpuChoiceImages = cpuChoiceDisplayDiv.querySelectorAll('img');
        allCpuChoiceImages.forEach(img => {
        img.style.display = 'none';
        });
    const imgToDisplay2 = cpuChoiceDisplayDiv.querySelector(`img[alt="${computerChoice}"]`);
    imgToDisplay2.removeAttribute('style');

    

    }
    
    let playCount = 0;
    let playerWins = 0;
    let cpuWins = 0;
    let gameWinnerDeclaration='OOPS! CPU WINS. TRY AGAIN'

function roundCount(winner) {
  if (winner !== "Tie") {
    playCount++;

    if(playCount<=5){
        if (winner === 'player') {
      playerWins++;
    } else {
      cpuWins++;
    }

    let playerScore = playerWins + '/' + playCount;
    let cpuScore = cpuWins + '/' + playCount;

    const playerScoreDiv=document.querySelector('#p-score-val');
    playerScoreDiv.textContent=playerScore

    const cpuScoreDiv=document.querySelector('#c-score-val');
    cpuScoreDiv.textContent=cpuScore

    if(playCount===5){
        if(playerWins>cpuWins){
        gameWinnerDeclaration='CONGRAGULATIONS! YOU WIN'
        }
        const gameWinnerDeclarationDiv= document.querySelector('#game-winner');
        gameWinnerDeclarationDiv.textContent=gameWinnerDeclaration
    }
  }
}
}


    const buttons = document.querySelectorAll('.image-button');
    buttons.forEach(button => {
    button.addEventListener('click', function(e) {
    play(e);
  });
});

function play(e) {
  e.preventDefault();
  const playerChoice = e.currentTarget.querySelector('img').alt;
  const computerChoice = compChoice();
  let [winner, result] = roundResult(playerChoice, computerChoice);
  const arr = [computerChoice, playerChoice, winner, result];
  game(arr);
}

const resetButton=document.querySelector('#reset-button')
resetButton.addEventListener('click', resetGame)

function resetGame() {
    playCount = 0;
    playerWins = 0;
    cpuWins = 0;
    gameWinnerDeclaration = 'OOPS! CPU WINS. TRY AGAIN';
  
    const playerScoreDiv = document.querySelector('#p-score-val');
    playerScoreDiv.textContent = '0/0';
  
    const cpuScoreDiv = document.querySelector('#c-score-val');
    cpuScoreDiv.textContent = '0/0';
  
    const gameWinnerDeclarationDiv = document.querySelector('#game-winner');
    gameWinnerDeclarationDiv.textContent = 'Game result';
  }   
