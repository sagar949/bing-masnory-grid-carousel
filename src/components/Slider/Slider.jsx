import React from 'react';
import classes from './Slider.module.css';
const Slider = ({ onSliderChange, sliderValue }) => {
  return (
    <div className={classes.Container}>
      <p className={classes.Title}>SET PRICE</p>
      <input
        className={classes.Slider}
        type="range"
        value={sliderValue}
        min={25}
        max={125}
        step={25}
        onChange={onSliderChange}
      />
      <div className={classes.Steps}>
        <p>$25</p>
        <p>$50 </p>
        <p>$100</p>
        <p>$1000</p>
        <p>$1000+</p>
      </div>
    </div>
  );
};

export default Slider;
