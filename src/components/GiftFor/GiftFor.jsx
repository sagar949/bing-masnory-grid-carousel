import React from 'react';
import classes from './GiftFor.module.css';
import GiftForButton from './GiftForButton/GiftForButton';
const GiftFor = ({ onGiftForChange, activeType }) => {
  return (
    <div className={classes.Container}>
      <GiftForButton
        onGiftForChange={onGiftForChange}
        type="All"
        styleClass="user"
        activeType={activeType}
      />
      <GiftForButton
        onGiftForChange={onGiftForChange}
        type="Men"
        styleClass="male"
        activeType={activeType}
      />
      <GiftForButton
        onGiftForChange={onGiftForChange}
        type="Women"
        styleClass="female"
        activeType={activeType}
      />
      <GiftForButton
        onGiftForChange={onGiftForChange}
        type="Kids"
        styleClass="child"
        activeType={activeType}
      />
      {/* <GiftForButton
        onGiftForChange={onGiftForChange}
        type="Teen"
        styleClass="user-graduate"
        activeType={activeType}
      /> */}
      <GiftForButton
        onGiftForChange={onGiftForChange}
        type="Elderly"
        styleClass="book-reader"
        activeType={activeType}
      />
      <GiftForButton
        onGiftForChange={onGiftForChange}
        type="Friends"
        styleClass="user-friends"
        activeType={activeType}
      />
    </div>
  );
};

export default GiftFor;
