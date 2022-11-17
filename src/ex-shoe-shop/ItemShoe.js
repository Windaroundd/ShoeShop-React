import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { image, name, price } = this.props.data;
    return (
      <div className="col-3 p-1">
        <div className="card text-left h-100">
          <img className="card-img-top" src={image} alt />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h2 className="card-text">{price}$</h2>
          </div>
          <button
            className="btn btn-secondary"
            onClick={() => {
              this.props.handleChangeDetailShoe(this.props.data);
            }}
          >
            Xem chi tiet
          </button>
          <button
            onClick={() => {
              this.props.handleBuyShoe(this.props.data);
            }}
            className="btn btn-danger"
          >
            Chon mua
          </button>
        </div>
      </div>
    );
  }
}
