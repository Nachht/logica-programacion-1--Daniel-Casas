let boton = document.getElementById("calcular")

boton.addEventListener("click", function(){

    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let numero3 = Number(document.getElementById("numero3").value);

    let mayor;
    let centro;
    let menor;

    if (numero1 === numero2 && numero2 === numero3){
        
        document.getElementById("resultado").innerHTML = "Los tres numeros son iguales.";

    } else{
        
        if (numero1 >= numero2 && numero1 >= numero3){
            
        mayor = numero1;
            
        } else if (numero2 >= numero1 && numero2 >= numero3){
            
            mayor = numero2;

        } else {
            mayor = numero3;
        }

        if (numero1 <= numero2 && numero1 <= numero3){
            
            menor = numero1;
            
        } else if (numero2 <= numero1 && numero2 <= numero3){
            
            menor = numero2;

        } else {
            menor = numero3;
        }

    centro = numero1 + numero2 + numero3 - mayor - menor;
    
    document.getElementById("resultado").innerHTML =
    `Mayor a menor: ${mayor}, ${centro}, ${menor} 
    <br>
    <br>
    Menor a mayor: ${menor}, ${centro}, ${mayor}`;

    }
})


