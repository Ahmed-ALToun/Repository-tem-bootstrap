let switcherlis = document.querySelectorAll(".switcher li");
let imgs = document.querySelectorAll(".switchers img");


switcherlis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});
function removeActive() {
  switcherlis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
    this.classList.add("rounded-pill")
  })
};
function manageImgs() {
  imgs.forEach((img) => {
    img.parentNode.parentNode.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.parentNode.parentNode.style.display = "block";
  });
}
//footer

let navkr = document.querySelectorAll(".navkr li a");
console.log(navkr);
navkr.forEach((a) => {
  a.addEventListener("click", removeActiv);
});
function removeActiv() {
  navkr.forEach((a) => {
    a.classList.remove("active");
    this.classList.add("active");

  })
};


