function refreshPage(){
    
    var val1 = Math.floor(Math.random()*6)+1;
    var val2 = Math.floor(Math.random()*6)+1;
    var randomdice1="dice"+val1+".png"
    var randomdice2="dice"+val2+".png"
    document.getElementsByTagName("img")[0].setAttribute("src", randomdice1);
    document.getElementsByTagName("img")[1].setAttribute("src", randomdice2);
    if(val1>val2)
    {
        document.getElementsByTagName("h1")[0].innerHTML="Player 1 Wins";
    }
    else if(val1<val2)
    {
        document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins";
    }
    else
    {
        document.getElementsByTagName("h1")[0].innerHTML="Tie";
    }
} 

