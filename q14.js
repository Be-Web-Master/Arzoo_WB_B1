// 14. Create a list of 4 items with different ID. When any of the list items are clicked, log the text content of the clicked item to the console.

const li1 = document.getElementById("book1")
const li2 = document.getElementById("book2")
const li3 = document.getElementById("book3")
const li4 = document.getElementById("book4")

li1.addEventListener("mousedown",()=>{
    console.log(li1.innerText)
})
li2.addEventListener("mousedown",()=>{
    console.log(li2.innerText)
})
li3.addEventListener("mousedown",()=>{
    console.log(li3.innerText)
})
li4.addEventListener("mousedown",()=>{
    console.log(li4.innerText)
})