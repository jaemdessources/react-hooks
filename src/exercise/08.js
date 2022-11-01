// useEffect HTTP Avancée
// http://localhost:3000/alone/exercise/08.js

/* eslint-disable no-unused-vars */
import React from 'react'

// 🐶 Tu vas avoir besoin d'appeler l'API Marvel et d'utiliser 'MarvelPersoView'
// pour afficher le detail d'un personnage Marvel.
// importe donc 'fetchMarvel' 'MarvelPersoView' depuis '../marvel'
import {fetchMarvel, MarvelPersoView, MarvelSearchForm} from '../marvel'
import '../08-styles.css'

function MarvelDetails({marvelName}) {
  const [marvel, setMarvel] = React.useState()
  const [error, setError] = React.useState()
  React.useEffect(() => {
    if (!marvelName) {
      return
    }
    setMarvel(null)
    fetchMarvel(marvelName)
      .then(marvel => setMarvel(marvel))
      .catch(error => setError(error))
  }, [marvelName])

  if (error) throw error
  if (!marvelName) return 'Entre un nom de personnage Marvel'
  if (!marvel) return 'Chargement...'
  return <MarvelPersoView marvel={marvel} />
}

class ErrorBoundary extends React.Component {
  state = {error: null}

  static getDerivedStateFromError(error) {
    return {error}
  }
  render() {
    const {FallBackComponent} = this.props
    if (this.state.error) {
      return <FallBackComponent error={this.state.error} />
    }
    return this.props.children
  }
}

const FallBackComponent = ({error}) => {
  return (
    <div style={{color: 'red'}}>
      Oops ! an error occured while loading your marvel character because:
      <pre style={{color: 'grey'}}>{error.message}</pre>
    </div>
  )
}

function App() {
  const [marvelName, setMarvelName] = React.useState('')

  const handleSearch = name => {
    setMarvelName(name)
  }
  return (
    <div className="marvel-app">
      <MarvelSearchForm marvelName={marvelName} onSearch={handleSearch} />
      <div className="marvel-detail">
        <ErrorBoundary key={marvelName} FallBackComponent={FallBackComponent}>
          <MarvelDetails marvelName={marvelName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}
export default App
