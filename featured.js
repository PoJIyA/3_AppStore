// FEATURED Products


const featured = [
    { name: "iPhone 12 Mini", price: 100, brand: "Apple", img: "images/iphone/iPhone 12 Mini - White - Portrait.png", rate: 5 },
    { name: "iPhone 12 Pro Max", price: 200, brand: "Apple", img: "images/iphone/iPhone 12 Pro Max - Silver - Portrait.png", rate: 4 },
    { name: "iPad 13 Pro M4", price: 300, brand: "Apple", img: "images/ipad/iPad Pro 13 - M4 - Silver - Portrait.png", rate: 1 },
    { name: "Macbook Air 13", price: 400, brand: "Apple", img: "images/Macbook/MacBook Air 13 - 4th Gen - Midnight.png", rate: 3 },
    { name: "Macbook Pro 16", price: 50, brand: "Apple", img: "images/Macbook/MacBook Pro 16 - 4th Gen (2019).png", rate: 5 },
    { name: "iMac 24", price: 60, brand: "Apple", img: "images/iMac/iMac 24 - Silver.png", rate: 2 },
    { name: "Apple Watch Series 6 Silver", price: 70, brand: "Apple", img: "images/iWatch/Apple Watch Series 6 - 44mm - Silver.png", rate: 4 },
    { name: "Apple Watch Series 6 Gray", price: 80, brand: "Apple", img: "images/iWatch/Apple Watch Series 6 - 44mm - Space Gray.png", rate: 5 },
  ];
  
  document.addEventListener("DOMContentLoaded", function(){
    addFeatured();
    initializeCart();
  });
  
  const addFeatured = function () {
    const featuredContainer = document.getElementById('featuredContainer'); // Main container
  
    featuredContainer.innerHTML = '';
  
    // Loop through each product and create its card
    featured.forEach((feature, index) => {
        // Main product card container
        const productCard = document.createElement('div');
        productCard.classList.add('pro');
        productCard.id = `product-${index}`;
  
        // Image container
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img_container');
        const img = document.createElement('img');
        img.src = feature.img;
        img.alt = "Featured Image";
        imgContainer.appendChild(img);
  
        // Footer container
        const imgFooter = document.createElement('div');
        imgFooter.classList.add('img_footer');
  
        // Description container
        const des = document.createElement('div');
        des.classList.add('des');
  
        // Brand name
        const brand = document.createElement('span');
        brand.textContent = feature.brand;
        des.appendChild(brand);
  
        // Product name
        const productName = document.createElement('h5');
        productName.textContent = feature.name;
        productName.classList.add('product--name');
        des.appendChild(productName);
  
        // Rating stars
        const rateContainer = document.createElement('div');
        rateContainer.classList.add('star');
        for (let i = 0; i < feature.rate; i++) {
            const activeStar = document.createElement('i');
            activeStar.classList.add('fas', 'fa-star'); // Active star
            rateContainer.appendChild(activeStar);
        }
        for (let j = 0; j < 5 - feature.rate; j++) {
            const inactiveStar = document.createElement('i');
            inactiveStar.classList.add('far', 'fa-star'); // Inactive star
            rateContainer.appendChild(inactiveStar);
        }
        des.appendChild(rateContainer);
  
        // Price
        const price = document.createElement('h4');
        price.textContent = `${feature.price}€`;
        price.classList.add('product--price');
        des.appendChild(price);
  
        // Add description to footer
        imgFooter.appendChild(des);
  
        // Cart icon
        const iconContainer = document.createElement('div');
        iconContainer.classList.add('icon', 'product--buy');
        iconContainer.dataset.productIndex = index;

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('fa-solid', 'fa-cart-shopping');
        iconContainer.appendChild(cartIcon);
        imgFooter.appendChild(iconContainer);
  
        // Append containers to main product card
        productCard.appendChild(imgContainer);
        productCard.appendChild(imgFooter);
  
        // Add completed card to the main container
        featuredContainer.appendChild(productCard);
    });
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    addFeatured();
  });
  
  // FEATURED sorting Fuction 
  function sortFeatured(criteria) {
    let sortedFeatured = [
      { name: "iPhone 12 Mini", price: 100, brand: "Apple", img: "images/iphone/iPhone 12 Mini - White - Portrait.png", rate: 5 },
      { name: "iPhone 12 Pro Max", price: 200, brand: "Apple", img: "images/iphone/iPhone 12 Pro Max - Silver - Portrait.png", rate: 4 },
      { name: "iPad 13 Pro M4", price: 300, brand: "Apple", img: "images/ipad/iPad Pro 13 - M4 - Silver - Portrait.png", rate: 1 },
      { name: "Macbook Air 13", price: 400, brand: "Apple", img: "images/Macbook/MacBook Air 13 - 4th Gen - Midnight.png", rate: 3 },
      { name: "Macbook Pro 16", price: 50, brand: "Apple", img: "images/Macbook/MacBook Pro 16 - 4th Gen (2019).png", rate: 5 },
      { name: "iMac 24", price: 60, brand: "Apple", img: "images/iMac/iMac 24 - Silver.png", rate: 2 },
      { name: "Apple Watch Series 6 Silver", price: 70, brand: "Apple", img: "images/iWatch/Apple Watch Series 6 - 44mm - Silver.png", rate: 4 },
      { name: "Apple Watch Series 6 Gray", price: 80, brand: "Apple", img: "images/iWatch/Apple Watch Series 6 - 44mm - Space Gray.png", rate: 5 },
    ];; // Copy of products array to sort
  
    if (criteria === "nameAZ") {
        featured.sort((a,b) => a.name.localeCompare(b.name));
    } else if (criteria === "nameZA") {
        featured.sort((a,b) => b.name.localeCompare(a.name));
    } else if (criteria === "priceUp") {
        featured.sort((a,b) => a.price - b.price);
    } else if (criteria === "priceDown") {
        featured.sort((a,b) => b.price - a.price);
    } else if (criteria === "ratingUp") {
        featured.sort((a,b) => a.rate - b.rate);
    } else if (criteria === "ratingDown") {
        featured.sort((a,b) => b.rate - a.rate);
    }
  
    const featuredContainer = document.getElementById('featuredContainer');
    featuredContainer.innerHTML = '';
  
    addFeatured(sortedFeatured); // Render sorted products
  }
  
  
  // Event listener for dropdown change
  document.getElementById("sortFeatured").addEventListener("change", (event) => {
    sortFeatured(event.target.value);
  });
  
  // Initial render of products
  addFeatured(featured);

