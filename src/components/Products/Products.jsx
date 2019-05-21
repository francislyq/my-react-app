import React, { Component } from 'react';
import Product from './Product';
// import { connect } from "react-redux";

class Products extends Component {
  state = {};
  render() {
    return this.props.productsData.map(product => {
      return <Product productData={product} key={product.catId} />;
    });
  }
}

// function products() {
//   return this.props.productsData.map(product => {
//     <Product productData={product} key={product.catId} />;
//   });
// }

export default Products;
