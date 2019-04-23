import React from 'react';
import classes from './GiftForButton.module.css';

const GiftForButton = ({ onGiftForChange, type, styleClass, activeType }) => {
  let isActive = activeType === type ? classes.Active : '';
  return (
    <div
      className={[classes.GiftFor, isActive].join(' ')}
      onClick={() => onGiftForChange(type)}
    >
      <i className={`fas fa-${styleClass} fa-2x`} />
      <p>{type}</p>
    </div>
  );
};

export default GiftForButton;
