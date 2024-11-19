let boton = document.getElementById("idBoton")
let alumnos=[]
let mediaNotas =0
boton.addEventListener("click",
    ()=>{
        let cantidad =parseInt(prompt("introduce la cantidad de alumnos"))
        for(let i =1 ;i<=cantidad ;i++){
            let alumno=prompt(`Introduce el nombre y notas del alumno ${i}`)
            if (alumno && alumno.includes(',')){//el nombre incluye una , para separar
                let [nombre,nota]= alumno.split(',')
                nombre = nombre.trim()//trim quita los espacios
                nota = parseInt(nota)
                alumnos.push({nombre,nota})
                mediaNotas += nota
            }else{
                console.log("introduce el nombre y al nota separados ")
            }
        }
        

        
    }
)
