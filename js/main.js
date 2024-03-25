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
    <div class="top-btns">
        <p class="new">Новинка</p>
        <div class="child-btn">
            <img class="heart" src="./images/heart.svg">
            <p class="scales">
                <svg width="25" height="25" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13152 1.30997C9.13152 1.89218 9.31813 2.28032 9.75356 2.60377L10.189 2.79784C8.50949 2.79784 7.0166 3.0566 5.71033 3.76819C3.96863 4.60916 3.96863 3.83288 2.91117 3.83288C2.35133 3.83288 1.7915 4.93261 2.72456 5.45013C2.97337 5.57951 3.471 5.77358 3.78202 5.77358C2.91117 7.52022 2.04032 9.33154 1.16947 11.0782C0.982856 11.0782 0.734042 11.0135 0.609635 11.1429C0.236413 11.4663 0.920652 12.372 1.10726 12.6307L1.7915 13.1482C3.34659 14.1186 6.20795 14.1833 7.57643 12.8248C7.94965 12.5013 8.44728 11.9191 8.44728 11.2722C8.44728 11.0135 7.94965 11.0782 7.82525 11.0782C7.76304 10.9488 7.57643 10.5606 7.51423 10.4313C6.76779 9.00809 5.83473 7.39084 5.2749 5.96765C5.15049 5.70889 5.2127 5.83827 5.71033 5.70889C6.82999 5.45013 8.07406 4.73854 9.13152 4.73854V15.2183C8.38508 15.2183 7.82525 15.8652 7.82525 16.6415H6.27016C5.77253 16.6415 5.15049 17.2237 5.15049 18H10.5H15.8495C15.8495 17.2237 15.2275 16.6415 14.7298 16.6415H13.1748C13.1748 15.8652 12.6149 15.2183 11.8685 15.2183V4.73854C12.9259 4.73854 14.17 5.45013 15.2897 5.70889C15.7873 5.83827 15.8495 5.70889 15.7251 5.96765C15.1031 7.39084 14.2322 9.00809 13.4858 10.4313C13.4236 10.5606 13.237 10.9488 13.1748 11.0782C13.0503 11.0782 12.4905 11.0135 12.4905 11.2722C12.4905 11.9191 13.0503 12.5013 13.4236 12.8248C14.7298 14.1833 17.6534 14.1186 19.2085 13.1482L19.8927 12.6307C20.0793 12.372 20.7636 11.4663 20.3904 11.1429C20.266 11.0135 20.0171 11.0782 19.8305 11.0782C18.9597 9.33154 18.0888 7.52022 17.218 5.77358C17.529 5.77358 18.0266 5.57951 18.2132 5.45013C19.2085 4.93261 18.5865 3.83288 18.0266 3.83288C17.0314 3.83288 17.0314 4.60916 15.2897 3.76819C13.9834 3.0566 12.4905 2.79784 10.811 2.79784L11.1842 2.60377C11.6819 2.28032 11.8685 1.89218 11.8685 1.30997C11.8685 -0.436658 9.13152 -0.436658 9.13152 1.30997ZM16.5337 6.03234L15.2897 8.55526L14.0456 11.0782H16.5337H18.9597L17.7778 8.55526L16.5337 6.03234ZM4.46626 6.03234L5.71033 8.55526L6.9544 11.0782H4.46626H1.97811L3.22218 8.55526L4.46626 6.03234Z" fill="#1E293B"/>
                </svg>
            </p>
            
            
        </div>
    </div>
    
        <div class="img">
            <img src="${product.image}"/>
        </div>
        <h3 title="${product.title}">${product.title}</h3>
        
        </div>
        <div class="price-rate">
        <p class="price">${product.price} $</p>
        <p class="rating">⭐ ${product.rating.rate}</p>
        </div>
        <p class="description" title="${product.description}">${product.description} </p>
        <p class="category"><b>Category:</b>  ${product.category} </p>
        <div class="card-btns">
        <button class="sale">Купить сейчас</button>
        <button class="btn-cart">
        <svg class="cart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" transform: ;msFilter:;"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
        </button>
        </div>
        `;

    fragment.appendChild(card);
  });
  cards.appendChild(fragment);
}

/////////////// F O R M /////////////

const form = document.querySelector(".form");
const search = document.querySelector("#search");
const btnSubmit = document.querySelector(".btn-submit");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnSubmit.addEventListener("click", () => {
    search.value = "";
  });
});

///////////// B A C K T O P ///////////

const backTop = document.querySelector(".backtop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

////////////// B U R G E R  ////////////////

const btnBurger = document.querySelector(".btn-burger");
const items = document.querySelector(".items");

btnBurger.addEventListener("click", () => {
  items.classList.toggle("show");
});
