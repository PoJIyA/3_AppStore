function heroButton() {
    const feature = document.getElementById("feature");
    feature.scrollIntoView();
  }

  function bannerButton() {
    const smbanner = document.getElementById("sm-banner");
    smbanner.scrollIntoView();
  }

  function upButton() {
    const up = document.getElementById("header");
    up.scrollIntoView();
  }

// NEW Массив продуктов
const products = [
  { name: "iPhone 16", price: 100, brand: "Apple", img: "images/iphone/iPhone 16/iPhone 16 - White - Portrait.png", rate: 5 },
  { name: "iPhone 16 Plus", price: 200, brand: "Apple", img: "images/iphone/iPhone 16 Plus/iPhone 16 Plus - Teal - Portrait.png", rate: 4 },
  { name: "iPhone 16 Pro Max", price: 300, brand: "Apple", img: "images/iphone/iPhone 16 Pro Max/iPhone 16 Pro Max - Natural Titanium - Portrait.png", rate: 1 },
  { name: "Apple TV 4K", price: 400, brand: "Apple", img: "images/iTV/Apple TV - 4K.png", rate: 3 },
  { name: "Apple Watch Aluminium 42mm", price: 50, brand: "Apple", img: "images/iWatch/Aluminum/Apple Watch S10 - 42mm - Aluminum Rose Gold + Sport Band Light Blush.png", rate: 5 },
  { name: "Apple Watch Aluminium 46mm", price: 60, brand: "Apple", img: "images/iWatch/Aluminum/Apple Watch S10 - 46mm - Aluminum Jet Black + Sport Loop Ink.png", rate: 2 },
  { name: "Apple Watch Titanium 42mm", price: 70, brand: "Apple", img: "images/iWatch/Titanium/Apple Watch S10 - 42mm - Titanium Natural + Magnetic Link Dark Taupe.png", rate: 4 },
  { name: "Apple Watch Titanium 46mm", price: 80, brand: "Apple", img: "images/iWatch/Titanium/Apple Watch S10 - 46mm - Titanium Slate + Milanese Loop Titanium Slate.png", rate: 5 },
];

document.addEventListener("DOMContentLoaded", function() {
  addProducts();
  initializeCart();
});

// NEW Функция для добавления карточек продуктов
const addProducts = function() {
  const productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = '';

  products.forEach((product, index) => {
      const productCard = document.createElement('div');
      productCard.classList.add('pro');
      productCard.id = `product-${index}`;

      const imgContainer = document.createElement('div');
      imgContainer.classList.add('img_container');
      const img = document.createElement('img');
      img.src = product.img;
      img.alt = "Product Image";
      imgContainer.appendChild(img);

      const imgFooter = document.createElement('div');
      imgFooter.classList.add('img_footer');

      const des = document.createElement('div');
      des.classList.add('des');

      const brand = document.createElement('span');
      brand.textContent = product.brand;
      des.appendChild(brand);

      const productName = document.createElement('h5');
      productName.textContent = product.name;
      productName.classList.add('product--name');
      des.appendChild(productName);

      const rateContainer = document.createElement('div');
      rateContainer.classList.add('star');
      for (let i = 0; i < product.rate; i++) {
          const activeStar = document.createElement('i');
          activeStar.classList.add('fas', 'fa-star');
          rateContainer.appendChild(activeStar);
      }
      for (let j = 0; j < 5 - product.rate; j++) {
          const inactiveStar = document.createElement('i');
          inactiveStar.classList.add('far', 'fa-star');
          rateContainer.appendChild(inactiveStar);
      }
      des.appendChild(rateContainer);

      const price = document.createElement('h4');
      price.textContent = `${product.price}€`;
      price.classList.add('product--price');
      des.appendChild(price);

      imgFooter.appendChild(des);

      const iconContainer = document.createElement('div');
      iconContainer.classList.add('icon', 'product--buy');
      iconContainer.dataset.productIndex = index;

      const cartIcon = document.createElement('i');
      cartIcon.classList.add('fa-solid', 'fa-cart-shopping');
      iconContainer.appendChild(cartIcon);
      imgFooter.appendChild(iconContainer);

      productCard.appendChild(imgContainer);
      productCard.appendChild(imgFooter);
      productContainer.appendChild(productCard);
  });
};

