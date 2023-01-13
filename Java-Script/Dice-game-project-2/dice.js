function shuffle(){
    const play1 =Math.floor(Math.random() * 6)+1;
    const play1dice = `Dice-${play1}.png`;
    document.getElementById("check1").setAttribute('src',play1dice);

    const play2 =Math.floor(Math.random() * 6)+1;                      //for rotate dice images 
    const play2dice = `Dice-${play2}.png`;
    document.getElementById("check2").setAttribute('src',play2dice);




    document.getElementById("player1_score").innerHTML=play1 + play2;
    // document.getElementById("player2_score").innerHTML=play1 + play2;   


}