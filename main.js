/*jslint browser: true, devel: true */

var userScore=0;
var computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
const reload_div=document.getElementById("reload");

reload_div.addEventListener('click',function(){
  document.location.reload(true);
})

function getComputerChoice(){
const choices = ['r', 'p', 's'];
const rand = Math.floor(Math.random()*3);
return choices[rand];
}

function setImg(userChoice,computerChoice){
    if(userChoice=='r')
        document.getElementById('user-choice').src='rock2.png';
    else
    if(userChoice=='p')
        document.getElementById('user-choice').src="paper2.png";
    else
    if(userChoice=='s')
        document.getElementById('user-choice').src="scissor2.png";

    if(computerChoice=='r')
        document.getElementById('computer-choice').src='rock1.png';
    else
    if(computerChoice=='p')
        document.getElementById('computer-choice').src="paper1.png";
    else
    if(computerChoice=='s')
        document.getElementById('computer-choice').src="scissor1.png";
}

function win(userChoice,computerChoice)
{
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;

}

function lose(userChoice,computerChoice)
{
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
}


function draw(userChoice,computerChoice)
{
    computerScore++;
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;

}

function move(userChoice,computerChoice){
    document.getElementById('user-choice').classList.add('updown');
    setTimeout(function(){document.getElementById('user-choice').classList.remove("updown")},300);
    document.getElementById('computer-choice').classList.add('updown');
    setTimeout(function(){document.getElementById('computer-choice').classList.remove("updown")},300);
    setImg(userChoice,computerChoice);
}



function game(userChoice){
    const computerChoice = getComputerChoice();
    document.getElementById(userChoice).classList.add('vibrate');
    		setTimeout(function(){document.getElementById(userChoice).classList.remove("vibrate")},300);
    move(userChoice,computerChoice);
    switch (userChoice+computerChoice){
    	case "rs":
            win(userChoice,computerChoice);
            result_div.innerHTML="Rock beats Scissors. You Win.";
            break;
    	case "pr":
            win(userChoice,computerChoice);
            result_div.innerHTML="Paper beats Rock. You Win!";
    		break;
    	case "sp":
            win(userChoice,computerChoice);
            result_div.innerHTML="Scissors beats Paper. You Win!";
    		break;
    	case "sr":
    		lose(userChoice,computerChoice);
        result_div.innerHTML="Scissors loses to Rock. You Lost!";
    		break;
    	case "rp":
    		lose(userChoice,computerChoice);
        result_div.innerHTML="Rock loses to Paper. You Lost!";
    		break;
    	case "ps":
			lose(userChoice,computerChoice);
      result_div.innerHTML="Paper loses to Scissors. You Lost!";
    		break;
    	case "rr":
    		draw(userChoice,computerChoice);
        result_div.innerHTML="It's a Draw";
    		break;
    	case "pp":
    		draw(userChoice,computerChoice);
        result_div.innerHTML="It's a Draw";
    		break;
    	case "ss":
    		draw(userChoice,computerChoice);
        result_div.innerHTML="It's a Draw";
    		break;
    }}

function main(){
rock_div.addEventListener('click',function(){
    game("r");
})
paper_div.addEventListener('click',function(){
    game("p");
})
scissor_div.addEventListener('click',function(){
    game("s");
})
}

main();
