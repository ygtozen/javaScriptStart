console.log("Merhaba Kodlama.io");

// JS type safe değildir.
let dolarBugun = 9.30;

let dolarDun = 9.20;

{
    let dolarDun = 9.10;
}

console.log(dolarDun);
const euroDun = 11.2
// euroDun = 11 --> const değişkeni sabittir, bir kere tanımlandıktan sonra değerini değiştiremeyiz

console.log(euroDun);

// Array
// camelCasing
// PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kresi", "Kamu  Konut Kredisi", "Özel Konut Kredisi"];

console.log("<ul>");
for(let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");

console.log(konutKredileri);

// konutKredileri.forEach(str => console.log(str)); // foreach