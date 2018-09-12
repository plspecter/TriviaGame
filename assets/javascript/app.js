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

    var stopwatch = 1200000000;

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

    });
    //If userGuesses the right option then they have points added to correct
    //If the userGuesses anything else but the right answer add points to inncorrect

    //Set the inputRadioOption name to match the group of radio buttons you are selecting from
    //Then target the ice id to be correct out of all of those options
    // if (userGuess1 === $('input[name=inlineRadioOptions1]:checked').val()) {
    //     if (userGuess1 === $("#ice")) {
    //         correct++;
    //         console.log(userGuess);
    //     }

    //     else {
    //         incorrect++;
    //     }
    // }


    // if (userGuess2 === $('input[FrozenSeaway=inlineRadioOptions2]:checked').val()) {
    //     correct++;
    //     console.log(userGuess);
    // }

    // else {
    //     incorrect++;
    // }

    // if (userGuess3 === $('input[Palicos=inlineRadioOptions3]:checked').val()) {
    //     correct++;
    //     console.log(userGuess);
    // }

    // else {
    //     incorrect++;
    //     console.log(userGuess);
    // }

    //When you click the submit button

    //My timer starts when start button is pressed
    //stopwatch is decrementing down by the second (1000)
    function run() {
        $("#stopwatch").html("<h2>" + stopwatch + "</h2>")
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        stopwatch--;
        $("#stopwatch").html("<h2>" + stopwatch + "</h2>")

        if (stopwatch === 0) {
            stop();
            alert("Time up!");

        }
    }




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

        var answers = ['ice', 'Frozen Seaway', 'Palicos'];
        var wrongAnswers = ['poison', 'fire', 'thunder', "Ancestral Steppe", "Sunken Hollow", "Ingle Isle", "Piggly Wigglies", "Annoyances", "Derrick"];
        userGuess1 = $("input[name='inlineRadioOptions1']:checked").val()
        userGuess2 = $("input[name='inlineRadioOptions2']:checked").val()
        userGuess3 = $("input[name='inlineRadioOptions3']:checked").val()

        console.log("USER GUESS 1: ", userGuess1)


        if (userGuess1 === answers[0]) {
            correct++;
             //THIS PRINTS THE CORRECT ANSWER TO THE HTML
            $("#correct").text(correct);
            $("#correct").html();
            console.log(correct, + "correct")
            console.log(incorrect)
        }

        else if (userGuess1 === wrongAnswers[0, 1, 2, 3, 4, 5, 6, 7, 8]) {
         incorrect++;
        //THIS PRINTS THE INNCORRECT ANSWER TO THE HTML
        $("#incorrect").text(incorrect);
        $("#incorrect").html();
        }

        else  {
            unanswered++;
            //THIS PRINTS THE UNANSWERS TO THE HTML
           $("#unanswered").text(unanswered);
           $("#unanswered").html();
        }

        //==2nd answer

        console.log("USER GUESS 2: ", userGuess2)
        if (userGuess2 === answers[1]) {
            correct++;
            $("#correct").text(correct);
            $("#correct").html();
            console.log(userGuess2);
            console.log(correct)
            console.log(incorrect)
        }

        else if (userGuess2 === wrongAnswers) {
            incorrect++;
            $("#incorrect").text(incorrect);
            $("#incorrect").html();
        }

        else {
            unanswered++;
            //THIS PRINTS THE UNANSWERS TO THE HTML
           $("#unanswered").text(unanswered);
           $("#unanswered").html();
        }


        

        //===3rd answer 

        console.log("USER GUESS 3: ", userGuess3)
        if (userGuess3 === answers[2]) {
            correct++;
            $("#correct").text(correct);
            $("#correct").html();
            console.log(userGuess3);
            console.log(correct)
            console.log(incorrect)
        }

        else if ((userGuess3 === wrongAnswers)) {
            incorrect++;
            $("#incorrect").text(incorrect);
            $("#incorrect").html();

        }

        else {
            unanswered++
            //THIS PRINTS THE UNANSWERS TO THE HTML
           $("#unanswered").text(unanswered);
           $("#unanswered").html();
        }

        

        //Have ice print append to the correct answers
        // if (userGuess1 === answers[i]) {
        //     correct++
        // }

        // else if (userGuess1 === wrongAnswers[i]) {
        //     incorrect++
        // }
        // console.log("USER GUESS 2: ", userGuess2[i]) 
        // if (userGuess2 = answers) {
        //     correct++
        // }

        // else if (userGuess2 === wrongAnswers[i]) {
        //     incorrect++
        // }
        // console.log("USER GUESS 3: ", userGuess3[i]) 
        // if (userGuess3 = answers) {
        //     correct++
        // }

        // else if (userGuess3 === wrongAnswers[i]) {
        //     incorrect++
        // }
    });
});

