import React from 'react';
import './styles.css';

const Modal = (props) => {
  if (props.chooseAttack) {
    return (
      <div className='modalContainer'>
        <button>Atacar con paja</button>
        <button>Atacar con ganas</button>
        <button>Atacar con afaafaforte</button>
      </div>
    );
  }
  return <div className='modalContainer'>soy un modal</div>;
};

Modal.defaultProps = {
  chooseAttack: false,
};
export default Modal;
