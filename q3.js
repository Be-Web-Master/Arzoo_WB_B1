// 3. Create an image element. When the image is fully loaded, display an alert saying "Image loaded!" (Event: load).

console.log("hello")
const loadedImg = document.getElementById("img");
loadedImg.addEventListener("load",()=>{
    alert("Image Loaded!")
    
})
