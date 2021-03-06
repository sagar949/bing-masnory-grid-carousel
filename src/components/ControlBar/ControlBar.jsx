import React from 'react';
import Category from '../Category/Category';
import GiftFor from './../GiftFor/GiftFor';
import Slider from './../Slider/Slider';
import styles from './ControlBar.module.css';

const ControlBar = ({
  onCategoryChange,
  onGiftForChange,
  activeType,
  onSliderChange,
  priceRange,
  sliderValue
}) => {
  return (
    <>
      <div className={styles.ControlBar}>
        <span className={styles.Title}>Christmas Gifts</span>
        <Category onCategoryChange={onCategoryChange} />
        <GiftFor onGiftForChange={onGiftForChange} activeType={activeType} />
        <Slider onSliderChange={onSliderChange} sliderValue={sliderValue} />
      </div>
    </>
  );
};

export default ControlBar;
