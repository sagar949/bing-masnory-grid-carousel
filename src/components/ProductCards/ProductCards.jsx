import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import styles from './ProductCards.module.css';

const ProductCards = ({ products }) => {
  const productCards = products.map(p => {
    return <ProductCard key={p.id} {...p} />;
  });
  return <div className={styles.ProductCards}>{productCards}</div>;
};

export default ProductCards;
