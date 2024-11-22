
let intervalo = setTimeout(
    ()=>{
        let texto = document.createElement("p")
        document.body.appendChild(texto)
        let horaSistema = new Date();
        texto.innerHTML = horaSistema

    }
    ,20000//20 seg
)