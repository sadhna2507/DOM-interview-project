let taskBtn = document.querySelector(".task");

let modalContainer = document.querySelector(".modal_container");

const colorBtn = document.querySelectorAll(".clrbtn");

const doneBtn = document.querySelector(".done_btn");

const textArea = document.querySelector(".text_area");

const contentArea = document.querySelector(".content");




let cancelBtn = document.querySelector(".cancel_btn")

taskBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });

  cancelBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // =====Selectors====== 
const mainCont = document.querySelector(".task-cont");
const priorityContainer = document.querySelector(".priority-container");
const taskItem = document.querySelectorAll(".task-item");