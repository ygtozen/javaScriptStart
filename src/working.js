// 1. Parametre	olarak	girilen	dereceyi	fahrenhiet’a dönüştürdükten	
// sonra	geri	döndüren	bir	metod yazınız.	T(°F) = T(°C) × 1.8	+	32

function dereceHesapla(celcius) {
    let fahrenheit = (celcius * 1.8) + 32;
    return fahrenheit;
}

let celcius = 30;
let fahreheitDerece = dereceHesapla(celcius);
console.log(celcius + " C ==> " + fahreheitDerece + " F");

console.log("----------------");

// 2. Kenarları	parametre	olarak	girilen	ve	dikdörtgenin	çevresini	
// hesaplayan	bir	metod yazınız..

function diktorkenCevre(kisaKenar, uzunKenar) {
    let cevre = 2 * (kisaKenar + uzunKenar);
    console.log(kisaKenar + " ve " + uzunKenar + " çevre ==> " + cevre)
}

diktorkenCevre(5,10);

// 3. Parametre	olarak	girilen	sayının	faktoriyel değerini	hesaplayıp	geri	
// döndüren	metodu	yazınız.

function faktoriyelHesaplama(number) {
    let faktoriyel = 1;

    for(let i = 1; i <= number; i++) {
        faktoriyel = faktoriyel * i;
    }

    return faktoriyel;
}

let number = 5;
let faktoriyel = faktoriyelHesaplama(number);
console.log(number + "! ==> " + faktoriyel);

// 4. Parametre	olarak	girilen	kelime	ve	harf	için	harfin	kelime	içinde	kaç	
// adet	olduğunu	gösteren	bir	metod yazınız

function kelimeHesapla(kelime, harf) {
    let counter = 0;
    for(let i = 0; i < kelime.length; i++) {
        if(harf === kelime[i]) {
            counter++;
        }
    }

    console.log("Aranan harf : " + harf + " Kelime : " + kelime + " ==> " + counter + " adet var");
}

kelimeHesapla("yigit","i");
kelimeHesapla("ankara","a");

// 5.	Parametre	olarak	girilen	kenar	sayısına	göre	iç	açılar	toplamını	hesaplayıp	
// sonucu geri	gönderen	metod yazınız.
// Formül	n:	kenar	sayısı	(n-2).180

function aciHesapla(kenarSayisi) {
    let aci = (kenarSayisi - 2) * 180;
    return aci;
}

let kenarSayisi = 4;
let aci = aciHesapla(kenarSayisi);
console.log(kenarSayisi + " kenar iç açıları toplamı : " + aci);

// 6	.	Parametre	olarak	girilen	gün	sayısına	göre	maaş	hesabı	yapan	ve	
//elde	edilen	 değeri	geri	döndüren	metod yazınız. 1	Günde	8	saat	çalışılabilir.
// Çalışma	saat	ücreti	:	10	tl
// Mesai	saat	ücreti	:	20tl
// 160	saat	üzeri	mesai	sayılı

function maasHesapla(gunSayisi) {
    let saat = 160;
    let calisilanSaat = gunSayisi * 8;
    let mesaiUcreti = (calisilanSaat - saat) * 20;
    let maas = (saat * 8) + mesaiUcreti;
    return maas;
}

let gunSayisi = 20;
let maas = maasHesapla(gunSayisi);
console.log("Çalışılan gün : " + gunSayisi + " ==> Maaş : " + maas);

// 7.	Parametre	olarak	girilen	kota	miktarına	göre	ücreti	hesaplayarak	geri	
// döndüren	 metodu	yazınız. • 50GB	100	TL
// Kota	aşımından	sonra	her	1GB	4	TL

function internetUcreti(kullanilanKota) {
    let internetUcreti = 100;
    let kota = 50;
    if(kullanilanKota <= 50) {
        internetUcreti = 100;
    } else {
        internetUcreti = internetUcreti + (kullanilanKota - kota) * 4;
    }

    console.log("Kullanılan kota : " + kullanilanKota + "Ücret : " + internetUcreti);
}

internetUcreti(52);