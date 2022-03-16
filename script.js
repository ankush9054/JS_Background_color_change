const button = document.querySelector(".btn");
const colors = [
  "#330055",
  "#550066",
  "#550099 ",
  "#3300aa",
  "#9900aa",
  "#aa00cc ",
  "#6600aa",
];

button.addEventListener("click", function () {
  var colorsIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[colorsIndex];
  console.log(colorsIndex);
});
