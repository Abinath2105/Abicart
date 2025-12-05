// components/CartSidebar.js
import React from 'react';
import './CartSidebar.css';

const CartSidebar = ({ cart, onClose, onUpdateQuantity, onRemoveItem, onClearCart, total, onCheckout }) => {
  const handleQuantityChange = (itemId, change) => {
    const item = cart.find(item => item.id === itemId);
    if (item) {
      const newQuantity = item.quantity + change;
      onUpdateQuantity(itemId, newQuantity);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-sidebar">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="empty-cart">
          <i className="fas fa-shopping-cart"></i>
          <h4>Your cart is empty</h4>
          <p>Add items to get started</p>
          <button className="btn-continue-shopping" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-sidebar">
      <div className="cart-header">
        <h3>Your Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</h3>
        <button className="close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <h4 className="item-name">{item.name}</h4>
              <p className="item-category">{item.category}</p>
              <div className="item-price">₹{item.price.toLocaleString()} × {item.quantity}</div>
              <div className="item-total">₹{(item.price * item.quantity).toLocaleString()}</div>
            </div>
            <div className="item-actions">
              <div className="quantity-control">
                <button 
                  className="qty-btn" 
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button 
                  className="qty-btn" 
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <button 
                className="btn-remove" 
                onClick={() => onRemoveItem(item.id)}
                title="Remove item"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span className="free">FREE</span>
        </div>
        <div className="summary-row">
          <span>Tax (18%)</span>
          <span>₹{(total * 0.18).toLocaleString()}</span>
        </div>
        <div className="summary-row total">
          <span>Total Amount</span>
          <span className="total-amount">
            ₹{(total + (total * 0.18)).toLocaleString()}
          </span>
        </div>

        <div className="cart-actions">
          <button className="btn-clear" onClick={onClearCart}>
            <i className="fas fa-trash"></i> Clear Cart
          </button>
          <button className="btn-checkout" onClick={onCheckout}>
            <i className="fas fa-lock"></i> Proceed to Checkout
          </button>
          <button className="btn-continue" onClick={onClose}>
            Continue Shopping
          </button>
        </div>

        <div className="cart-security">
          <p><i className="fas fa-shield-alt"></i> Secure checkout</p>
          <p><i className="fas fa-truck"></i> Free delivery on orders above ₹499</p>
          <p><i className="fas fa-undo"></i> Easy returns within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;