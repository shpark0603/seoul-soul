import React from "react";
import { connect } from "react-redux";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

function CartDropdown({ items }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

const mapStateToProps = ({ cart: { items } }) => ({ items });

export default connect(mapStateToProps)(CartDropdown);
