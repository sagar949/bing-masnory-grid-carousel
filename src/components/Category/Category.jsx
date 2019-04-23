import React from 'react';
import styles from './Category.module.css';

const Category = ({ onCategoryChange }) => {
  return (
    <div className={styles.Category}>
      <p>SELECT CATEGORY</p>
      <select onChange={onCategoryChange}>
        <option value="All">All</option>
        <option value="Trending">Trending</option>
        <option value="Electronics">Electronics</option>
        <option value="HomeDecor">Home Decor</option>
        <option value="Sports">Sports</option>
        <option value="Appliances">Appliances</option>
        <option value="Lifestyle">Life Style</option>
      </select>
    </div>
  );
};

export default Category;
