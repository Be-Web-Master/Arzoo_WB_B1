// 12. Open sidebar on click a "Open Modal" and then change button text to "Close Modal", When user clicks on "Close Modal" the hide modal and change text to "Open Modal".

const button = document.getElementById("button");
const modal = document.getElementById("modal");

button.addEventListener("click", () => {
  button.innerText = "Close Modal";
  modal.style.opacity = "1";
  closeModal();
});

function closeModal() {
  button.addEventListener("click", () => {
    button.innerText = "Open Modal";
    modal.style.opacity = "0";
  });
}
// button.addEventListener("click", () => {
//   button.innerText = "Open Modal";
//   modal.style.opacity = "0";
// });
