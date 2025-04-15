let likes = [0, 0, 0];

let buttons = document.querySelectorAll(".megustaboton");
let counters = document.querySelectorAll(".likes");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    likes[index]++;
    counters[index].innerText = likes[index] + " Me gusta(s)";
  });
});