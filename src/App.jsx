import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/home/home.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createCheckUserSessionAction } from "./redux/user/user.actions";
import "./App.css";

class App extends Component {
  // unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(createCheckUserSessionAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
