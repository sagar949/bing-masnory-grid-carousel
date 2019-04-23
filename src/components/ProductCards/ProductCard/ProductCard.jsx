import React from 'react';
import styles from './ProductCard.module.css';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

const getRandomPrice = price => {
  return Math.ceil(Math.random() * price) + price + 100;
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
  return (
    <Tooltip
      // options
      //   position="bottom"
      arrow={false}
      animateFill={false}
      distance={1}
      trigger="mouseenter"
      //   followCursor={true}
      html={html}
      position="top"
      //   theme="transparent"
      interactive={true}
      interactiveBorder={1}
    >
      <div
        className={styles.Card}
        onClick={() => window.open('https://www.amazon.com', '_blank')}
      >
        <div className={styles.CardImage}>
          <img src={imgUrl} alt="Product" />
        </div>
        <div className={styles.BasicDetails}>
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </div>
    </Tooltip>

    // <ReactHover options={optionsCursorTrueWithMargin}>
    //   <ReactHover.Trigger type="trigger">
    //     <div className={styles.Card}>
    //       <img src="https://place-hold.it/100x150" alt="" />
    //     </div>
    //   </ReactHover.Trigger>
    //   <ReactHover.Hover type="hover">
    //     <div className={styles.Card}>
    //       <img src="https://place-hold.it/200x200" alt="" />
    //     </div>
    //   </ReactHover.Hover>
    // </ReactHover>
  );
};

export default ProductCard;
