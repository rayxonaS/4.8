//function 1
//Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin va ularning yig’indisini     qaytarib bersin.

function sum(x, y) {
  let result = x + y;
  return result;
}

console.log(sum(-7, 7));

//function 2
//Minutlarni butun son sifatida qabul qilib, uni sekundlarga o’girib beradigan funksiya yasang.

function toSekunds(minutes) {
  let result = minutes * 60;
  return result;
}

console.log(toSekunds(5));

//function 3
//Funksiya butun son qabul qiladi. Funksiya ushbu butun sondan keyingi sonni qaytarsin.

function nextInteger(int) {
  let result = int + 1;
  return result;
}

console.log(nextInteger(-9));

//function 4
//Funskiya uchburchakning asosi va balandligini qabul qiladi. Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2

function uchburchakYuzi(asos, balandlik) {
  let result = (asos * balandlik) / 2;
  return result;
}

console.log(uchburchakYuzi(3, 2));

//function 5
//Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb oling.

function ageToDays(age) {
  let result = age * 365;
  return result;
}

console.log(ageToDays(65));

//function 6
//Quyidagi namunalarga muvofiq ravishda funksiyani tana qismini yozing.

function kub(daraja) {
  let result = daraja ** 3;
  return result;
}

console.log(kub(5));

//function 7 - o'tganimiz yo'q

//function 8
//Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.

function power(x, y) {
  let result = x * y;
  return result;
}

console.log(power(23, 10));

//function 9
//Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan funksiya yasang.

function hourToSeconds(hour) {
  let result = hour * 3600;
  return result;
}

console.log(hourToSeconds(2));

//function 10
//Uchburchakning uchinchi tomonining eng uzun qiymatini qaytaradigan funksiya yasang.
//Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1

function uchinchiTomon(tomon1, tomon2) {
  let result = tomon1 + tomon2 - 1;
  return result;
}

console.log(uchinchiTomon(5, 7));

//function 11
//Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan funksiya yasang.

function qoldiq(son1, son2) {
  let result = son1 % son2;
  return result;
}

console.log(qoldiq(3, 4));

//function 12
//Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab qaytaradigan funksiya yasang. Formula S = bo’yi * eni

function tortburchakYuzi(boyi, eni) {
  let result = boyi * eni;
  return result;
}

console.log(tortburchakYuzi(3, 4));

//function 13
//Funksiya “a” argument sifatida string ma’lumot qabul qiladi. ushbu funksiya “Something” stringiga " " bo’sh joy va “a” stringini birlashtirib qaytarsin.

function stringQoshish(a) {
  let result = "something" + " " + a;
  return result;
}

console.log(stringQoshish("Bob Jane"));
//function 14
//Quyidagi namunalarga qaragan holatda funksiya yasang.

function kvadrat(daraja) {
  let result = daraja ** 2;
  return result;
}

console.log(kvadrat(5));

//function 15
//Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.

function noldan(raqam) {
  let result = raqam <= 0;
  return result;
}

console.log(noldan(7));

//function 16
//Funksiya ko’p  burchakli shaklning burchaklar sonini qabul qiladi. Natijada funksiya ushbu shaklning ichki burchaklar yig’indisini qaytarsin. Formula (n - 2) x 180

function ichkiBurchaklar(n) {
  let result = (n - 2) * 180;
  return result;
}

console.log(ichkiBurchaklar(4));

//function 17
//Basketbol o’yinida ikki ochkolik va uch ochkolik gollar mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar sonini va 2-argument sifatida uch ochkolik gollar sonini qabul qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.

function ochkolar(x, y) {
  let result = x * 2 + y * 3;
  return result;
}

console.log(ochkolar(7, 5));

//function 18
//Quyidagi namunalarni kuzatgan holda unga muvofiq funksiya yasang.

function nameString(a) {
  let result = a + "Edabit";
  return result;
}

console.log(nameString("Mubashir"));

//function 19
//Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya yasang.

function ikkitaSon(x, y) {
  let result = x + y <= 100;
  return result;
}

console.log(ikkitaSon(83, 34));

//function 20 - buni o'tmadik

//function 21
//Fermada turli xildagi hayvonlar mavjud. Shunday funksiya yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi argument sifatida tovuqlar sonini, ikkinchi argument sifatida qo’ylarni va uchinchi argument sifatida sigirlarning sonini qabul qiladi.

function oyoqlar(tovuq, qoy, sigir) {
  let result = tovuq * 2 + qoy * 4 + sigir * 4;
  return result;
}

console.log(oyoqlar(2, 3, 5));

//function 22
//Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!

function and(x, y) {
  let result = x && y;
  return result;
}

console.log(and(false, true));

//function 23
//Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala qiymatning ma’lumot turi bir xil bo’lsin.

function tengMi(x, y) {
  let result = x == y;
  return result;
}

console.log(tengMi(2, 2));

//function 24
//Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta mag’lubiyat = 0 ochko hisoblanadi.

function futbolOchko(yutish, durang, maglubiyat) {
  let result = yutish * 3 + durang * 1 + maglubiyat * 0;
  return result;
}

console.log(futbolOchko(5, 0, 2));

//function 25
//Funskiya soatlar va minutlarni argument sifatida qabul qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib ularning yig’indisini qaytarsin.

function sekundlar(soat, minut) {
  let result = soat * 3600 + minut * 60;
  return result;
}

console.log(sekundlar(1, 3));

//function 26
//Quyidagi namunalarni kuzatgan holda funksiya yasang.

function fun(n) {
  let result = n % 1 == 0;
  return result;
}

console.log(fun(6));

//function 27
//Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat qaytarsin.

function checkEquality(x, y) {
  let result = (x == y && x == "y") || ("x" == y && "x" == "y");
  return result;
}

console.log(checkEquality("5", 5));

//function 28 ???
//Funksiya boolean qiymat qabul qiladi. Ushbu funksiya boolean qiymatni stringga o’girib qaytarib bersin.

function booleanToString(bool) {
  let result = "true";
  return result;
}

console.log(booleanToString(true));

//function 29 buni o'tmadik

//function 30
//Framelar sonini hisoblaydigan funksiya yarating. Frame bu 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini qaytarsin.

//function 31 ???
//Oddiy matematik amallar ketma-ketligi string ko’rinishida funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.

function calc(string) {
  let result = eval(string);
  return result;
}

console.log(calc("23 + 4"));

//function 32
//Shunday funksiya yasangki, unda 2ta butun son argument qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat qaytaradi. Aks hold yolg’on.

function teng10(x, y) {
  let result = x == 10 || y == 10 || x + y == 10;
  return result;
}

console.log(teng10(9, 10));

//function 33
//Mashina kilometriga 10litr benzin ichadi. Mashina doim yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi. Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi keraglini funksiya qaytarib bersin.

function litrMasofa(km) {
  let result = km * 10;
  return result;
}

console.log(litrMasofa(15));

//function 34 ???
//Quyidagi namunaga nazar tashlagan holda funksiya yasang.

function fun(x, y) {
  let result = x > y ? x : y;
  return result;
}

console.log(fun(7, 3));

//function 35 buni o'tmadik

//function 36

//function 37

//function 38
//Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true qaytarsin, aks holda false.

function bolinsin5(son) {
  let result = son % 5 == 0;
  return result;
}

console.log(bolinsin5(37));

//function 39
//Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true qaytarsin, aks holda false.

function bolinsin100(son) {
  let result = son % 100 == 0;
  return result;
}

console.log(bolinsin100(37));

//function 40
