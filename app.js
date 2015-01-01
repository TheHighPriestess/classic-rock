$(document).ready(function() {
    //quiz question array
    var questions = [{
        question: "Who wrote the original version of the song 'Hurt'?",
        choices: ["Trent Reznor", "Johnny Cash", "Leona Lewis", "David Gahan"],
        qNum : 0,
        correct : 0,
        fact: "Trent Reznor wrote the original version of the song."
        },
        {
        question: "Which member of Deep Purple has also been the singer for Captain Beyond?",
        choices: ["Don Airey", "Roger Glover", "Ian Paice", "Rod Evans"],
        qNum : 1,
        correct : 3,
        fact: "Rod Evans was both a member of Deep Purple and Captain Beyond."
        },
        {
        question: "Which famous musician inspired the Deep Purple song, Smoke On The Water?",
        choices: ["Frank Zappa", "David Coverdale", "Phil Lynott", "Ian Underwood"],
        qNum : 2,
        correct : 0,
        fact: "Frank Zappa inspired the song after an unsuccessful concert in Switzerland."
        },
        {
        question: "What inspired the famous 'lips and tongue' logo for Rolling Stones?",
        choices: ["Chupa-chups lollypops", "Jagger's Mouth", "Einstein's gesture", "A red t-shirt he was wearing"],
        qNum : 3,
        correct : 1,
        fact: "It was Mick Jagger's mouth.  Don't tell me that you're surprised."
        },
        {
        question: "Which Rush album featured the Starman logo for the first time?",
        choices: ["Moving Pictures", "2112", "A Caress of Steel", "A Farewell To Kings"],
        qNum : 4,
        correct : 1,
        fact: "2112 - Starman became iconic ever since 2112"
    }]
    
    //global variables
    var numberCorrect = 0;
    var currentQuestion = 0;
    
    $("#question_wrapper").on("click", "#submit", function () {
        updateCup();
        currentQuestion++;
        nextQuestion();
    });
    
    $("#question_wrapper").on("click", "#retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        $(".score_cup").css("display", "none");
        $("#score_cup0").css("display", "inline");
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="submit"><span id="hint"></span><input type="button" id="retry_button" value="again!"></div>';
        $("#question_wrapper").html(newQuestion);
        $("#last_question_fact").html("");
    });

    function updateCup() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            numberCorrect++;    
        }
        if (numberCorrect == 1) {
            $(".score_cup").css("display", "none")
            $("#score_cup1").fadeIn();
        }
        else if (numberCorrect == 2) {
            $(".score_cup").css("display", "none")
            $("#score_cup2").fadeIn();
        }
        else if (numberCorrect == 3) {
            $(".score_cup").css("display", "none")
            $("#score_cup3").fadeIn();
        }
        else if (numberCorrect == 4) {
            $(".score_cup").css("display", "none")
            $("#score_cup4").fadeIn();
        }
        else if (numberCorrect == 5) {
            $(".score_cup").css("display", "none")
            $("#score_cup5").fadeIn();
        }
    }

    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
			$("#last_question_fact").hide();
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="submit"><span id="hint"></span><input type="button" id="retry_button" value="again!"></div>';
            $("#question_wrapper").html(newQuestion);
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact).fadeIn();
        }
        else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
			$("#last_question_fact").fadeOut();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact);
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
                $("#answer_holder").html(finalScore);
            }
            else {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' questions.'
                $("#answer_holder").html(finalScore);
            }
        }
    }
});
