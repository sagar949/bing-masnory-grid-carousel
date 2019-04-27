import React from 'react';
import Tooltip from '../../Common/Tooltip/Tooltip';
import styles from './ProductCard.module.css';

const getRandomPrice = price => {
  return Math.ceil(Math.random() * price) + price + 100;
};

const types = ['normal', 'wide', 'tall'];
const getRandomstyling = () => {
  const styleType = types[Math.floor(Math.random() * 3)];
  let style = '';
  let cardStyle = '';
  let detailsStyle = styles.NormalItemDetails;

  switch (styleType) {
    case 'tall':
      style = styles.Tall;
      cardStyle = styles.TallItem;
      detailsStyle = styles.TallItemDetails;
      break;
    case 'wide':
      style = styles.Wide;
      cardStyle = styles.WideItem;
      detailsStyle = styles.WideItemDetails;
      break;
    case 'normal':
      style = ' ';
      cardStyle = styles.NormalItem;
      detailsStyle = styles.NormalItemDetails;
      break;

    default:
      style = ' ';
      cardStyle = styles.TallItem;
      detailsStyle = styles.NormalItemDetails;
      break;
  }
  return { style, cardStyle, detailsStyle };
};

const ProductCard = props => {
  const { name, price, imgUrl } = props;
  const html = (
    <div
      className={styles.HoveredCard}
      onClick={() => window.open('https://www.amazon.com', '_blank')}
    >
      <div className={styles.HoveredCardImage}>
        <img src={imgUrl} alt="Product" />
      </div>
      <div className={styles.HoveredBasicDetails}>
        <p>{name}</p>
        <p className={styles.Discount}>${getRandomPrice(price)}</p>
        <p className={styles.Price}>${price}</p>
        <p className={styles.Owner}>Macy's</p>
      </div>
      <div className={styles.SeeMore}>
        <p>See More {name}</p> <i className="fas fa-chevron-right" />
      </div>
    </div>
  );
  const { style, cardStyle, detailsStyle } = getRandomstyling();
  return (
    <Tooltip render={html} style={style}>
      <div
        className={cardStyle}
        onClick={() => window.open('https://www.amazon.com', '_blank')}
      >
        <div>
          <img src={imgUrl} alt="Product" />
        </div>
        <div className={detailsStyle}>
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </div>
    </Tooltip>
  );
};

export default ProductCard;
