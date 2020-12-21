import React from "react";
import "./Product.css";
import { connect } from "react-redux";
import { addProductToBasket } from "./actions/postBasket";
import { uniqueId } from "lodash";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    console.log("Adding");
    e.preventDefault();
    const product = {
      id: this.props.id,
      title: this.props.title,
      image: this.props.image,
      price: this.props.price,
      rating: this.props.rating,
    };
    this.props.addProductToBasket(product);
  }

  render() {
    const { key, id, title, image, price, rating } = this.props;
    return (
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array.from(Array(rating), (e, i) => {
              return <p key={uniqueId()}>⭐</p>;
            })}
          </div>
        </div>
        <img src={image} alt="" />
        <button onClick={this.onClick}>Add to Basket</button>
      </div>
    );
  }
}

export default connect(null, { addProductToBasket })(Product);
