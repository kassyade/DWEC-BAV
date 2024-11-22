let notas =prompt("Introduce las notas separadas con una (,)")
let valores = notas.split(",");
valores=valores.map(Number);
let resultado;
let mens="";
 for(let i=0;i<valores.length;i++){
    if(valores[i]===10){
        resultado=1;
    }
    
 }
 if(resultado===1){
    mens="SI"
    console.log(mens);
 }else{
    mens="NO"
    console.log(mens);
 }