const btnAll = document.querySelector(".all");
const btnRed = document.querySelector(".red");
const btnYellow = document.querySelector(".yellow");
const btnBlue = document.querySelector(".blue");
const btnBlack = document.querySelector(".black");
const btnTick = document.querySelector(".tick");

const lastContainer = document.querySelector(".end_tasks");
const lastRed = document.querySelector(".red_task");
const lastYellow = document.querySelector(".yellow_task");
const lastBlue = document.querySelector(".blueTask");
const lastBlack = document.querySelector(".black_task");
const lastComp = document.querySelector(".complete_final");


const modalContainer = document.querySelector(".modal_container");

const todo = document.querySelectorAll("#todo");
const cancelBtn = document.querySelector(".cancel_btn")
const textArea = document.querySelector(".text_area");

const insideRed = document.querySelector(".red_btn");
const insideYellow = document.querySelector(".yellow_btn");
const insideBlue = document.querySelector(".blue_btn");
const insideBlack = document.querySelector(".black_btn");

const createTask = document.querySelector(".task");  //btnform
const overlap = document.querySelector(".content");  //overlay

createTask.addEventListener("click", () => {
  modalContainer.classList.add("active");
});
const doneBtn = document.querySelector(".done_btn");

doneBtn.addEventListener("click", function (e) {
  modalContainer.classList.remove("active");
});

