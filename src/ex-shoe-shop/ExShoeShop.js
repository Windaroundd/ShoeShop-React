import React, { Component } from "react";
import { dataShoe } from "./DataShoe";
import ItemShoe from "./ItemShoe";
import DetailShoe from "./DetailShoe";
import Cart from "./Cart";
import ListShoe from "./ListShoe";

export default class ExShoeShop extends Component {
  state = {
    shoeArr: dataShoe,
    detail: dataShoe[0],
    cart: [],
  };

  handleChangeDetailShoe = (shoe) => {
    this.setState({ detail: shoe });
  };
  handleAddToCart = (shoe) => {
    let cloneCart = [...this.state.cart];
    let index = this.state.cart.findIndex((item) => {
      return item.id == shoe.id;
    });
    if (index == -1) {
      let cartItem = { ...shoe, number: 1 };
      cloneCart.push(cartItem);
    } else {
      cloneCart[index].number++;
    }
    this.setState({ cart: cloneCart });
  };
  handleIncreaseQuantity = (shoe) => {
    let index = this.state.cart.findIndex((item) => {
      return item.id == shoe.id;
    });
    if (index == -1) return;
    this.state.cart[index].number++;
    this.setState({ cart: this.state.cart });
  };
  handleDecreaseQuantity = (shoe) => {
    let index = this.state.cart.findIndex((item) => {
      return item.id == shoe.id;
    });
    if (index == -1) return;
    if (this.state.cart[index].number == 1) {
      this.state.cart.splice(index, 1);
    } else {
      this.state.cart[index].number--;
    }

    this.setState({ cart: this.state.cart });
  };
  render() {
    return (
      <div className="container py-5">
        <Cart
          handleDecreaseQuantity={this.handleDecreaseQuantity}
          handleIncreaseQuantity={this.handleIncreaseQuantity}
          cart={this.state.cart}
        />

        <ListShoe
          handleIncreaseQuantity={this.handleIncreaseQuantity}
          handleAddToCart={this.handleAddToCart}
          handleChangeDetailShoe={this.handleChangeDetailShoe}
          shoeArr={this.state.shoeArr}
        />
        <DetailShoe detail={this.state.detail} />
      </div>
    );
  }
}
