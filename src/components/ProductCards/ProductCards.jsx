import React from 'react';
import styles from './ProductCards.module.css';
import ProductCard from './ProductCard/ProductCard';

const ProductCards = ({ products }) => {
  const productCards = products.map(p => {
    return <ProductCard key={p.id} {...p} />;
  });
  return <div className={styles.ProductCards}>{productCards}</div>;
};

export default ProductCards;
