let products=[{name:"mustach facewash",price:150,category:"skincare"},{name:"loreal shampoo",price:250,category:"haircare"},{name:"nivea body lotion",price:300,category:"bodycare"}];


products.forEach(function(product){
    console.log(`product name: ${product.name}`);
    console.log(`product price: ${product.price}`);
    console.log(`product category: ${product.category}`);
    console.log("********************");
});

console.log(`product name: ${products[2].name}`);

console.log(typeof products);