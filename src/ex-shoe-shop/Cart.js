import React, { Component } from "react";

export default class Cart extends Component {
  renderTbody = () => {
    return this.props.cart.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <img style={{ width: "50px" }} src={item.image} alt="" />
          </td>
          <td>{item.price * item.number}$</td>
          <td>
            <button
              onClick={() => {
                this.props.handleDecreaseQuantity(item);
              }}
              className="btn btn-danger"
            >
              <i class="fa fa-minus-circle"></i>
            </button>
            {item.number}
            <button
              onClick={() => {
                this.props.handleIncreaseQuantity(item);
              }}
              className="btn btn-success"
            >
              <i class="fa fa-plus-square"></i>
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{this.renderTbody()}</tbody>
      </table>
    );
  }
}
