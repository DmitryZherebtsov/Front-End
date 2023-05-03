//Rozgrzewka

// function rozgrzewka(){
//     for (let i=10; i>=0; i--){
//         setTimeout(function(){
//             document.getElementById("countdown").innerHTML = i;
//             if (i === 0){
//                 document.getElementById("countdown").innerHTML = "Szczęśliwego Nowego Roku!";
//             }
//         }, (1 - i) * 1000);
//     }
// }
// rozgrzewka();
//Zadanie 2


var number = prompt('Podaj ilość rekordów do wypisania(max 20 rekordów): ');

if (number > 20){
    number = 20;
}

let names = ['Anna', 'Alexander', 'Łukasz', 'Jan', 'Katarzyna', 'Maria', 'Małgorzata', 'Agnieszka', 'Barbara', 'Ewa', 'Magdalena', 'Elżbieta', 'Krystyna', 'Piotr', 'Krzysztof', 'Andrzej', 'Tomasz', 'Paweł', 'Jan', 'Michał', 'Marcin'];
const surnames = ['Bąk', 'Kowalski', 'Nowak', 'Wiśniewski', 'Wójcik', 'Kowalczyk', 'Kamiński', 'Zieliński', 'Szymański', 'Woźniak', 'Szumowski'];
const ages = [];
console.log(names[Math.random()*names.length]);
for(let i = 17; i<86; i++){
    ages.push(String(i));
}console.log(ages);

function create(){
    document.write("<table border=\"7\">");
    document.write("<tr><td>№</td><td>Imię</td><td>Nazwisko</td><td>Wiek</td><td>Numer</td></tr>");
    
    for(number; number > 0; number--){ 
        document.write(`<tr><td> ${number} </td>`);
        document.write(`<td> ${names[Math.floor(Math.random()*names.length)]} </td>`);
        document.write(`<td> ${surnames[Math.floor(Math.random()*surnames.length)]} </td>`);
        document.write(`<td> ${ages[Math.floor(Math.random()*ages.length)]} </td>`);
        document.write(`<td> ${Math.floor(Math.random() * 5000000) + 8000000} </td>`);

    }
    // koniec kroku 1
    document.write("</table>")
}
create();



