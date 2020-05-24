import React, { useState } from 'react';
import './style.css';
import Character from '../shared/Character';
import Modal from '../shared/Modal';
import { bulbasurSRC, charmanderSRC } from './services/fetchCharacter';

const avatarTurn = ['Bulbasaur', 'Charmander'];

const BattleViewer = (props) => {
  const [turn, setTurn] = useState(props.turn);
  const characterTurn = avatarTurn[turn];
  return (
    <div className='battleViewerContainer'>
      <div className='turn'>turno de: {characterTurn}</div>
      {turn === 0 && <Modal chooseAttack />}
      <div className='selectedCharacter'>
        <Character isMainCharacter selectedCharacter={bulbasurSRC} />
      </div>
      <div className='enemyCharacter'>
        <Character isEnemy selectedCharacter={charmanderSRC} />
      </div>
    </div>
  );
};
// 0 va a ser igual a Matt, 1 igual a quien sea
BattleViewer.defaultProps = {
  turn: 0,
};
export default BattleViewer;
