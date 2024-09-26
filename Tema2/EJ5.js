let calificaciones =prompt("Introduce los valores separados con un (;)")
let valores =calificaciones.split(";")//separamos la cadena en string 
valores=valores.map(Number);//convertimos a numeros la cadena de string

for(let i=0;i<valores.length;i++){
    console.log(`Valor ${i+1}:${valores[i]}`)//imprimimos cada uno de los valores de array de valores 
}