// 13. Write a program that counts the number of times a user clicks anywhere on the page and displays the count in an element with the ID "clickCount".
let count = 0;
let elem = document.getElementById("clickCount")
window.onclick = function () {
  console.log((count += 1));
  elem.innerText ="Counts: "+ `${count}`
};
