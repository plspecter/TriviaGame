jQuery(document).ready(function () {
    $(".answers1").hide();
    $(".answers2").hide();
    $(".answers3").hide();
    $("#timeRemaining").hide();
    $("#stopwatch").hide();
    $("#submit").hide();



    console.log("ready");

    var stopwatch = 120;
    var intervalId

    var answers1 = false;

    var correct = 0;
    var incorrect = 1;
    var timerRunning = false
    var answers = false;
    var timer = {
        time: 0
    }

    //Can we target the answers to not appear until start button

    //Hide the start button when i press it
    $("#startButton").on("click", function () {
        console.log("this registers");
        $("#startButton").text('Hide');
        $("#startButton").toggle();
        $("#timeRemaining").toggle();
        $("#stopwatch").toggle(run);
        console.log("running")

        //Hide the questions and answers until we press start
        //Change the container size to fit all of the questions/answers when we press start
        $(".answers1").toggle();
        $(".answers2").toggle();
        $(".answers3").toggle();
        $("#submit").toggle();
    
    

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
});

