// komentarz #1
/*
komentarz #2
*/ 

// Zadanie 1
var a = 10; //zmienna
var b = 20;

let add=a+b; //dodawanie
let sub=b-a; //...
let mul=a*b;
let div=b/a;
let mod=a%b;
console.log("Zadanie #1:")
console.log(add); //wyświetlanie w konsoli
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);

document.getElementById("addR").
innerHTML="\n Wynikiem + jest: " + add;
//.innerHTML= ;
//get the HTML content of an element with id
document.getElementById("subR").
innerHTML="Wynikiem - jest: " + sub;
document.getElementById("mulR").
innerHTML="Wynikiem * jest: " + mul;
document.getElementById("divR").
innerHTML="Wynikiem / jest: " + div;
document.getElementById("modR").
innerHTML="Wynikiem % jest: " + mod;
// Zadanie 2
var s1 = 3; 
var s2 = 5;
var s3 = 4; 

var p = (s1+s2+s3)/2;
var area = Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));

console.log("Zadanie #2: Pole trójkąta: "+area);
document.getElementById("areaR").innerHTML=
"Zadanie #2: Pole trójkąta o bokach: "+ s1 +', '+s2+', '
+s3+' '+"wynosi: "+area;
//getElementById
//change the HTML content of an element with id

// Zadanie 3

const num = Math.ceil(Math.random()*10); //losowa liczba od 1 do 10
console.log("Zadanie #3 Losowa liczba " + num); //wyświetlanie liczby w konsoli

const gnum = prompt("Zadanie #3: Podaj liczbę: "); //podanie liczby przez użytkownika
if(num==gnum){
    console.log("Zadanie #3: Dobra Robota!"); //liczby się zgadza
} else{
    console.log("Zadanie #3: Nie Udało Się!")//liczby się nie zgadza
}
document.getElementById("losR").innerHTML=
"Zadanie #3: Twoja liczba jest " + gnum + 
", liczba losowa jest " + num;

// Zadanie 4

const num1=parseFloat(prompt("Zadanie #4: Podaj 1ą liczbę: "));
const num2=parseFloat(prompt("Zadanie #4: Podaj 2ą liczbę: "));
const num3=parseFloat(prompt("Zadanie #4: Podaj 3ą liczbę: "));
var n = 0;
if(num1 >= num2 && num1 >= num3){
    console.log("Zadanie #4: " + num1 + " jest najwienkszą liczbę");
    n = num1;
} else if(num2 >= num1 && num2 >= num3){
    console.log("Zadanie #4: " + num2 + " jest najwienkszą liczbę");
    n = num2;
} else{
    console.log("Zadanie #4: " + num3 + " jest najwienkszą liczbę");
    n = num3;
}
document.getElementById("najwR").innerHTML=
"Zadanie #4: " + n + " jest najwienkszą liczbę";


// Zadanie 5

function gcd(x, y) {
    if (y === 0) {
      return x;
    } else {
      return gcd(y, x % y);
    }
}

console.log("Zadanie #5: NWD (3952, 864)" + gcd(3952, 864)); // NWD 16
console.log("Zadanie #5: NWD (174, 186)" + gcd(174, 186)); // NWD 6

document.getElementById("nwd").innerHTML= 
"Zadanie #5: NWD (3952, 864) wynosi "+gcd(3952, 864);

// Zadanie 6
const student1 = {
    firstName: "Maks",
    lastName: "Kovalski",
    age: 18,
};
const student2 = {
    firstName: "Sofia",
    lastName: "Kovalska",
    age: 18,
};
const student3 = {
    firstName: "Oleksandr",
    lastName: "Kovalski",
    age: 18,
};
console.log("Zadanie #6: Imie pierwszego studenta: " + student1.firstName);
console.log("Zadanie #6: Wiek drugiego studenta: " + student2.age);
console.log("Zadanie #6: Nazwisko trzeciego studenta:" + student3.lastName);

// Zadanie 7

function createStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const major = document.getElementById("lastName").value;

const student = {
    name: name,
    age: age,
    major: major
};

    document.getElementById("studentName").innerHTML = "Imię: " + student.name;
    document.getElementById("studentAge").innerHTML = "Wiek: " + student.age;
    document.getElementById("studentLastName").innerHTML = "Nazwisko: " + student.major;
}

// Zadanie 8

function showTime(){
    return (new Date()).toLocaleTimeString();
};
document.getElementById('czas').innerHTML = showTime();
// wyświetlanie na stronie

setInterval(function() {
    document.getElementById('czas').innerHTML = showTime();
}, 1000); //timer jest aktualizowany co sekundę bo 1000ms = 1s