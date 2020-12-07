// JS for index.html. Generates the images for the jQuery slick plugin so I don't have to write them my self. Inits slick.
let numberOfImages = 4;
let slick = document.querySelector(".main__slick");
for (let i = 0; i < numberOfImages; i++) {
  let slickImage = document.createElement("img");
  slickImage.setAttribute("src", `img/slick${i + 1}.jpg`);
  slickImage.classList.add("main__slick-img");
  slick.appendChild(slickImage);
}

$(".main__slick").slick({
  arrows: false,
});
