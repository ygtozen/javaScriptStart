let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:50},
    {id:6, productName:"Pot", quantity:5, unitPrice:150}
]

// MAP ==> Iterate yapıyor, array'imizi tek tek dolaşıyor.
// cart.map(product => console.log(product.productName)); 
console.log("<ul>");
cart.map(product => { // Birden fazla işlem yaptırmak istediğimizde {} parentezler içinde yapabiliriz
    console.log("<li>" + product.productName + " : "
                + product.unitPrice * product.quantity + "</li>");
});
console.log("</ul>");

let total = cart.reduce((acc, product) => acc + product.unitPrice, 0);
console.log("Total unitPice : " + total);

// FILTER ==>
let quantityOver2 = cart.filter(product => product.quantity > 2);
console.log(quantityOver2);


function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20}); 
}

addToCart(cart);
console.log(cart);

let sayi = 10;
function sayiTopla(number) {
    number += 1;
}
sayiTopla(sayi);
console.log(sayi);

console.log("-----------------");
console.log("Map, Filter, Reduce Tekrar");
