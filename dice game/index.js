let player1;
let player2;
function editNames(){
    player1 = prompt("Enter First Player Name");
    player2 = prompt("Enter Second Player Name");


    document.querySelectorAll("p")[0].innerHTML = player1;
    document.querySelectorAll("p")[1].innerHTML = player2;
}

function rollDice(){
    let random1 = Math.floor(Math.random()*6)+1;
    let random2 = Math.floor(Math.random()*6)+1;

    document.getElementById("dice1").src= "dice" +random1+ ".png";
    document.getElementById("dice2").src= "dice" +random2+ ".png";


    if(random1>random2){
        document.querySelector("h2").innerHTML = player1+" wins!!!";
    }else if(random2>random1){
        document.querySelector("h2").innerHTML = player2+" wins!!!";
    }
    else{
        document.querySelector("h2").innerHTML = "It's a Draw Match!!!";
    }
}

document.querySelectorAll("button")[0].addEventListener("click",editNames);
document.querySelectorAll("button")[1].addEventListener("click",rollDice);
    
    

