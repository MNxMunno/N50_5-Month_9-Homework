const cards = document.querySelector(".cards");
const loading = document.querySelector(".loads");
const api_url = "https://fakestoreapi.com/products";

async function getProduct(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err))
    .finally(() => {
      loading.style.display = "none";
    });
}

getProduct(api_url);

function createCard(data) {
  let fragment = document.createDocumentFragment();
  data.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${product.image}"/>
        `;
    fragment.appendChild(card);
  });
  cards.appendChild(fragment);
}
