import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as IconImage } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

function CartIcon({ toggleCartHidden }) {
  const handleClick = () => {
    toggleCartHidden();
  };

  return (
    <div className="cart-icon" onClick={handleClick}>
      <IconImage className="icon-image" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
