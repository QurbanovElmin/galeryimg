const box = document.querySelectorAll(".firstbook img");
const resim = document.querySelectorAll(".photofirst img");

resim.forEach((img) => {
  img.addEventListener("click", function (event) {
    box.forEach((boxImg) => {

      boxImg.src = event.target.src;
      boxImg.style.transition="5000ms"
    });
  });
});