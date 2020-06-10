import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as IconImage } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

function CartIcon({ toggleCartHidden, itemCount }) {
  const handleClick = () => {
    toggleCartHidden();
  };

  return (
    <div className="cart-icon" onClick={handleClick}>
      <IconImage className="icon-image" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapStateToProps = ({ cart: { items } }) => ({
  itemCount: items.reduce((acc, cur) => acc + cur.quantity, 0),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
