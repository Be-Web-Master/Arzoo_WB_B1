// 11. Create a button and when user click on button then it show a modal with user's name, age, gender and email with a "Close" text on the top right side and hide modal click of this text.

const clickBtn = document.getElementById("click");
const modalDiv = document.getElementById("modal");
clickBtn.addEventListener("click",()=>{
     modalDiv.style.opacity = "1";
})
const closeBtn = document.getElementById("close");
closeBtn.addEventListener("mousedown",()=>{
    modalDiv.style.opacity = "0";

})