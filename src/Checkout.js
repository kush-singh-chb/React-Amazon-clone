import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { connect } from "react-redux";
import Subtotal from "./Subtotal";
import { uniqueId } from "lodash";

function Checkout({ basket, user }) {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/Events/2020/APDHF/XCM_CUTTLE_PD339-GBEN_Lead-Out-Holiday-Banner-Alt_1500x300_GB-en.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">
            {user ? <span>Hi {user?.displayName}! </span> : ""}Your Shopping
            Basket
          </h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={uniqueId()}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    basket: state.basket.basket,
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(Checkout);
