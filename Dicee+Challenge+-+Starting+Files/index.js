var rand = Math.floor(Math.random()*6)+1
document.getElementById("dice1").setAttribute("src","./images/dice"+rand+".png")
var rand1 = Math.floor(Math.random()*6)+1
document.getElementById("dice2").setAttribute("src","./images/dice"+rand1+".png")

if(rand>rand1){
    document.querySelector("h1").innerHTML="Player 1 wins"
}
else if(rand<rand1){
    document.querySelector("h1").innerHTML="Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}