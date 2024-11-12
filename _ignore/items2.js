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
    var url = new URL(window.location.href);
    const sortBy = url.searchParams.get("sortBy");
    if (sortBy) {
      document.getElementById('sort-options').value = sortBy;
      if (sortBy == "name") {
        sortByName()
    } else if (sortBy == "price") {
      sortByPrice()
    }
  } else {
      sortByName()
  }
  addProducts();
});

let activeStar = document.getElementById('onStar');

let inactiveStar = document.getElementById('offStar');


const addProducts = function () {
    let x = 0;
    const productContainer = document.getElementById('productContainer');
    const template = document.getElementById('productTemplate');
    for (let product of products) {
        let clone = template.cloneNode(true);
        const productName = clone.querySelector('[data-name="productName"]');
        const price = clone.querySelector('[data-name="price"]');
        const img = clone.querySelector('[data-name="img"]');
        const brand = clone.querySelector('[data-name="brand"]');
        const rate = clone.querySelector('[data-name="rate"]');
        img.setAttribute("src", product.img);
        brand.textContent = product.brand;
        productName.textContent = product.name;

        for (let i = 1; i <= product.rate; i++) {
            rate.appendChild(activeStar.cloneNode(true));
          };

        for (let j = 0; j < 5 - product.rate; j++) {
            rate.appendChild(inactiveStar.cloneNode(true));
        }

        price.textContent = product.price + "€";
        clone.id = "element" + x;
        productContainer.appendChild(clone);
        x++;
    };
    template.remove();
}

function setSortByName () {
  console.log("1");
  window.location.href = 'http://127.0.0.1:5501/new2.html?sortBy=name';
};

function setSortByPrice () {
  console.log("2");
  window.location.href = 'http://127.0.0.1:5501/new2.html?sortBy=price';
};

function sortByName() {
    products.sort(function(a, b){
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
}

function sortByPrice() {
    products.sort(function(a, b){return a.price - b.price});
}

document.getElementById('sort-options').addEventListener('change', (event) => {
  if (event.target.value == "name") {
    setSortByName();
  } else {setSortByPrice()};
});



