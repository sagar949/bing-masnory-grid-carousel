const products = [
  {
    id: 1,
    name: 'Basket Ball',
    isTrending: false,
    category: 'Sports',
    price: 250,
    for: 'Women',
    imgUrl: 'https://purepng.com/public/uploads/large/basket-ball-oip.png'
  },
  {
    id: 2,
    name: 'Basket Ball',
    isTrending: false,
    category: 'Sports',
    price: 100,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/basket-ball-oip.png'
  },
  {
    id: 3,
    name: 'Camera',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/nikon-camera-hfr.png'
  },
  {
    id: 4,
    name: 'Chair',
    isTrending: false,
    category: 'HomeDecor',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 5,
    name: 'Camera',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/nikon-camera-hfr.png'
  },
  {
    id: 6,
    name: 'Camera',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://purepng.com/public/uploads/large/nikon-camera-hfr.png'
  },
  {
    id: 7,
    name: 'Camera',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/nikon-camera-hfr.png'
  },
  {
    id: 8,
    name: 'Camera',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://purepng.com/public/uploads/large/nikon-camera-hfr.png'
  },
  {
    id: 9,
    name: 'Camera',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://purepng.com/public/uploads/large/nikon-camera-hfr.png'
  },
  {
    id: 10,
    name: 'Camera',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://purepng.com/public/uploads/large/nikon-camera-hfr.png'
  },
  {
    id: 11,
    name: 'Camera',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://purepng.com/public/uploads/large/nikon-camera-hfr.png'
  },
  {
    id: 12,
    name: 'Camera',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://purepng.com/public/uploads/large/nikon-camera-hfr.png'
  },
  {
    id: 13,
    name: 'Camera',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/nikon-camera-hfr.png'
  },
  {
    id: 14,
    name: 'Camera',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://purepng.com/public/uploads/large/nikon-camera-hfr.png'
  },
  {
    id: 15,
    name: 'Camera',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://purepng.com/public/uploads/large/nikon-camera-hfr.png'
  },
  {
    id: 16,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 17,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 18,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 19,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 20,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 21,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 22,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 23,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 24,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 25,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 26,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 27,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 28,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 29,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 30,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 31,
    name: 'Chair',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://purepng.com/public/uploads/large/arm-chair-kra.png'
  },
  {
    id: 32,
    name: 'Basket Ball',
    isTrending: false,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/basket-ball-oip.png'
  },
  {
    id: 33,
    name: 'Basket Ball',
    isTrending: false,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/basket-ball-oip.png'
  },
  {
    id: 34,
    name: 'Basket Ball',
    isTrending: false,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/basket-ball-oip.png'
  },
  {
    id: 35,
    name: 'Basket Ball',
    isTrending: false,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/basket-ball-oip.png'
  },
  {
    id: 36,
    name: 'Basket Ball',
    isTrending: false,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/basket-ball-oip.png'
  },
  {
    id: 37,
    name: 'Basket Ball',
    isTrending: false,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/basket-ball-oip.png'
  },
  {
    id: 38,
    name: 'Basket Ball',
    isTrending: true,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/basket-ball-oip.png'
  },
  {
    id: 39,
    name: 'Basket Ball',
    isTrending: true,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/basket-ball-oip.png'
  },
  {
    id: 40,
    name: 'Basket Ball',
    isTrending: true,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://purepng.com/public/uploads/large/basket-ball-oip.png'
  },
  {
    id: 41,
    name: 'Curtains',
    isTrending: true,
    category: 'HomeDecor',
    price: 300,
    for: 'Elderly',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-curtainscurtainsdrapepiece-of-clothcovering-1701527923445lk8ec.png'
  },
  {
    id: 42,
    name: 'Curtains',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-curtainscurtainsdrapepiece-of-clothcovering-1701527923445lk8ec.png'
  },
  {
    id: 43,
    name: 'Curtains',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-curtainscurtainsdrapepiece-of-clothcovering-1701527923445lk8ec.png'
  },
  {
    id: 44,
    name: 'Curtains',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-curtainscurtainsdrapepiece-of-clothcovering-1701527923445lk8ec.png'
  },
  {
    id: 45,
    name: 'Basket Ball',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-curtainscurtainsdrapepiece-of-clothcovering-1701527923445lk8ec.png'
  },
  {
    id: 46,
    name: 'Basket Ball',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-curtainscurtainsdrapepiece-of-clothcovering-1701527923445lk8ec.png'
  },
  {
    id: 47,
    name: 'Basket Ball',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-curtainscurtainsdrapepiece-of-clothcovering-1701527923445lk8ec.png'
  },
  {
    id: 48,
    name: 'Basket Ball',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-curtainscurtainsdrapepiece-of-clothcovering-1701527923445lk8ec.png'
  },
  {
    id: 49,
    name: 'Basket Ball',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-curtainscurtainsdrapepiece-of-clothcovering-1701527923445lk8ec.png'
  },
  {
    id: 50,
    name: 'Basket Ball',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-curtainscurtainsdrapepiece-of-clothcovering-1701527923445lk8ec.png'
  },
  {
    id: 51,
    name: 'Basket Ball',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-curtainscurtainsdrapepiece-of-clothcovering-1701527923445lk8ec.png'
  },
  {
    id: 53,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl:
      'https://purepng.com/public/uploads/large/hands-holding-table-tennis-of-racket-and-ball-ovk.png'
  },
  {
    id: 54,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl:
      'https://purepng.com/public/uploads/large/hands-holding-table-tennis-of-racket-and-ball-ovk.png'
  },
  {
    id: 55,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl:
      'https://purepng.com/public/uploads/large/hands-holding-table-tennis-of-racket-and-ball-ovk.png'
  },
  {
    id: 56,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl:
      'https://purepng.com/public/uploads/large/hands-holding-table-tennis-of-racket-and-ball-ovk.png'
  },
  {
    id: 57,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl:
      'https://purepng.com/public/uploads/large/hands-holding-table-tennis-of-racket-and-ball-ovk.png'
  },
  {
    id: 58,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl:
      'https://purepng.com/public/uploads/large/hands-holding-table-tennis-of-racket-and-ball-ovk.png'
  },
  {
    id: 59,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl:
      'https://purepng.com/public/uploads/large/hands-holding-table-tennis-of-racket-and-ball-ovk.png'
  },
  {
    id: 60,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl:
      'https://purepng.com/public/uploads/large/hands-holding-table-tennis-of-racket-and-ball-ovk.png'
  },
  {
    id: 61,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl:
      'https://purepng.com/public/uploads/large/hands-holding-table-tennis-of-racket-and-ball-ovk.png'
  },
  {
    id: 62,
    name: 'Fan',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-vintage-table-fanelectronics-fan-941524662344zwfx1.png'
  },
  {
    id: 63,
    name: 'Fan',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-vintage-table-fanelectronics-fan-941524662344zwfx1.png'
  },
  {
    id: 64,
    name: 'Fan',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-vintage-table-fanelectronics-fan-941524662344zwfx1.png'
  },
  {
    id: 65,
    name: 'Fan',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-vintage-table-fanelectronics-fan-941524662344zwfx1.png'
  },
  {
    id: 66,
    name: 'Fan',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-vintage-table-fanelectronics-fan-941524662344zwfx1.png'
  },
  {
    id: 67,
    name: 'Fan',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-vintage-table-fanelectronics-fan-941524662344zwfx1.png'
  },
  {
    id: 68,
    name: 'Fan',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-vintage-table-fanelectronics-fan-941524662344zwfx1.png'
  },
  {
    id: 69,
    name: 'Fan',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-vintage-table-fanelectronics-fan-941524662344zwfx1.png'
  },
  {
    id: 70,
    name: 'Fan',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-vintage-table-fanelectronics-fan-941524662344zwfx1.png'
  },
  {
    id: 71,
    name: 'Fan',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-vintage-table-fanelectronics-fan-941524662344zwfx1.png'
  },
  {
    id: 72,
    name: 'Fan',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl:
      'https://purepng.com/public/uploads/large/purepng.com-vintage-table-fanelectronics-fan-941524662344zwfx1.png'
  },
  {
    id: 73,
    name: 'Bag',
    isTrending: true,
    category: 'Sports',
    price: 25,
    for: 'Friends',
    imgUrl:
      'https://purepng.com/public/uploads/large/hands-holding-table-tennis-of-racket-and-ball-ovk.png'
  },
  {
    id: 74,
    name: 'Bag',
    isTrending: true,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 75,
    name: 'Bag',
    isTrending: true,
    category: 'Lifestyle',
    price: 25,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 76,
    name: 'Bag',
    isTrending: true,
    category: 'Lifestyle',
    price: 25,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 77,
    name: 'Bag',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 78,
    name: 'Bag',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 79,
    name: 'Bag',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 80,
    name: 'Bag',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 81,
    name: 'Bag',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 82,
    name: 'Bag',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 83,
    name: 'Bag',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 84,
    name: 'Bag',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 85,
    name: 'Bag',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 86,
    name: 'Bag',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 87,
    name: 'Bag',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 88,
    name: 'Bag',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 89,
    name: 'Bag',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://purepng.com/public/uploads/large/ladies-hand-bag-psc.png'
  },
  {
    id: 90,
    name: 'Bag',
    isTrending: false,
    category: 'Sports',
    price: 100,
    for: 'Friends',
    imgUrl:
      'https://purepng.com/public/uploads/large/hands-holding-table-tennis-of-racket-and-ball-ovk.png'
  }
];

export default products;
