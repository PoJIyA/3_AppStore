const products = [
    { name: "iPhone 16", price: 100, brand: "Apple", img: "images/iphone/iPhone 16/iPhone 16 - White - Portrait.png", rate: 5 },
    { name: "iPhone 16 Plus", price: 200, brand: "Apple", img: "images/iphone/iPhone 16 Plus/iPhone 16 Plus - Teal - Portrait.png", rate: 4 },
    { name: "iPad 16 Pro Max", price: 300, brand: "Apple", img: "images/iphone/iPhone 16 Pro Max/iPhone 16 Pro Max - Natural Titanium - Portrait.png", rate: 1 },
    { name: "Apple TV 4K", price: 400, brand: "Apple", img: "images/iTV/Apple TV - 4K.png", rate: 3 },
    { name: "Apple Watch Aluminium 42mm", price: 50, brand: "Apple", img: "images/iWatch/Aluminum/Apple Watch S10 - 42mm - Aluminum Rose Gold + Sport Band Light Blush.png", rate: 5 },
    { name: "Apple Watch Aluminium 46mm", price: 60, brand: "Apple", img: "images/iWatch/Aluminum/Apple Watch S10 - 46mm - Aluminum Jet Black + Sport Loop Ink.png", rate: 2 },
    { name: "Apple Watch Titanium 42mm", price: 70, brand: "Apple", img: "images/iWatch/Titanium/Apple Watch S10 - 42mm - Titanium Natural + Magnetic Link Dark Taupe.png", rate: 4 },
    { name: "Apple Watch Titanium 46mm", price: 80, brand: "Apple", img: "images/iWatch/Titanium/Apple Watch S10 - 46mm - Titanium Slate + Milanese Loop Titanium Slate.png", rate: 5 },
  ];
  
document.addEventListener("DOMContentLoaded", function(event){
    addProducts();
});

let activeStar = document.getElementById('onStar');

let inactiveStar = document.getElementById('offStar');



// Function to dynamically create and add product cards
const addProducts = function () {
  const productContainer = document.getElementById('productContainer'); // Main container

  productContainer.innerHTML = '';

  // Loop through each product and create its card
  products.forEach((product, index) => {
      // Main product card container
      const productCard = document.createElement('div');
      productCard.classList.add('pro');
      productCard.id = "element" + index;

      // Image container
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('img_container');
      const img = document.createElement('img');
      img.src = product.img;
      img.alt = "Product Image";
      imgContainer.appendChild(img);

      // Footer container
      const imgFooter = document.createElement('div');
      imgFooter.classList.add('img_footer');

      // Description container
      const des = document.createElement('div');
      des.classList.add('des');

      // Brand name
      const brand = document.createElement('span');
      brand.textContent = product.brand;
      des.appendChild(brand);

      // Product name
      const productName = document.createElement('h5');
      productName.textContent = product.name;
      des.appendChild(productName);

      // Rating stars
      const rateContainer = document.createElement('div');
      rateContainer.classList.add('star');
      for (let i = 0; i < product.rate; i++) {
          const activeStar = document.createElement('i');
          activeStar.classList.add('fas', 'fa-star'); // Active star
          rateContainer.appendChild(activeStar);
      }
      for (let j = 0; j < 5 - product.rate; j++) {
          const inactiveStar = document.createElement('i');
          inactiveStar.classList.add('far', 'fa-star'); // Inactive star
          rateContainer.appendChild(inactiveStar);
      }
      des.appendChild(rateContainer);

      // Price
      const price = document.createElement('h4');
      price.textContent = product.price + "€";
      des.appendChild(price);

      // Add description to footer
      imgFooter.appendChild(des);

      // Cart icon
      const iconContainer = document.createElement('div');
      iconContainer.classList.add('icon');
      const cartLink = document.createElement('a');
      cartLink.href = "#";
      const cartIcon = document.createElement('i');
      cartIcon.classList.add('fa-solid', 'fa-cart-shopping');
      cartLink.appendChild(cartIcon);
      iconContainer.appendChild(cartLink);
      imgFooter.appendChild(iconContainer);

      // Append containers to main product card
      productCard.appendChild(imgContainer);
      productCard.appendChild(imgFooter);

      // Add completed card to the main container
      productContainer.appendChild(productCard);
  });
};

// Run the function to add products
document.addEventListener("DOMContentLoaded", () => {
  addProducts();
});


function byName() {
  products.sort(function(a, b){
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
//   const productContainer = document.getElementById('productContainer');
//   productContainer.innerHTML = '';
// addProducts();
}

function byPrice() {
  products.sort(function(a, b){return a.price - b.price});
//   const productContainer = document.getElementById('productContainer');
//   productContainer.innerHTML = '';
// addProducts();
}

function byRate() {
  products.sort(function(a, b){return b.rate - a.rate});
//   const productContainer = document.getElementById('productContainer');
//   productContainer.innerHTML = '';
// addProducts();
}

// Function to handle sorting
function sortProducts(criteria) {
  let sortedProducts = [
    { name: "iPhone 16", price: 100, brand: "Apple", img: "images/iphone/iPhone 16/iPhone 16 - White - Portrait.png", rate: 5 },
    { name: "iPhone 16 Plus", price: 200, brand: "Apple", img: "images/iphone/iPhone 16 Plus/iPhone 16 Plus - Teal - Portrait.png", rate: 4 },
    { name: "iPad 16 Pro Max", price: 300, brand: "Apple", img: "images/iphone/iPhone 16 Pro Max/iPhone 16 Pro Max - Natural Titanium - Portrait.png", rate: 1 },
    { name: "Apple TV 4K", price: 400, brand: "Apple", img: "images/iTV/Apple TV - 4K.png", rate: 3 },
    { name: "Apple Watch Aluminium 42mm", price: 50, brand: "Apple", img: "images/iWatch/Aluminum/Apple Watch S10 - 42mm - Aluminum Rose Gold + Sport Band Light Blush.png", rate: 5 },
    { name: "Apple Watch Aluminium 46mm", price: 60, brand: "Apple", img: "images/iWatch/Aluminum/Apple Watch S10 - 46mm - Aluminum Jet Black + Sport Loop Ink.png", rate: 2 },
    { name: "Apple Watch Titanium 42mm", price: 70, brand: "Apple", img: "images/iWatch/Titanium/Apple Watch S10 - 42mm - Titanium Natural + Magnetic Link Dark Taupe.png", rate: 4 },
    { name: "Apple Watch Titanium 46mm", price: 80, brand: "Apple", img: "images/iWatch/Titanium/Apple Watch S10 - 46mm - Titanium Slate + Milanese Loop Titanium Slate.png", rate: 5 },
  ];; // Copy of products array to sort

  if (criteria === "name") {
      byName();
  } else if (criteria === "price") {
      byPrice(); // Low to High
  } else if (criteria === "rating") {
      byRate(); // High to Low
  }
  const productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = '';

  addProducts(sortedProducts); // Render sorted products
}

// Event listener for dropdown change
document.getElementById("sortOptions").addEventListener("change", (event) => {
  sortProducts(event.target.value);
});

// Initial render of products
addProducts(products);

