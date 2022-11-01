// Lifting state
// http://localhost:3000/alone/exercise/03.js

import * as React from 'react'

// 👨‍✈️ Nous voulons afficher dans le composant Content, l'ordinateur préféré

// 🐶 accepte `computer` et `onComputerChange` en props de ce composant
function MyBestComputer({computer, onComputerChange}) {
  return (
    <div>
      <label>Mon ordinateur préféré : </label>
      <input
        value={computer}
        // 🐶 remplace `setComputer` par `onComputerChange`
        onChange={event => onComputerChange(event.target.value)}
      />
    </div>
  )
}

function UserName({userName, onUserNameChange}) {
  return (
    <div>
      <label>Nom d'utilisateur : </label>
      <input
        value={userName}
        onChange={event => onUserNameChange(event.target.value)}
      />
    </div>
  )
}

// 🐶 accepte `computer` en props
function Content({userName, computer}) {
  return (
    <div>
      {/* ⛏️ surprime ce libellé */}
      Salut <b>{userName}</b> ! ton ordi préféré est <b>{computer}</b>
      {/* Salut <b>{userName}</b>, ton ordinateur préféré est <b>{computer}</b> */}
    </div>
  )
}
function App() {
  // 🐶 ajoute useState 'computer'

  const [computer, setComputer] = React.useState('MacBookPro')
  const [userName, setUserName] = React.useState('')
  return (
    <div>
      {/* 🐶 passe computer et onComputerChange en props */}
      <MyBestComputer computer={computer} onComputerChange={setComputer} />
      <UserName userName={userName} onUserNameChange={setUserName} />
      {/* 🐶 passe le prop computer ici */}
      <Content computer={computer} userName={userName} />
    </div>
  )
}
export default App
