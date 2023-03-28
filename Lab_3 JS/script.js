
// komentarze #1

/*
komentarze #2
*/ 

// Zadanie 1
var a = 10; 
var b = 20;

let add=a+b;
let sub=b-a;
let mul=a*b;
let div=b/a;
let mod=a%b;

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);

document.getElementById("addR").
innerHTML="Wynikiem jest: " + add;

document.getElementById("mulR").
innerHTML="Wynikiem jest: " + mul;

// Zadanie 2

// var s1 = 10; 
// var s2 = 20;
// var s3 = 10; 

var s1 = 3; 
var s2 = 5;
var s3 = 4; 

var p = (s1+s2+s3)/2;
var area = Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));

console.log("Pole trójkąta: "+area);
document.getElementById("areaR").innerHTML=
"Pole trójkąta o bokach: "+ s1 +', '+s2+', '
+s3+' '+"wynosi: "+area;

// Zadanie 3

const num = Math.ceil(Math.random()*10);
console.log(num);

// const gnum = prompt("Podaj liczbę: ");
// if(num==gnum){
//     console.log("Dobra Robota!");
// } else{
//     console.log("Error, Nie Udało Się!")
// }

// Zadanie 4

const num1=parseFloat(prompt("Podaj 1ą liczbę: "));
const num2=parseFloat(prompt("Podaj 2ą liczbę: "));
const num3=parseFloat(prompt("Podaj 3ą liczbę: "));

if(num1 >= num2 && num1 >= num3){
    console.log(num1 + " jest najwienkszą liczbę");
} else if(num2 >= num1 && num2 >= num3){
    console.log(num2 + " jest najwienkszą liczbę");
} else{
    console.log(num3 + " jest najwienkszą liczbę");
}
