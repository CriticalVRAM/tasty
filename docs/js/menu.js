let menuContent = document.querySelector(".menu__content");

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
  let newCard = document.createElement("div");
  newCard.innerHTML = newDishMarkup;
  return newCard;
}
