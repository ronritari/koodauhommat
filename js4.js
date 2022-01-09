let array = ["liisa", "Sanna"];
function add(){
    array.push(document.getElementById("teksti").value);
    console.log(array);
}

function remove(){      
    let nimi=document.getElementById("teksti").value;
    let index = array.indexOf(nimi);   
    if(index>-1){
        array.splice(index, 1);
        console.log(array);
    }
}

function show(){
    let lista="";
    array.sort();
    array.forEach(printtaa)
    function printtaa(item, index) {
        lista += index + ": " + item + "<br>"; 
    }
    document.getElementById("print").innerHTML = lista;
    
    
}