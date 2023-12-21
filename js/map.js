function init() {
  let map = new ymaps.Map("map", {
    center: [43.25534253468435, 76.9368584533904],
    zoom: 16,
  });
}

ymaps.ready(init);

const menu = document.querySelector("#menu");
const btn = document.querySelector("#btn_burger");
const btnImg = document.querySelector("#burgerImg");

menu.addEventListener("click", function () {
  console.log("asdfa");

  if (menu.classList.toggle("open")) {
    btnImg.src = "/photos/close.png";
  } else {
    btnImg.src = "/photos/open.png";
  }
});