// NEW sorting Fuction 
function sortProducts(criteria) {
  let sortedProducts = [
    { name: "iPhone 16", price: 100, brand: "Apple", img: "images/iphone/iPhone 16/iPhone 16 - White - Portrait.png", rate: 5 },
    { name: "iPhone 16 Plus", price: 200, brand: "Apple", img: "images/iphone/iPhone 16 Plus/iPhone 16 Plus - Teal - Portrait.png", rate: 4 },
    { name: "iPhone 16 Pro Max", price: 300, brand: "Apple", img: "images/iphone/iPhone 16 Pro Max/iPhone 16 Pro Max - Natural Titanium - Portrait.png", rate: 1 },
    { name: "Apple TV 4K", price: 400, brand: "Apple", img: "images/iTV/Apple TV - 4K.png", rate: 3 },
    { name: "Apple Watch Aluminium 42mm", price: 50, brand: "Apple", img: "images/iWatch/Aluminum/Apple Watch S10 - 42mm - Aluminum Rose Gold + Sport Band Light Blush.png", rate: 5 },
    { name: "Apple Watch Aluminium 46mm", price: 60, brand: "Apple", img: "images/iWatch/Aluminum/Apple Watch S10 - 46mm - Aluminum Jet Black + Sport Loop Ink.png", rate: 2 },
    { name: "Apple Watch Titanium 42mm", price: 70, brand: "Apple", img: "images/iWatch/Titanium/Apple Watch S10 - 42mm - Titanium Natural + Magnetic Link Dark Taupe.png", rate: 4 },
    { name: "Apple Watch Titanium 46mm", price: 80, brand: "Apple", img: "images/iWatch/Titanium/Apple Watch S10 - 46mm - Titanium Slate + Milanese Loop Titanium Slate.png", rate: 5 },
  ];; // Copy of products array to sort

  if (criteria === "nameAZ") {
      products.sort((a,b) => a.name.localeCompare(b.name));
  } else if (criteria === "nameZA") {
      products.sort((a,b) => b.name.localeCompare(a.name));
  } else if (criteria === "priceUp") {
      products.sort((a,b) => a.price - b.price);
  } else if (criteria === "priceDown") {
      products.sort((a,b) => b.price - a.price);
  } else if (criteria === "ratingUp") {
      products.sort((a,b) => a.rate - b.rate);
  } else if (criteria === "ratingDown") {
      products.sort((a,b) => b.rate - a.rate);
  }

  const productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = '';

  addProducts(sortedProducts); // Render sorted products
}



// Event listener for dropdown change
document.getElementById("sortOptions").addEventListener("change", (event) => {
  sortProducts(event.target.value);
});

// Функция для инициализации корзины
function initializeCart() {
  const modal = document.getElementById("modalCart");
  const cartLink = document.getElementById("cartLink");
  const closeBtn = document.querySelector(".modal-cart-close");
  const cartItems = [];
  const cartDisplay = document.querySelector(".modal-cart-content p");

  cartLink.onclick = function() {
      modal.style.display = "block";
      modalOverlay.style.display = "block";
      setTimeout(() => {
          modal.classList.add("show");
          modalOverlay.classList.add("show");
      }, 10);
      updateCartDisplay();
  };

  closeBtn.onclick = function () {
    modal.classList.remove("show");              
    modalOverlay.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";              
      modalOverlay.style.display = "none";
    }, 300);
};

window.onclick = function (event) {
    if (event.target == modalOverlay) {                 // Проверяет, если клик был вне содержимого окна
      modal.classList.remove("show");
      modalOverlay.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
      }, 300);
    }
};

  document.getElementById('productContainer').addEventListener("click", function(event) {
      const button = event.target.closest('.product--buy');
      if (button) {
          const productIndex = button.dataset.productIndex;
          const product = products[productIndex];
          cartItems.push({ name: product.name, price: `${product.price}€` });
          displayConfirmation(product.name);
          updateCartDisplay();
      }
  });

  function updateCartDisplay() {
      if (cartItems.length === 0) {
          cartDisplay.textContent = "Your cart is empty.";
      } else {
          cartDisplay.innerHTML =
              "<ul>" +
              cartItems.map((item) => `<li>${item.name} - ${item.price}</li>`).join("") +
              "</ul>";
      }
  }

  function displayConfirmation(productName) {
      const confirmation = document.createElement("div");
      confirmation.className = "confirmation-message";
      confirmation.textContent = `${productName} has been added to the cart.`;
      document.body.appendChild(confirmation);

      setTimeout(() => {
          confirmation.remove();
      }, 3000);
  }
}
