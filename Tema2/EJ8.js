let ano= parseInt(prompt("Introduce el año"));

function esBisiesto(ano){
    if (ano%4===0){
        if(ano%100===0){
            if(ano%400==0){
                return 1;
            }else{
                return 0;
            }

        }else{
            return 1;
        }

    }else {
        return 0;
    }
}
 
if (esBisiesto(ano)===1){
    console.log("Este año si es bisiesto");
}else{
    console.log("No es bisiesto");
}

