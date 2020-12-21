import "./App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setLoginUser } from "./actions/postUser";
import Login from "./Login";
import { uniqueId } from "lodash";
import { auth } from "./firebase";

function App({ setLoginUser }) {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser !== null) {
        setLoginUser(authUser);
      } else {
        setLoginUser(null);
      }
    });
  }, []);
  return (
    //BEM convention
    <Router>
      <div className="App">
        <Switch>
          <Route key={uniqueId} path="/checkout">
            <Header key={uniqueId} />
            <Checkout />
          </Route>
          <Route key={uniqueId} path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header key={uniqueId} />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket.basket,
    user: state.user,
  };
};

export default connect(mapStateToProps, { setLoginUser })(App);
