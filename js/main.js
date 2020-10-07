function Pulsa(valor){
 if (valor=="C") {
    // Si es C borramos
    document.getElementById("CalcPantalla").innerHTML="";
 } else if (valor=="=") {
    // Si es igual realizamos operación
    document.getElementById("CalcPantalla").innerHTML=eval(document.getElementById("CalcPantalla").innerHTML);
    }else 
    // Si no es ninguna de las anteriores escribimos en pantalla
    document.getElementById("CalcPantalla").innerHTML=document.getElementById("CalcPantalla").innerHTML + valor;
}


