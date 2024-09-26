let sueldo =parseInt(prompt("Introduce el sueldo (sin decimales)"));
let anos=parseInt(prompt("Introduce la antigüedad(años)"));

console.log(`El sueldo es de ${sueldo}`);
console.log(`Y tiene ${anos} años de antiguedad`);
let sueldoFinal;
if(sueldo<500&&anos>=10){
    sueldoFinal =sueldo*3;
    console.log("se aplica a");
    console.log(`El sueldo final es ${sueldoFinal}`);
}else if(sueldo<500&&anos<10){
    sueldoFinal=sueldo*2;
    console.log("se aplica b");
    console.log(`El sueldo final es ${sueldoFinal}`);
}else if(sueldo>=500){
    sueldoFinal=sueldo;
    console.log("se aplica c");
    console.log(`El sueldo final es ${sueldoFinal}`);
}

