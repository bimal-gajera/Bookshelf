const addBtn = document.querySelector("#add-book");
const cancelBtn = document.querySelector(".cancel-btn")
console.log(addBtn);


addBtn.addEventListener("click", () => {
  document.getElementsByClassName("form-container")[0].style.display = "block";
});

cancelBtn.addEventListener("click", () => {
  document.getElementsByClassName("form-container")[0].style.display = "none";
  document.querySelector(".form").reset();
});