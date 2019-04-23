import React, { Component } from 'react';
import ProductCards from './../../components/ProductCards/ProductCards';
import styles from './Carousel.module.css';
import products from './../../store/products';
import ControlBar from './../../components/ControlBar/ControlBar';
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.productsRef = React.createRef();
  }

  state = {
    products: [],
    filteredProducts: [],
    category: 'All',
    priceRange: 10000,
    sliderValue: 125,
    giftFor: 'All',
    scrollLeft: 0,
    showRightArrow: true,
    showLeftArrow: true
  };

  onLeftClick = e => {
    e.preventDefault();
    console.log(this.productsRef.current.scrollWidth);
    this.productsRef.current.scrollBy({
      left: -400,
      behavior: 'smooth'
    });
  };

  onRigthtClick = e => {
    e.preventDefault();
    // console.log(this.productsRef.current.scrollLeft);
    console.log(this.productsRef.current.scrollWidth);

    this.productsRef.current.scrollBy({
      left: 400,
      behavior: 'smooth'
    });
  };

  onCategoryChange = event => {
    const category = event.target.value;

    this.applyFilters(
      category,
      this.state.giftFor,
      this.state.priceRange,
      this.state.sliderValue
    );
  };

  onGiftForChange = giftfor => {
    let giftValue;
    if (giftfor === this.state.giftFor) {
      giftValue = 'All';
    } else {
      giftValue = giftfor;
    }

    this.applyFilters(
      this.state.category,
      giftValue,
      this.state.priceRange,
      this.state.sliderValue
    );
  };

  onSliderChange = event => {
    event.preventDefault();
    const value = event.target.value;
    let priceRange = this.state.priceRange;
    if (+value === 25) {
      priceRange = 25;
    } else if (+value === 50) {
      priceRange = 50;
    } else if (+value === 75) {
      priceRange = 100;
    } else if (+value === 100) {
      priceRange = 1000;
    } else if (+value === 125) {
      priceRange = 10000;
    } else {
      priceRange = 25;
    }

    this.applyFilters(
      this.state.category,
      this.state.giftFor,
      priceRange,
      value
    );
  };

  applyFilters = (category, giftValue, priceRange, sliderValue) => {
    let productsByCategory;
    if (category === 'All') {
      productsByCategory = this.state.products;
    } else if (category === 'Trending') {
      productsByCategory = this.state.products.filter(p => {
        return p.isTrending;
      });
    } else {
      productsByCategory = this.state.products.filter(p => {
        return p.category === category;
      });
    }
    let filteredProductsByGift;
    if (giftValue === 'All') {
      filteredProductsByGift = productsByCategory;
    } else {
      filteredProductsByGift = productsByCategory.filter(p => {
        return p.for === giftValue;
      });
    }
    let filteredProductsByPrice = filteredProductsByGift.filter(p => {
      return p.price <= priceRange;
    });

    const filteredProductList = filteredProductsByPrice;
    this.setState({
      ...this.state,
      filteredProducts: filteredProductList,
      category: category,
      giftFor: giftValue,
      priceRange: priceRange,
      sliderValue: sliderValue
    });
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      products: products,
      filteredProducts: products
    });
  }

  render() {
    const showLeftArrow = this.state.showLeftArrow ? ' ' : styles.Hide;
    const showRightArrow = this.state.showRightArrow ? ' ' : styles.Hide;
    return (
      <div>
        <div className={styles.Carousel}>
          <div
            className={[styles.LeftArrow, showLeftArrow].join(' ')}
            onClick={this.onLeftClick}
          >
            <i className="fas fa-chevron-left fa-2x" />
          </div>
          <div className={styles.ProductsContainer}>
            <div className={styles.ControlBar}>
              <ControlBar
                className="Stickey"
                onCategoryChange={this.onCategoryChange}
                onGiftForChange={this.onGiftForChange}
                activeType={this.state.giftFor}
                onSliderChange={this.onSliderChange}
                sliderValue={this.state.sliderValue}
              />
            </div>
            <div className={styles.Products} ref={this.productsRef}>
              <ProductCards products={this.state.filteredProducts} />
            </div>
          </div>
          <div
            className={[styles.RightArrow, showRightArrow].join(' ')}
            onClick={this.onRigthtClick}
          >
            <i className="fas fa-chevron-right fa-2x" />
          </div>
        </div>
      </div>
    );
  }
}
