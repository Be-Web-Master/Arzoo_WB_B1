// 7. Create a text input element. Implement a keydown event listener that alerts "Key pressed!" when any key is pressed in the input field (Event: keydown).

const text = document.getElementById("text");
text.addEventListener("keydown",()=>{
    alert("Key Pressed!")
})