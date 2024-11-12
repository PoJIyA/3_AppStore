const products = [
    {name:"iPhone 16", price: 100, brand: "Apple", img: "images/iphone/iPhone 16/iPhone 16 - White - Portrait.png",},
    {name:"iPhone 16 Plus", price: 200, brand: "Apple",img:"images/iphone/iPhone 16 Plus/iPhone 16 Plus - Teal - Portrait.png"},
    {name:"iPad 16 Pro Max", price: 300, brand: "Apple",img:"images/iphone/iPhone 16 Pro Max/iPhone 16 Pro Max - Natural Titanium - Portrait.png"},
    {name:"Apple TV 4K", price: 400, brand: "Apple",img:"images/iTV/Apple TV - 4K.png"},
    {name:"Apple Watch Aluminium 42mm", price: 50, brand: "Apple",img:"images/iWatch/Aluminum/Apple Watch S10 - 42mm - Aluminum Rose Gold + Sport Band Light Blush.png"},
    {name:"Apple Watch Aluminium 46mm", price: 60, brand: "Apple",img:"images/iWatch/Aluminum/Apple Watch S10 - 46mm - Aluminum Jet Black + Sport Loop Ink.png"},
    {name:"Apple Watch Titanium 42mm", price: 70, brand: "Apple",img:"images/iWatch/Titanium/Apple Watch S10 - 42mm - Titanium Natural + Magnetic Link Dark Taupe.png"},
    {name:"Apple Watch Titanium 46mm", price: 80, brand: "Apple",img:"images/iWatch/Titanium/Apple Watch S10 - 46mm - Titanium Slate + Milanese Loop Titanium Slate.png"},
];

const productContainer = document.getElementById('productContainer');

let i = 0;

for (let product of products) {
    const template = document.getElementById('productTemplate');

    const clone = template.cloneNode(true);

    const productName = document.getElementById('productName');
    const price = document.getElementById('price');
    const img = document.getElementById('img');
    const brand = document.getElementById('brand');
    img.setAttribute ("src",product.img);
    brand.textContent = product.brand;
    productName.textContent = product.name;
    price.textContent = product.price + "€";
    clone.id = "element" + i;
    productContainer.appendChild(clone);
    i++;
};

const clone1 = document.getElementById('element0');

clone1.remove();