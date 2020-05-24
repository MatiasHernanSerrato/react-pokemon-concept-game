import React, { useState } from 'react';
import classNames from 'classnames';

import './style.css';

const Character = (props) => {
  const [restLife, setRestLife] = useState(100);
  // const [character, setCharacter] = useState(null);
  const entireLife = 100;
  const styles = classNames('character', {
    isMainCharacter: props.isMainCharacter,
    isEnemy: props.isEnemy,
  });
  return (
    <div className='characterContainer'>
      <div className='characterLife'>{`${restLife}/${entireLife}`}</div>
      {
        <img
          className={styles}
          draggable={false}
          src={props.selectedCharacter}
          alt='selected character here'
        />
      }
    </div>
  );
};

Character.defaultProps = {
  selectedCharacter: 'mi pene',
  isMainCharacter: false,
  isEnemy: false,
};

export default Character;
