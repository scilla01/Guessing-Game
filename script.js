
let randomNum = 1 + Math.floor(Math.random() * 100);
const maxTries = 3;
let count = 1;
let gameOver = false;
let message = "";


console.log(randomNum);

function buttonEnter(e) {

    e.preventDefault();
    const boxInput = parseInt(document.getElementById("boxInput").value);
    
    if(gameOver === false){
        if(count < maxTries)
         {
            if (randomNum == boxInput) {
        
                document.getElementById("display").textContent = "Very Correct. Click on the New Game button to start again";
                gameOver = true;
                document.getElementById("startButton").disabled = false;
                
            }
            else if (boxInput < randomNum) {
                document.getElementById("display").textContent = "Too low, try again";
                count++
            }
            else if(boxInput > randomNum) {
                document.getElementById("display").textContent = "Too high, try again";
                count++
            }
        }
        else {
            document.getElementById("display").textContent = "Sorry, out of tries. Correct number was " + randomNum +", to start a new game, click on the New Game button.";
            gameOver = true;
            document.getElementById("startButton").disabled = false;
        }
    }
}

document.getElementById("buttonEnter").addEventListener("click", buttonEnter);


document.getElementById("startButton").addEventListener("click", buttonNew);

function buttonNew() {
    e.preventDefault();
    document.getElementById("startButton").disabled = true;
    count = 1;
    gameOver = false;
    let message = "";
    let randomNum = 1 + Math.floor(Math.random() * 100);
    console.log(randomNum);
}






