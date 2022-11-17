import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.shoeArr.map((item) => {
      return (
        <ItemShoe
          handleBuyShoe={this.props.handleAddToCart}
          handleChangeDetailShoe={this.props.handleChangeDetailShoe}
          data={item}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <div className="row">{this.renderListShoe()}</div>
      </div>
    );
  }
}
