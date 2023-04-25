const change = document.querySelector(".hidden");
const demo = document.querySelector(".dynamic");

document.querySelector(".btn").addEventListener("click", function () {
  demo.classList.remove("dynamic");
});
