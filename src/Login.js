import { Component, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { db, auth } from "./firebase";
import "./Login.css";
import { compose } from "redux";
import { setLoginUser } from "./actions/postUser";

function Login({ history, setLoginUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authResponse) => {
        console.log(authResponse.user.email);
        if (authResponse) {
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    console.log("register");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authResponse) => {
        if (authResponse) {
          auth.currentUser
            .updateProfile({
              displayName: name,
            })
            .then(() => {
              history.push("/");
            });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signin__button"
            type="submit"
            onClick={signIn}
          >
            Sign-in
          </button>
        </form>
        <p>Privacy Policy blah blah</p>
        <button className="login__register__button" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default compose(withRouter, connect(null, { setLoginUser }))(Login);
