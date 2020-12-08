let menuContent = document.querySelector(".menu__content");
let tempMarkup = `
<div class="card menu__card" style="width: 18rem">
<img src="img/slick1.jpg" class="card-img-top" alt="image" />
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </p>
</div>
</div>
`;
for (let i = 0; i < 10; i++) {
  let temp = document.createElement("div");
  temp.classList.add("col");
  temp.innerHTML = tempMarkup;
  menuContent.appendChild(temp);
}
