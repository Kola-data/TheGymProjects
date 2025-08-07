const arr = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 },
    { name: 'Product D', price: 10 }
]

const sortProducts = (products) => {
    return products
    .sort((a, b) => a.price - b.price);
}
console.log(sortProducts(arr));