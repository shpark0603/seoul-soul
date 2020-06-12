import React from "react";
import { connect } from "react-redux";
import { createToggleCartHiddenAction } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
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

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(createToggleCartHiddenAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
