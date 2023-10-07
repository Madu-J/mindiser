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
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
};