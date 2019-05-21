import React, { Component } from 'react';

class Product extends Component {
  state = {
    qty: 1
  };

  handleQty = event => {
    let qty = event.target.value;
    this.setState({
      qty
    });
  };

  addOneQty = event => {
    this.setState({
      qty: this.state.qty + 1
    });
  };

  render() {
    // console.log("input", this.props.productData);
    var { catId, name } = this.props.productData;

    return (
      <div className="col-md-3" id="{catId}">
        <img
          alt={this.props.productData.name}
          className="product-img"
          src={`https://picsum.photos/200/230?random=${Math.floor(
            Math.random() * 100 + 1
          )}`}
        />
        <div>{this.props.productData.name}</div>
        <form className="form-group">
          <label>QTY</label>
          <input
            name="qty"
            className="form-control"
            value={this.state.qty}
            onChange={this.handleQty}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.addOneQty}
          >
            Add Quantity
          </button>
        </form>
      </div>
    );
  }
}

export default Product;
