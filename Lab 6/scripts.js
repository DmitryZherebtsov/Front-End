console.log("ZADANIA 6");

// Zadanie 1
class Rectangle {
    constructor(wysokość, szerokość, nazwa){
        this.wysokość = wysokość;
        this.szerokość = szerokość;
        this.nazwa = nazwa;
    }
    obwod() {
        return (this.wysokość+this.szerokość)*2
    }
    pole(){
        return this.wysokość*this.szerokość
    }
    porównanie(y) {
        if(this.pole() > y.pole()) {
            console.log("Zadanie #1 Pierwszy jest większy: " + this.pole());
        } else if (this.pole() < y.pole()) {
            console.log("Zadanie #1 Drugi jest większy: " + y.pole());
        } else {
            console.log("Są Równe");
        }
    }
    wypisz_odwod(){
        console.log("Odwód: " + this.odwod());
    }

// Zadanie 6
    zmieńNazwe(nowaNazwa) {
        this.nazwa = nowaNazwa;
        return this.nazwa
  }
}

const prostokąt1 = new Rectangle(12, 10, " Prostokąt_1");
const prostokąt2 = new Rectangle(14, 9, " Prostokąt_2");
prostokąt1.zmieńNazwe("Prostokąt #1");
prostokąt2.zmieńNazwe("Prostokąt #2");
console.log("Zadanie #1 Piewszy obwód: " + prostokąt1.obwod());
console.log("Zadanie #1 Pierwsze pole: " + prostokąt1.pole());
console.log("Zadanie #1 Drugi obwód: " + prostokąt2.obwod());
console.log("Zadanie #1 Drugie pole: " + prostokąt2.pole());
// porównanie(prostokąt1.pole, prostokąt2.pole)
prostokąt1.porównanie(prostokąt2);

// Zadanie 2

class Trojkat {
    constructor(wysokosc, dlugosc, nazwa) {
      this.wysokosc = wysokosc;
      this.dlugosc = dlugosc;
      this.nazwa = nazwa;
    }
    pole_trojkat() {
      return (this.wysokosc * this.dlugosc) * 0.5;
    }
    static porównanie(trojkat1, trojkat2) {
      const pole1 = trojkat1.pole_trojkat();
      const pole2 = trojkat2.pole_trojkat();
      if (pole1 > pole2) {
        return trojkat1;
      } else if (pole1 < pole2) {
        return trojkat2;
      } else {
        return null;
      }
    }
}
const trojkat1 = new Trojkat(8, 12, "Trojkat 1");
const trojkat2 = new Trojkat(4, 7, "Trojkat 2");
const trojkat3 = new Trojkat(9, 15, "Trojkat 3");
console.log(" Zadanie #2 Pole: ", trojkat1.pole_trojkat()); 
console.log(" Zadanie #2 Pole: ", trojkat2.pole_trojkat()); 
console.log(" Zadanie #2 Pole: ", trojkat3.pole_trojkat()); 


const wiekszyTrojkat = Trojkat.porównanie(trojkat1, trojkat2);
console.log(" Zadanie #2 ", wiekszyTrojkat.nazwa, "jest Większy"); 


// Zadanie 3
class Trapez {
    constructor(wysokosc, podstawa1, podstawa2, nazwa) {
      this.wysokosc = wysokosc;
      this.podstawa1 = podstawa1;
      this.podstawa2 = podstawa2;
      this.nazwa = nazwa;
    }
  
    obliczPole() {
      return((this.podstawa1 + this.podstawa2)*this.wysokosc)*0.5;
    }
  }
  

const trapez1 = new Trapez(5, 12, 8, " Trapez 1");
const trapez2 = new Trapez(7, 9, 11, " Trapez 2");
const trapez3 = new Trapez(8, 10, 14, " Trapez 3");

console.log("Zadanie #3", trapez1.nazwa, ": ", trapez1.obliczPole());
console.log("Zadanie #3",trapez2.nazwa, ": ", trapez2.obliczPole());
console.log("Zadanie #3",trapez3.nazwa, ": ", trapez3.obliczPole());


// Zadanie 4
function porownFigur(x, y){
    if(x.pole() != y.pole()){
        if(x.pole > y.pole){
            console.log("  Zadanie #4", x.nazwa, " jest większy");
        } else{
            console.log("  Zadanie #4", y.nazwa, " jest większy");
        }
    } else{
        console.log("  Zadanie #4 Pola są równe");
    }
}
porownFigur(prostokąt1, prostokąt2);


// Zadanie 5
function większy_obwód(x, y){
    if(x.obwod() != y.obwod()){
        if(x.obwod > y.obwod){
            console.log("Zadanie #5", x.nazwa, " jest większy");
        } else{
            console.log("Zadanie #5", y.nazwa, " jest większy");
        }
    } else{
        console.log("Zadanie #5 obwody są równe");
    }
}
większy_obwód(prostokąt1, prostokąt2);
console.log("Zadanie #6 jest w kodzie");


// ZADANIE 6+
console.log("");
console.log("ZADANIA 6+");
console.log("Zadanie #1");
// const table = [1,2,3];
// table.push(4,5);
// console.log(table); // [1,2,3,4,5]
// table.pop(); 
// console.log(table); // [1,2,3,4]
// table.shift();
// console.log(table); // [2,3,4]
// table.unshift(-1, 0);
// console.log(table); // [-1,0,2,3,4]
// const table_1 = [1,2,3,4,5,6,7];
// const podtablica = table_1.slice(1, 3);
// console.log(podtablica);


// Zadanie 1

// tablice liczb
const tablica = [5, 8, 10, 14, 18, 21, 25, 27, 30];

// 1)
// let i = 0;
// let suma = 0;
// while(i < tablica.length){
//     suma = suma + tablica[i];
//     i++;
// }
// console.log("  Zadanie #1 1)Suma liczb: ", suma);
const suma1 = tablica.reduce((a, b) => a + b, 0);
console.log(" 1)Suma liczb: ", suma1);

// 2)
// const parzyste = [];
// for(i=0; i<tablica.length; i++){
//     if(tablica[i] % 2 == 0){
//         parzyste.push(tablica[i]);
//     }
// }
// console.log("  Zadanie #1 2) Liczby parzyste: ", parzyste);

const parzyste = tablica.filter(el => el % 2 == 0);
console.log(" 2) Liczby parzyste: ", parzyste);

// 3)
// const przetworzonaTablica = tablica.map(myFunction);
// function myFunction(num) {
//     return num * 3;
// }
const przetworzonaTablica = tablica.map(el => el * 3);
console.log(" 3)Tablica mnożona na 3: ", przetworzonaTablica);

// 4)
tablica.push(68189);
let index = tablica.indexOf(68189);
console.log(" 4)Index mojego numeru albumu jest: ", index);

// LUB

// let i = 0;
// while(i < tablica.length){
//     if(tablica[i]==68189){
//         console.log("Index mojego numeru albumu jest: ", i);
//         break
//     }
//     i++;
// }

tablica.pop(68189);
// 5)
console.log(" 5)Średnią arytmetyczna: ", suma1/tablica.length);

// 6)

for(i=0; i<tablica.length; i++){
    największa_liczba = tablica[i];
}
console.log(" 6)Największa_liczba: ",największa_liczba);


// Zadanie 2

let fib = [0, 1];
for (let i = 2; i < 100; i++) {
    let licbza_plus = fib[i - 1] + fib[i - 2];
    fib.push(licbza_plus);
} console.log("Zadanie #2 Liczby ciągu Fibonacciego: ", fib);

