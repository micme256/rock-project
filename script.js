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
    console.log(result);
    return winner 
    
    
}
 const choiceArr = ["paper", "rock", "scissor"]

function compChoice(){
    const indexValue = Math.floor(Math.random()*choiceArr.length)
    let computerChoice=choiceArr[indexValue]
    return computerChoice
}

function playChoice(){
    const playerChoice = prompt('What do you play', "rock").toLowerCase();
    return playerChoice;
}
function game(){
    let games =5
    let score;
    let playerWon = 0;

    for(let i = 1; i<=games; i++){
        let resultArr = play();
        const computerChoice= resultArr[0];
        const playerChoice = resultArr[1];
        const winner = resultArr[2];
        if(computerChoice===playerChoice){
            i-- //Repeat that round of the game due to a tie
        }
        else if(winner==="player") {
            playerWon++;
            score =playerWon+"/"+i;
            console.log(score);
        }
        else{
            score =(i-playerWon)+"/"+i;
            score =playerWon+"/"+i;
            console.log(score)            
        }
        
    }
}

function play(){
        const playerChoice = playChoice()
        const computerChoice = compChoice()
        if(playerChoice){
           let winner = roundResult(playerChoice, computerChoice);
            const arr = [computerChoice, playerChoice, winner];
            return arr
        }
    }
    
