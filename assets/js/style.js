const submits = document.querySelectorAll(".submit");
submits.forEach((submit, index) => {
  submit.addEventListener("click", handleOnClickSubmit);
});

function handleOnClickSubmit(e) {
  e.target.classList.toggle("submit-animation");
}