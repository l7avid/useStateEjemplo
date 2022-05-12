import React, { useState } from 'react'

//Vamos a crear una app que al clickear el botón incremente en 1 el contador usando useState hook

const StateTutorial = () => {

  const [count, setCount] = useState(0) //Esta linea crea el estado (count) y la función que me va a modificar ese estado (setCount)
  // y además inicializa el estado de count en cero (useState(0))
  
  const increment = () => {
    setCount(count + 1) //Usamos la función que modifica al estado (setCount) y le pasamos nuevo valor del estado
  }

  return (
    <div style={{textAlign: 'center'}}> 
      {count} <button onClick={increment}> Increment </button>
    </div> 
    //Se alinea el contenido en el centro
    //Se muestra el contador {count}
    //Se muestra el botón y se le pasa la función que se vaya a ejecutar cada vez que se clickea
    //Si en el estado inicial se le pasa un string (useState("David")) al clickear el botón se concatenará el string con unos
    // ej: Primer click -> David1, segundo click -> David11, tercer click -> David111 y así sucesivamente
  )
}

export default StateTutorial
