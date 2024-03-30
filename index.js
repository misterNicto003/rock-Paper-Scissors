let choice = ["камень","бумага","ножницы"]

function getComputerChoice(choice){
    return choice[Math.floor(Math.random() * choice.length)]
}


function playRound(playerSelection, computerSelection) {
    if(   playerSelection === computerSelection ){
        console.log( "Галстук")
    }else if (playerSelection === choice[0] && computerSelection === choice[2]){
        console.log("игрок победил");
    }else if (playerSelection === choice[1] && computerSelection === choice[0]) {
        console.log("игрок победил");
    }else if (playerSelection === choice[2] && computerSelection === choice[1]) {
        console.log("игрок победил");
    } else {
        console.log("ты проиграл")
    }
  }
  
  const playerSelection = prompt("Пожалуйста, введите значение").toLowerCase();
  const computerSelection = getComputerChoice(choice)
  
  console.log(playRound(playerSelection, computerSelection))