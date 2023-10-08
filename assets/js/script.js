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
    showQuestions(6);
};

let que_count = 0;

//Questions and options 
function showQuestions(index) {
    let question_text = document.querySelector(".question_text");
    let option_list = document.querySelector(".option_list");
    let que_tag = '<span>' + questions[index].question + '</span>';
    let option_tag = '<div class="option_list">' + questions[index].options[0] + '<span></span></div>';
    + '<div class="option_list">' + questions[index].options[1] + '<span></span></div>';
    + '<div class="option_list">' + questions[index].options[2] + '<span></span></div>';
    + '<div class="option_list">' + questions[index].options[3] + '<span></span></div>';
    question_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}
