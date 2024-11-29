import './App.css'
import Li from './componentes/Li'

function App() {
  // Javascript: Hacemos un array
  const jugadores = [
    {nombre: "Messi", posicion: "Mediapunta"},
    {nombre: "Maradona", posicion: "Extremo"},
    {nombre: "Pelé", posicion: "Delantero"}
  ]

  return (
    // Aqui renderizamos el html  
    <hmtl>
      
    <h1>Parte visual (ubicación:App.jsx)</h1>
    <h2>Mejores jugadores de la historia: {jugadores.length}</h2>
     <ul>
      {
        // Utilizar un Map de JS
        jugadores.map((jugador, index) => {
          //return <li key={index}>{jugador.nombre} que juega de {jugador.posicion}</li>
        
          return <Li nombre={jugador.nombre} posicion={jugador.posicion} key={index}/>
        })
      }
     </ul>
    </hmtl>
  )
}

export default App
