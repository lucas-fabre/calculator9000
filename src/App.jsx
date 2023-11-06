// TOUT LE TEMPS LIRE LA DOC EN ENTIER AVANT DE COMMENCER A CODER !!!

import './App.css'
import Main from './components/Main';

function App() {

  return (
      <div className='Global'>

          {/* h1 représente le titre de notre futur page */}
        <h1>Un voyage dans la glace</h1>

          {/* Main est le component principal qui est composé de tous les autres components (<Object1 />, <Object2 /> et <Object3 />) */}
          <Main />
      </div>
  )
}

export default App;

// Maintenant que tous les composants sont créés, nous allons pouvoir les modifier et les styliser dans le fichier App.css.