function chanceRoll () {
let wText;
cWinnings = 50;
let rText;
rNum = Math.floor(Math.random() * 6) + 1;


    if(rNum == 1){
        document.write = "You rolled a" + rNum;
        wText = "It is good to be number 1! You doubled your winnings!";


    } else if(rNum == 2) {
        document.write = ("You rolled a" + rNum);

        wText = "Second best is not good enough. Roll again.";

    } else if(rNum == 3) {
        document.write = ("You rolled a" + rNum);
        wText = "Three is not a lucky number at all. You lose all your winnings";
    } else if(rNum == 4) {
        document.write = ("You rolled a" + rNum);
        wText = "Four is lucky like a four-leafed clover. You won 400 points!";
    }
     else if(rNum == 5){
        document.write = ("You rolled a" + rNum);
        wText ="Five Alive! You are still in the game, but there is no change in your winnings.";
    } else if(rNum == 6) {


    }
}