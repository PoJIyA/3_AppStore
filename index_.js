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
  { name: "iPhone 16", price: 100, year: "2024", img: "images/iphone/iPhone 16/iPhone 16 - White - Portrait.png", rate: 5 },
  { name: "iPhone 16 Plus", price: 200, year: "2024", img: "images/iphone/iPhone 16 Plus/iPhone 16 Plus - Teal - Portrait.png", rate: 4 },
  { name: "iPhone 16 Pro Max", price: 300, year: "2024", img: "images/iphone/iPhone 16 Pro Max/iPhone 16 Pro Max - Natural Titanium - Portrait.png", rate: 1 },
  { name: "Apple TV 4K", price: 400, year: "2022", img: "images/iTV/Apple TV - 4K.png", rate: 3 },
  { name: "Apple Watch Aluminium 42mm", price: 50, year: "2021", img: "images/iWatch/Aluminum/Apple Watch S10 - 42mm - Aluminum Rose Gold + Sport Band Light Blush.png", rate: 5 },
  { name: "Apple Watch Aluminium 46mm", price: 60, year: "2021", img: "images/iWatch/Aluminum/Apple Watch S10 - 46mm - Aluminum Jet Black + Sport Loop Ink.png", rate: 2 },
  { name: "Apple Watch Titanium 42mm", price: 70, year: "2023", img: "images/iWatch/Titanium/Apple Watch S10 - 42mm - Titanium Natural + Magnetic Link Dark Taupe.png", rate: 4 },
  { name: "Apple Watch Titanium 46mm", price: 80, year: "2023", img: "images/iWatch/Titanium/Apple Watch S10 - 46mm - Titanium Slate + Milanese Loop Titanium Slate.png", rate: 5 },
  { name: "iPhone 12 Mini", price: 100, year: "2020", img: "images/iphone/iPhone 12 Mini - White - Portrait.png", rate: 5 },
    { name: "iPhone 12 Pro Max", price: 200, year: "2020", img: "images/iphone/iPhone 12 Pro Max - Silver - Portrait.png", rate: 4 },
    { name: "iPad 13 Pro M4", price: 300, year: "2024", img: "images/ipad/iPad Pro 13 - M4 - Silver - Portrait.png", rate: 1 },
    { name: "Macbook Air 13", price: 400, year: "2024", img: "images/Macbook/MacBook Air 13 - 4th Gen - Midnight.png", rate: 3 },
    { name: "Macbook Pro 16", price: 50, year: "2021", img: "images/Macbook/MacBook Pro 16 - 4th Gen (2019).png", rate: 5 },
    { name: "iMac 24", price: 60, year: "2021", img: "images/iMac/iMac 24 - Silver.png", rate: 2 },
    { name: "Apple Watch Series 6 Silver", price: 70, year: "2021", img: "images/iWatch/Apple Watch Series 6 - 44mm - Silver.png", rate: 4 },
    { name: "Apple Watch Series 6 Gray", price: 80, year: "2021", img: "images/iWatch/Apple Watch Series 6 - 44mm - Space Gray.png", rate: 5 },
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

      const year = document.createElement('span');
      year.textContent = product.year;
      des.appendChild(year);

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

products.sort((a,b) => b.year - a.year);

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
    { name: "iPhone 12 Mini", price: 100, brand: "Apple", img: "images/iphone/iPhone 12 Mini - White - Portrait.png", rate: 5 },
    { name: "iPhone 12 Pro Max", price: 200, brand: "Apple", img: "images/iphone/iPhone 12 Pro Max - Silver - Portrait.png", rate: 4 },
    { name: "iPad 13 Pro M4", price: 300, brand: "Apple", img: "images/ipad/iPad Pro 13 - M4 - Silver - Portrait.png", rate: 1 },
    { name: "Macbook Air 13", price: 400, brand: "Apple", img: "images/Macbook/MacBook Air 13 - 4th Gen - Midnight.png", rate: 3 },
    { name: "Macbook Pro 16", price: 50, brand: "Apple", img: "images/Macbook/MacBook Pro 16 - 4th Gen (2019).png", rate: 5 },
    { name: "iMac 24", price: 60, brand: "Apple", img: "images/iMac/iMac 24 - Silver.png", rate: 2 },
    { name: "Apple Watch Series 6 Silver", price: 70, brand: "Apple", img: "images/iWatch/Apple Watch Series 6 - 44mm - Silver.png", rate: 4 },
    { name: "Apple Watch Series 6 Gray", price: 80, brand: "Apple", img: "images/iWatch/Apple Watch Series 6 - 44mm - Space Gray.png", rate: 5 },
  ];; // Copy of products array to sort

  if (criteria === "yearDown") { 
      products.sort((a,b) => b.year - a.year);
  } else if (criteria === "yearUp") {
      products.sort((a,b) => a.year - b.year);
  } else if (criteria === "nameAZ") {
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
  // const confirmLink = document.querySelector(".product--buy");
  const closeBtn = document.querySelector(".modal-cart-close");
  const cartItems = [];
  const cartDisplay = document.querySelector(".modal-cart-content p");
  const confirm = document.querySelector(".confirmation-message");

  cartLink.onclick = function() {
      modal.style.display = "block";
      modalOverlay.style.display = "block";
      setTimeout(() => {
          modal.classList.add("show");
          modalOverlay.classList.add("show");
      }, 10);
      updateCartDisplay();
      updateCartCount();
  };

//   confirmLink.onclick = function() {
//     confirm.style.display = "block";
//     modalOverlay.style.display = "block";
//     setTimeout(() => {
//         confirm.classList.add("show");
//         modalOverlay.classList.add("show");
//     }, 3000);
//     updateCartDisplay();
// };

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
          updateCartCount();
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
      }, 2000);
  }

// Функция для обновления счетчика корзины
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cartItems.length;

  // Показываем или скрываем счетчик в зависимости от количества товаров
  if (cartItems.length > 0) {
    cartCountElement.style.display = 'inline-block';
  } else {
    cartCountElement.style.display = 'none';
  }
}



  // Search

  document.getElementById('searchBar').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    
    // Filter the products based on the query
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    
    // Call addProducts with the filtered products
    addProducts(filteredProducts);
  });
  
  // Modified addProducts function to accept a parameter
  const addProducts = function(filteredProducts = products) {
    const productContainer = document.getElementById('productContainer');
    if (!productContainer) {
      console.error("productContainer not found in the DOM.");
      return;
    }
  
    productContainer.innerHTML = ''; // Clear the container first
  
    filteredProducts.forEach((product, index) => {
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
  
      const year = document.createElement('span');
      year.textContent = product.year;
      des.appendChild(year);
  
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
  
  

}
