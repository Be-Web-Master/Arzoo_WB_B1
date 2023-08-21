// 9. Create a div element with some text inside. Implement a mousedown event listener that changes the text to "Clicked!" when the user clicks on the div (Event: mousedown).

const text = document.getElementById("text");
text.addEventListener("mousedown",()=>{
    text.innerText = "Clicked!"
})