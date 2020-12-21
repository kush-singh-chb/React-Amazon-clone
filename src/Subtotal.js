import React from "react";
import "./Subtotal.css";
import { default as NumberFormat } from "react-number-format";
import { connect } from "react-redux";

class Subtotal extends React.Component {
  render() {
    return (
      <div className="subtotal">
        <NumberFormat
          value={this.props.basket
            .map((i) => i.price)
            .reduce((a, b) => a + b, 0)}
          renderText={(value) => (
            <>
              <p>
                Subtotal ({this.props.basket.length} items):
                <strong>{value}</strong>
              </p>
              <small>
                <input type="checkbox" />
                <p>This order contains a gift</p>
              </small>
            </>
          )}
          decimalScale={2}
          displayType={"text"}
          thousandSeperator={true}
          prefix={"€"}
        />
        <button>Proceed to checkout</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  basket: state.basket.basket,
});

export default connect(mapStateToProps)(Subtotal);
