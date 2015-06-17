$(document).ready(function() {
    //quiz question array
    var questions = [{
        question: "Which of the following towns did Ash Ketchum live prior to his adventure?",
        choices: ["Celestic Town", "Floaroma Town", "Pallet Town", "Pacifidlog Town"],
        qNum : 0,
        correct : 2,
        fact: " Ash was resident of Pallet Town along with his nemisis Gary Oak."
        },
        {
        question: "How is a Vaporeon acquired in the Pokemon games?",
        choices: ["Capturing Eevee and evolving it with a water stone", "Trading Ninetails equiped with a water stone",  "Getting a Magikarp to level 25", "Getting Eevee to level 30"],
        qNum : 1,
        correct : 0,
        fact: " Eve can be evolved into 4 different types of pokemon: for an Umbreon level Eevee up after 8PM and before 4AM, Vaporeon use a water stone, for Jolteon use a thunder stone and for Flareon use a fire stone."
        },
        {
        question: "In the Pokemon games you are able to breed your Pokemon and acquire an egg. Which of the following is Magmars first evolution?",
        choices: ["Cyndaquil", "Magby", "Maggie",  "Megnemite"],
        qNum : 2,
        correct : 1,
        fact: " Breeding two Magmars will produce an egg that will eventually hatch into a Magby."
        },
        {
        question: "In the Pokemon series, how did Ash find Charamander?",
        choices: ["Walking through tall grass", "During a battle with Gary", "Sitting on a rock in the rain", "It was his first Pokemon" ],
        qNum : 3,
        correct : 2,
        fact: " Ash found Charamander sitting on a rock in the rain with the flame on its tail nearly burnt out. When Charamander loses its flame...it dies."
        },
        {
        question: "Which of the following was the Legendary dog Pokemon posted on the cartirage of the 'Pokemon Crystal' game?",
        choices: ["Entei", "Raikou", "Arcanine", "Suicune"],
        qNum : 4,
        correct : 3,
        fact: "Suicune is found randomly throughout your adventure in Pokemon Crystal"
    }]
    
     //global variables
    var numberCorrect = 0;
    var currentQuestion = 0;
    
    $("#question-wrapper").on("click", "#submit", function () {
        updateCup();
        currentQuestion++;
        nextQuestion();
    });
    
    $("#question-wrapper").on("click", "#retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question-wrapper").html(newQuestion);
        $("#last_question_fact").html("");
    });

    function updateCup() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            numberCorrect++;    
        }
       
    }

    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer-holder input").remove();
            $("#answer-holder span").remove();
            $("#last_question_fact").hide();
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer-holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
            $("#question-wrapper").html(newQuestion);
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact).fadeIn();
        }
        else {
            $(".question").remove();
            $("#answer-holder input").remove();
            $("#answer-holder span").remove();
            $("#last_question_fact").fadeOut();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact);
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
                $("#answer-holder").html(finalScore);
            }
            else {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' questions.'
                $("#answer-holder").html(finalScore);
            }
        }
    }
   
});
