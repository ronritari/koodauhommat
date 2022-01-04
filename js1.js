function analyseText(){
    let teksti = document.getElementById("teksti").value;
    let iso = teksti.toUpperCase("teksti");
    let pieni = teksti.toLowerCase("teksti");
    let maara = teksti.length;
    let ulos = iso+ " " + pieni+ " " + maara;
    console.log(ulos)
    document.getElementById("ulos").innerHTML = ulos;
}

function clearFields(){
    document.getElementById("button").style.background='red';
    document.getElementById('teksti').value = '';
    document.getElementById('ulos').innerHTML = ''
}