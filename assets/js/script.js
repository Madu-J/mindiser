// Add all required elements
let start_btn = document.querySelector(".start_btn button");
let info_box = document.querySelector(".info_box");
let exit_btn = info_box.querySelector(".buttons .exit");
let contiune_btn = document.querySelector(".buttons .contiune");
let quiz_box = document.querySelector(".quiz_box");
let replay_btn = document.querySelector(".buttons replay");
let exit_game_btn = document.querySelector(".buttons exit_game");

// Start Quiz button active
start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
};

// Exit Quiz button active
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
};

// Contiune Quiz button active
contiune_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //Hide quiz info box
    quiz_box.classList.add("activeQuiz"); //Show the quiz box
    showQuestions(0);
    queCounter(1);
};

let que_count = 0;
let que_numb = 1;

//Nest question button active
let next_btn = quiz_box.querySelector(".next_btn");

next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
    } else {
        console.log("Congratulations, you have completed the Quiz!");
    }
};

//Questions and options
function showQuestions(index) {
    let question_text = document.querySelector(".question_text");
    let option_list = document.querySelector(".option_list");
    let que_tag =
        "<span>" +
        questions[index].numb +
        "." +
        questions[index].question +
        "</span>";
    let option_tag =
        '<div class="option_list">' +
        questions[index].options[0] +
        "<span></span></div>";
    +'<div class="option_list">' +
        questions[index].options[1] +
        "<span></span></div>";
    +'<div class="option_list">' +
        questions[index].options[2] +
        "<span></span></div>";
    +'<div class="option_list">' +
        questions[index].options[3] +
        "<span></span></div>";
    question_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    let option = option_list.querySelectorAll(".option_list");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    if (userAns == correctAns) {
        answer.classList.add("correct");
        console.log("You are correct");
    } else {
        answer.classList.add("incorrect");
        console.log("Incorrect answer");
    }
}

function queCounter(index) {
    let bottom_ques_counter = quiz_box.querySelector(".total-question");
    let totalQuesCountTag =
        "<span><p>" +
        index +
        "</p>of<p>" +
        questions.length +
        "</p>Questions</span>";
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}
