// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
// (Araştırma konusu : şart blokları : if )

function isPrime(number) {
    // Sayı 2'den küçükse asal değildir
    if (number < 2) {
        return false;
    }
    // 2 sayısı asaldır
    if (number === 2) {
        return true;
    }
    // 2'ye bölünebiliyorsa asal değildir
    if (number % 2 === 0) {
        return false;
    }
    // 3'ten başlayarak sayının kareköküne kadar olan sayılara bölünebilirlik kontrol edilir
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    // Yukarıdaki koşulların hiçbirine uymuyorsa sayı asaldır
    return true;
}

function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let result = isPrime(numbers[i]);
        if (result) {
            console.log(numbers[i] + " ==> asal sayıdır");
        } else {
            console.log(numbers[i] + " ==> asal değil");
        }
    }
}

findPrime(17, 5, 8, 13, 21, 11, 3);

// 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. 
// (Arkadaş sayılar için google)

function friendCount(number1 ,number2) {
    let total1 = 0;
    let total2 = 0;

    for(let i = 0; i < number1; i++) {
        if(number1 % i == 0) {
            total1 = total1 + i;
        }
    }

    for(let i = 0; i < number2; i++) {
        if(number2 % i == 0) {
            total2 = total2 + i;
        }
    }

    console.log("total1 : " + total1);
    console.log("total2 : " + total2);

    if(total1 == number2 && total2 == number1) {
        console.log(number1 + " ve " + number2 + " arkadaş sayıdır");
    } else {
        console.log(number1 + " ve " + number2 + " arkadaş sayı değildir");
    }
}

friendCount(220,284);

// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function isPerfectNumber() {
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
            console.log("Mükemmel sayı : " + i);
        }
    }
}

isPerfectNumber();

// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function isPrimeNumber() {
    let a;
    let k;
    let result;
    for(let a=1;a<1000;a++){
        result=true;
        for(let k=2;k<a;k++){
            if(a%k===0)
            result=false;
        
        }
        if(result==true){
            console.log(a)
        }
    }
}

isPrimeNumber();
