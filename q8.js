// 8. Design an input field. Implement a keyup event listener that displays an alert with the current value of the input field whenever a key is released (Event: keyup).

const text = document.getElementById("txt");
text.addEventListener("keyup",(event)=>{
    event.preventDefault();
    console.log("keyup")
    console.log(event)
    alert(event.target.value)
})