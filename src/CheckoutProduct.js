import "./CheckoutProduct.css";
import { removeProductFromBasket } from "./actions/postBasket";
import { connect } from "react-redux";
import { uniqueId } from "lodash";

function CheckoutProduct({
  id,
  title,
  image,
  price,
  rating,
  removeProductFromBasket,
}) {
  const removeItem = () => {
    removeProductFromBasket(id);
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array.from(Array(rating), (e, i) => {
            return <p key={uniqueId()}>⭐</p>;
          })}
        </p>
        <button onClick={removeItem}>Remove from basket</button>
      </div>
    </div>
  );
}

export default connect(null, {
  removeProductFromBasket,
})(CheckoutProduct);
