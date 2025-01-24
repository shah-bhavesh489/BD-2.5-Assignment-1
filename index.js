let express = require('express');
let cors = require('cors');
let port = 3000;
let app = express();
app.use(cors());

app.use(express.static('static'));

let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];


// function to sort the products by popularity
function productsByPopularityDesc(product1, product2){
  return product2.rating - product1.rating;
}

// Endpoint 1: Get the products sorted by popularity
app.get("/products/sort/popularity", (req, res) => {
  let productsCopy = products.slice();
  let sortedProducts = productsCopy.sort(productsByPopularityDesc);
  res.json( {"product": sortedProducts} );
})



// function to sort products by price high to low
function productsByHighToLowPrice(product1, product2){
  return product2.price - product1.price;
}

// Endpoint 2: Get the products sorted by “high-to-low” price
app.get("/products/sort/price-high-to-low", (req, res) => {
  let productsCopy = products.slice();
  let sortedProducts = productsCopy.sort(productsByHighToLowPrice);
  res.json( {"product": sortedProducts} );
})


// function to sort products by price low to high
function productsByLowToHighPrice(product1, product2){
  return product1.price - product2.price;
}

// Endpoint 3: Get the products sorted by “low-to-high” price
app.get("/products/sort/price-low-to-high", (req, res) => {
  let productsCopy = products.slice();
  let sortedProducts = productsCopy.sort(productsByLowToHighPrice);
  res.json( {"product": sortedProducts} );
})



// function to filter the products based on RAM
function productsByRam(product, ram){
  return product.ram === ram;
}

// Endpoint 4: Filter the products based on the “RAM” option.
app.get("/products/filter/ram", (req, res) => {
  let ram = parseFloat(req.query.ram);
  let sortedProducts = products.filter(product => productsByRam(product, ram));
  res.json( {"product": sortedProducts} );
})



// function to filter the products based on ROM
function productsByRom(rom, product){
  return product.rom === rom;
}

// Endpoint 5: Filter the products based on the “ROM” option.
app.get("/products/filter/rom", (req, res) => {
  let rom = parseFloat(req.query.rom);
  let sortedProducts = products.filter(product => productsByRom(rom, product));
  res.json( {"product": sortedProducts });
})



// function to filter products based on BRAND
function productsByBrand(brand, product){
  return product.brand.toLowerCase() === brand.toLowerCase();
}

//Endpoint 6: Filter the products based on the “Brand” option.
app.get("/products/filter/brand", (req, res) => {
  let brand = req.query.brand;
  let sortedProducts = products.filter(product => productsByBrand(brand, product));
  res.json( {"products": sortedProducts});
})



// function to filter product based on OS.
function productByOS(product, os){
  return product.os.toLowerCase() === os.toLowerCase();
}

// Endpoint 7: Filter the products based on the “OS” option.
app.get("/products/filter/os", (req, res) => {
  let os = req.query.os;
  let sortedProducts = products.filter(product => productByOS(product, os));
  res.json( {"product": sortedProducts });
})



// function to filter products by price
function productsByPrice(product, price){
  return product.price <= price;
}

// Endpoint 8: Filter the products based on the “Price” option.
app.get("/products/filter/price", (req, res) => {
  let price = parseFloat(req.query.price);
  let sortedProducts = products.filter(product => productsByPrice(product, price));
  res.json( {"product": sortedProducts });
})



// Endpoint 9: Send original array of products
app.get("/products", (req, res) => {
  res.json({ "products": products} );
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
