// 5. Design a form with an input field. Implement a focus event listener that changes the input's border color to blue when it gains focus (Event: focus).

const inp = document.getElementById("txt");
// inp.style.borderColor = "white";
inp.style.outline = "none"
inp.addEventListener("focus",()=>{
    inp.style.borderColor = "blue"
})