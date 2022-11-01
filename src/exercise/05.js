// useRef et useEffect
// http://localhost:3000/alone/exercise/05.js

import * as React from 'react'
// 🐶 importe confetti-js en décommentant la ligne ci-dessous
import ConfettiGenerator from 'confetti-js'

function Confetti() {
  // 🐶 utilise useRef pour créer un référence 'confettiRef' vers le canvas de confetti
  // 🤖 const confettiRef = React.useRef()
  const confettiRef = React.useRef()
  // 🐶 utilise useEffect pour initiliser le générateur de confetti avec les bons paramètres
  // 🤖 Initialisation :

  React.useEffect(() => {
    const confettiSettings = {target: confettiRef.current}
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()

    return () => {
      confetti.clear()
    }
  })
  // 🐶 n'oublie pas de detruire l'objet confetti en retournant une fonction cleanup dans useEffect
  // 🤖 return () => confetti.clear()

  // 🐶 ajoute dans confettiSettings / target la référence de l'élement DOM canvas
  // 🤖 const confettiSettings = { target: confettiRef.current}

  // 🐶 ajoute la référence confettiRef au canvas
  // 🤖 <canvas ref={confettiRef} />
  return <canvas ref={confettiRef} />
}

function App() {
  return <Confetti />
}
export default App
