let provincias = new Map([
    ["xxx"["",""] ],//para que al iniciar no se ponga ninguna opcion 
    ["Andalucia", ["Cádiz", "Córdoba", "Granada", "Sevilla", "Huelva", "Jaen", "Málaga"]],
    ["Madrid", ["Madrid Capital", "Vallecas"]],
    ["Galicia", ["Lugo", "Orense", "Pontevedra"]]
]);

function x() {
    //cogemos el id de cada uno de los campos
    let selectAutonomia = document.getElementById("id_autonomia");
    let selectProvincia = document.getElementById("id_provincia");

    for (let autonomia of provincias.keys()) {//por cada autonomia ponemos sus provincias 
        let option = document.createElement("option");
        option.value = autonomia;
        option.textContent = autonomia;
        selectAutonomia.appendChild(option);
    }
    //change para que se actualice cada que el campo select cambia 
    selectAutonomia.addEventListener("change", function() {
        selectProvincia.innerHTML = ""; //limpiamos del anterior

        let provinciasArray = provincias.get(selectAutonomia.value) || [];
            //añadimos las provincias
        for (let provincia of provinciasArray) {
            let option = document.createElement("option");
            option.value = provincia;
            option.textContent = provincia;
            selectProvincia.appendChild(option);
        }
    });
}

document.addEventListener("DOMContentLoaded", x);
