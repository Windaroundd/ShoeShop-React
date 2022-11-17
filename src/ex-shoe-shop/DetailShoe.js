import React, { Component } from "react";

export default class DetailShoe extends Component {
  render() {
    let { id, name, description, price, image } = this.props.detail;
    return (
      <div className="row mt-5 p-5 alert-secondary text-left">
        <img className="col-3" src={image} alt="" />
        <div className="col-9">
          <p>ID:{id} </p>
          <p>Name:{name}</p>
          <p>Desc: {description}</p>
          <p>Price:{price} </p>
          <p></p>
        </div>
      </div>
    );
  }
}
