let menuContent = document.querySelector(".menu__content");
let vegToggle = false;
let lastType;
document.querySelector("#starter").addEventListener("click", drawMenu);
document.querySelector("#main").addEventListener("click", drawMenu);
document.querySelector("#desert").addEventListener("click", drawMenu);
document.querySelector("#veg").addEventListener("click", toogleVeg);

function toogleVeg(e) {
  vegToggle = !vegToggle;
  drawMenu(e);
}

function drawMenu(e) {
  let buttonClicked = e.target.id;
  menuContent.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let newDishType = data[i].split(" ")[1];
    let newDishVeg = data[i].split(" ")[2];
    if (buttonClicked != "veg") {
      if (newDishType != buttonClicked) continue;
    } else {
      if (newDishType != lastType) continue;
    }
    if (vegToggle) {
      if (newDishVeg != vegToggle) continue;
    }
    menuContent.appendChild(createDish(i));
  }
  if (buttonClicked != "veg") lastType = buttonClicked;
}

let data = [
  "pasta main 1",
  "burger main 0",
  "chicken main 0",
  "fish main 0",
  "pizza main 1",
  "dumplings starter 0",
  "salad starer 1",
  "corn starter 1",
  "pancake desert 1",
  "pudding desert 0",
  "beef main 0",
  "bread starter 1",
  "crepe desert 0",
  "cupcake desert 0",
  "doughnut desert 1",
  "lamb main 0",
  "shrimp main 0",
];

for (let i = 0; i < data.length; i++) {
  menuContent.appendChild(createDish(i));
}

function createDish(i) {
  let splitDataString = data[i].split(" ");
  let name = splitDataString[0];
  let imgSrc = `img/cards/${splitDataString[0]}.jpg`;
  let newDishMarkup = `
    <div class="card menu__card">
        <img src="${imgSrc}" class="card-img-top" alt="image" />
        <div class="card-body">
            <h5 class="card-title menu__title">${name}</h5>
            <p class="card-text">${generateDesc(name)}</p>
        </div>
    </div>
    `;
  let newDish = document.createElement("div");
  newDish.innerHTML = newDishMarkup;
  return newDish;
}

function generateDesc(name) {
  let descriptions = [
    `This meal is one of our specialties. It is very tasty and nutritious. It is sure to leave you with a full belly and a happy face.`,
    `The ${name} dish is one of our most popular dishes. And with good reason. The combination of high-quality ingredients and masterful technique is sure to please.`,
    `The ${name} dish is one of our award nominated dishes. Nominated by our lovely customers for one of their favorite dishes.`,
    `A modern classic. The ${name} dish is well known, even in the world perhaps. This is no surprise considering its world class quality.`,
  ];
  return descriptions[getRandomInt(0, 3)];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
