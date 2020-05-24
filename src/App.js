import React from 'react';

import BattleViewer from './components/BattleViewer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <a
          className='App-link'
          href='https://github.com/MatiasHernanSerrato'
          target='_blank'
          rel='noopener noreferrer'
        >
          Matt's repositories
        </a>
        <BattleViewer />
      </header>
    </div>
  );
}

export default App;
