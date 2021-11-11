function BMI(){
    let pituus = document.getElementById("pituus").value / 100;
    let paino = document.getElementById("paino").value;
    let bmi = paino/(pituus*pituus);

    let kategoria = "";
    
        if(bmi<=16.0){
            kategoria = "Underweight (Severe thinness)";
            
        }

        else if(bmi>=16 && bmi<=16.9){
            kategoria = "Underweight (Moderate thinness)";
            
        }
            

        else if( bmi>=17 && bmi<=18.4){
            kategoria = "Underweight (Mild thinness)";
            
        }
            
        
        else if( bmi>=18.5 && bmi<=24.9){
            kategoria = "Normal range";
            
        }
            
        
        else if( bmi>=25 && bmi<=29.9){
            kategoria = "Overweight (Pre-obese)";
            
        }
            

        else if( bmi>=30 && bmi<=34.9){
            kategoria = "Obese (Class I)";
            
        }
            
        
        else if( bmi>=35 && bmi<=39.9){
            kategoria = "Obese (Class II)";
            
        }
            

        else if( bmi<=40){
            kategoria = "Obese (Class III)";
            
        }
            
        
        else if( bmi<=10 || bmi>= 60){
            kategoria = "error";
        }
            
        
    

    document.getElementById("tulos").innerHTML = "BMI on "+bmi + "// BMI kategoriasi on "+ kategoria;
}