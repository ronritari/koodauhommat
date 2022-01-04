let kokonaissumma = 0;
let teksti="";
for(let i = 1; i <= 10; i++){
    kokonaissumma = kokonaissumma + i;
    teksti += i + ": " + kokonaissumma + "<br>";
    console.log(teksti);
}
document.getElementById("tulos").innerHTML = teksti;

let tuotteet =['kello','kuppi','ohjain','kieli'];
console.log(tuotteet);
console.log(tuotteet[3]);

let taulukonkoko =tuotteet.length;
console.log(taulukonkoko);

for(let indeksi = 0; indeksi < taulukonkoko; indeksi++){
    let tuote = tuotteet[indeksi];
    console.log(tuote);
}