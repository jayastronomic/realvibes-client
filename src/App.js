import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAuthUserSuccess } from "./actions/userActions";
import { removeAuthUser } from "./actions/userActions";
import { loggedIn } from "./actions/userActions";

import Nav from "./components/Nav";
import Home from "./components/Home";
const API = "http://localhost:3001/api/v1/logged_in";

class App extends Component {
  handleLogout = (obj) => {
    this.props.removeAuthUser(obj.user);
    this.props.loggedIn(obj.logged_in);
  };

  handleLogin = (obj) => {
    this.props.fetchAuthUserSuccess(obj.user);
    this.props.loggedIn(obj.logged_in);
  };

  loginStatus = () => {
    fetch(API, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj.logged_in) {
          this.handleLogin(resObj);
        } else {
          this.handleLogout(resObj);
        }
      });
  };

  componentDidMount() {
    this.loginStatus();
  }

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
    loggedInStatus: state.loggedIn,
  };
};

const mapDispatchToProps = {
  fetchAuthUserSuccess,
  loggedIn,
  removeAuthUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
