import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { auth } from "./firebase";
import { compose } from "redux";
import { setLoginUser } from "./actions/postUser";

function Header({ setLoginUser, user, basket, history }) {
  const handleLogin = (e) => {
    e.preventDefault();
    if (user !== null) {
      //is Logged in needs to be Logged out.
      auth.signOut();
      setLoginUser(null);
    } else {
      history.push("/login");
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        {/* Logo */}
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.displayName : "Guest"}
            </span>
            <span className="header__optionLineTwo" onClick={handleLogin}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    basket: state.basket.basket,
    user: state.user,
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, { setLoginUser })
)(Header);
