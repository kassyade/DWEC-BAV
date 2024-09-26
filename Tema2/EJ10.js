    let numero = parseInt(prompt("Introduce un número (1-10000)"));
    if (esPrimo(numero)) {
        console.log(`${numero} si es primo`);
    } else {
        console.log(`${numero} no es primo`);
    }


 function esPrimo(num) {
    if (num === 1) {
        return false;
    }if (num === 2 || num === 3) {
        return true;
    }if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true; 
}