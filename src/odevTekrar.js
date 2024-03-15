// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
// (Araştırma konusu : şart blokları : if )

function findPrime(...numbers) {

    for(let i = 0; i < numbers.length; i++) {
        let counter = 0;

        if(numbers[i] <= 1){
            counter++;
        }

        for(let k = 2; k < numbers[i]; k++) {
            if(numbers[i] % k === 0) {
                counter++;
            }
        }

        if(counter > 1) {
            console.log(numbers[i] + " ==> asal sayı değil");
        } else {
            console.log(numbers[i] + " ==> asal sayı");
        }

    }

}

findPrime(17, 5, 8, 13, 21, 11, 3);
console.log("----------------------------");

//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
function friendNumber(number1, number2){
    let total1 = 0;
    let total2 = 0;

    for(let i = 0; i < number1; i++) {
        if(number1 % i === 0) {
            total1 = total1 + i;
        }
    }

    for(let k = 0; k < number2; k++) {
        if(number2 % k === 0) {
            total2 = total2 + k;
        }              
    }


    if(number1 == total2 && number2 == total1) {
        console.log(number1 + " ve " + number2 + " arkadaş sayıdır");
    } else {
        console.log(number1 + " ve " + number2 + " arkadaş değildir");
    }

}

friendNumber(220,284);
friendNumber(150,300);
friendNumber(100,200);
console.log("----------------------------");

function friendsNumbers(...numbers) {
    let num1=0;
    let num2=0;
    for(let i=0;i<numbers[0];i++){
        if(numbers[0] % i===0){
            num1+=i
        }
    }
    for(let i=0;i<numbers[1];i++){
        if(numbers[1] % i===0){
            num2+=i
        }
    }
    if(num1===numbers[1]&&num2===numbers[0]){
        console.log(numbers[0]+ " ve "+ numbers[1]+" arkadaş sayılardır.")
    }
    else{
        console.log(numbers[0]+ " ve "+ numbers[1]+" arkadaş sayılar değildir.")
    }
   
}
   

friendsNumbers(1184,1210)
friendsNumbers(220,284)
friendsNumbers(300,400)
friendsNumbers(50,100)

console.log("---------------------------------------------------")

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function mukemmelSayi() {

   //3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

for (let i = 2; i < 1000; i++) {
    let add = 1;
    for (let k = 2; k * k <= i; k++) {
        if (i % k === 0) {
            add += k;
            if (k * k !== i) {
                add += i / k;
            }
        }
    }
    if (add === i) {
        console.log(i);
    }
}

console.log("---------------------------------------------------")
}
mukemmelSayi();
