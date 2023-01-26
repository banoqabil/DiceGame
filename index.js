var p1 = Math.floor(Math.random()*6) + 1;
console.log(p1);

var p2  = Math.floor(Math.random()*6) + 1;
console.log(p2);

document.getElementById("imagep1").setAttribute("src", "images/dice"+p1+".png");
document.getElementById("imagep2").setAttribute("src","images/dice"+p2+".png");


if(p1 > p2){
    //player 1 wins

    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(p2 > p1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "Draw, Refresh";
}