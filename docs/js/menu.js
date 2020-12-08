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
  "pizza main 0",
  "dumplings starter 0",
  "salad starer 1",
  "corn starter 1",
  "pancake desert 1",
  "pudding desert 0",
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
        </div>
    </div>
    `;
  let newDish = document.createElement("div");
  newDish.innerHTML = newDishMarkup;
  return newDish;
}
