function startGame(){
    var quiz = document.getElementsByClassName("questions")[0];
    var introduction = document.getElementsByClassName("gameStart")[0];

    introduction.style.display = "none";
    quiz.style.display = "grid";
    result.innerHTML = ""; // Reset the result message
    tryAgain.style.display = "none"; // Hide the tryAgain button
}

function clickSubmit(){
    var quiz = document.getElementsByClassName("questions")[0];
    var result = document.getElementById("result")
    var tryAgainButton = document.getElementById("tryAgain");

    var score = 0
    
    var answers = ["tree","rose","amazon","liffey","africa","america","sheep","honey","autumn","apple"]

    for(index = 0; index < 10 ; index++){
        var userAnswer = document.getElementById("question" + (index + 1)).value.toLowerCase();
        if (userAnswer == answers[index]) {
            score++;
        } 
    }
    
    quiz.style.display = "none"

    if(score == 10){
        result.innerHTML = "you scored 100%, Congratulations!!! a tree will be planted in the amazon forest in a few days!."
    }else {
        result.innerHTML = "you got " + score + " right, unfortunately a tree won't be planted in the amazon forest."
        tryAgainButton.style.display = "block"

        
    }

}