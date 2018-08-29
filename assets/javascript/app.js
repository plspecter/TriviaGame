jQuery(document).ready(function () {
    $(".answers1").hide();
    $(".answers2").hide();
    $(".answers3").hide();
    $("#timeRemaining").hide();
    $("#stopwatch").hide();
    $("#submit").hide();
    $("#correctAnswers").hide();
    $("#incorrectAnswers").hide();
    $("#unansweredQuestions").hide();




    console.log("ready");

    var userGuess;
    var stopwatch = 120;

    var answers1 = false;

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timerRunning = false
    var answers = false;
    var timer = {
        time: 0
    }

    //Can we target the answers to not appear until start button

    //Hide the start button when i press it
    $("#startButton").on("click", function () {
        $("#startButton").text('Hide');
        $("#startButton").toggle();
        $("#timeRemaining").toggle();
        $("#stopwatch").toggle(run);

        //Hide the questions and answers until we press start
        //Change the container size to fit all of the questions/answers when we press start
        $(".answers1").toggle();
        $(".answers2").toggle();
        $(".answers3").toggle();
        $("#submit").toggle();

        //If userGuesses the ice option then they have points added to correct

        if (userGuess === $("#ice")) {
            correct++;
        }
    
        else {
            incorrect++;
        }


        if (userGuess === $("#FrozenSeaway")) {
            correct++;
        }
    
        else {
            incorrect++;
        }

        if (userGuess === $("#Palicos")) {
            correct++;
        }
    
        else {
            incorrect++;
        }

        //When you click the submit button

        //My timer starts when start button is pressed
        //stopwatch is decrementing down by the second (1000)
        function run() {
            intervalId = setInterval(decrement, 1000);
        }

        function decrement() {
            stopwatch--;
            $("#stopwatch").html("<h2>" + stopwatch + "</h2>")
            console.log(stopwatch);

            if (stopwatch === 0) {
                stop();
                alert("Time up!");
            }
        }
    });


    //When you click the submit button
    //Hide the start button when i press it
    $("#submit").on("click", function () {
        console.log("this registers");
     //Everything that disappears after pressing the submit button
        $("#timeRemaining").toggle();
        $("#stopwatch").toggle();
        $("#submit").toggle();
        $(".answers1").toggle();
        $(".answers2").toggle();
        $(".answers3").toggle();
        //Everything that shows up after u press the submit button 
        $("#correctAnswers").toggle();
        $("#incorrectAnswers").toggle();
        $("#unansweredQuestions").toggle();

        $("#correct").text(correct);
        $("#incorrect").text(incorrect);
        $("#unanswered").text(unanswered);



        console.log("running")

    });
});

