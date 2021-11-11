function printStars(){
    let n = document.getElementById("määrä").value;

    for(i=1; i==n; i++){
        for(j=1; i==j; j++){
            document.getElementById("star").innerHTML = "*";
        }
        document.getElementById("star").innerHTML = " ";
    }
}