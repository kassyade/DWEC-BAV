let base = parseFloat(prompt("Introduzca la base"));
let altura  =parseFloat(prompt("Introduzca la altura"));
let p ;
function perimetroRectangulo(a,b){
p = a*2 +b*2 ;
return p ;
}

console.log(`El perimetro sería ${perimetroRectangulo(base,altura)}`);