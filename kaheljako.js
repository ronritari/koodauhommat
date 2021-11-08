//let luku = document.getElementById(luku).innerHTML;
//console.log(luku);

function laske() {
    let luku = document.getElementById("luku").value;
    console.log(luku);
    let tulos = jaa(luku);
    document.getElementById("loppu").innerHTML = tulos;

   /* let koiranika = document.getElementById("ika").value;
    console.log(koiranika);
    let tulos = koira(ika);
    document.getElementById("ika").innerHTML = tulos;*/
}

function laskekoira() {
    let koiranika = document.getElementById("ika").value;
    console.log(koiranika);
    let tulos = koira(koiranika);
    document.getElementById("koira").innerHTML = tulos;
}

function jaa(arvo){
    let tulos = arvo/2;
    console.log(tulos);
    return tulos;
}

function koira(arvo){
    let tulos = arvo*7;
    console.log(tulos);
    return tulos;
}