import React from "react";
import { connect } from "react-redux";
import {
  createClearItemAction,
  createAddItemAction,
  createRemoveItemAction,
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

function CheckoutItem({ item, addItem, removeItem, clearItem }) {
  const { id, name, imageUrl, price, quantity } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={removeItem.bind(null, id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItem.bind(null, item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItem.bind(null, id)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (id) => dispatch(createClearItemAction(id)),
  addItem: (item) => dispatch(createAddItemAction(item)),
  removeItem: (id) => dispatch(createRemoveItemAction(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
