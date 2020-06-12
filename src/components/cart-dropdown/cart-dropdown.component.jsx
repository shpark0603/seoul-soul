import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createToggleCartHiddenAction } from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";

function CartDropdown({ items, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <div className="empty-message">
            <span>Your cart is empty</span>
            <span role="img" aria-label="sad emoji">
              😥
            </span>
          </div>
        )}
      </div>
      <Button
        onClick={() => {
          dispatch(createToggleCartHiddenAction());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => ({ items: selectCartItems(state) });

export default withRouter(connect(mapStateToProps)(CartDropdown));
