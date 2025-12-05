// components/BuyNowModal.js
import React, { useState } from 'react';
import './BuyNowModal.css';

const BuyNowModal = ({ product, onClose, onPlaceOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod'
  });
  const [step, setStep] = useState(1); // 1: Address, 2: Payment, 3: Review
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    if (step === 1) {
      // Validate address form
      if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
        alert('Please fill all required fields');
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    onPlaceOrder();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step-content">
            <h3><i className="fas fa-map-marker-alt"></i> Delivery Address</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group full-width">
                <label>Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your complete address"
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                />
              </div>
              <div className="form-group">
                <label>Pincode *</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Enter pincode"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step-content">
            <h3><i className="fas fa-credit-card"></i> Payment Method</h3>
            <div className="payment-methods">
              <label className={`payment-option ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleChange}
                />
                <div className="payment-info">
                  <i className="fas fa-money-bill-wave"></i>
                  <div>
                    <h4>Cash on Delivery</h4>
                    <p>Pay when you receive the product</p>
                  </div>
                </div>
              </label>

              <label className={`payment-option ${formData.paymentMethod === 'card' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleChange}
                />
                <div className="payment-info">
                  <i className="fas fa-credit-card"></i>
                  <div>
                    <h4>Credit/Debit Card</h4>
                    <p>Pay securely with your card</p>
                  </div>
                </div>
              </label>

              <label className={`payment-option ${formData.paymentMethod === 'upi' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={formData.paymentMethod === 'upi'}
                  onChange={handleChange}
                />
                <div className="payment-info">
                  <i className="fas fa-mobile-alt"></i>
                  <div>
                    <h4>UPI</h4>
                    <p>Pay using UPI apps</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="step-content">
            <h3><i className="fas fa-clipboard-check"></i> Review Order</h3>
            <div className="order-review">
              <div className="product-review">
                <img src={product.image} alt={product.name} />
                <div className="review-details">
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <div className="review-price">
                    <span className="current">₹{product.price.toLocaleString()}</span>
                    {product.discount > 0 && (
                      <span className="discount">{product.discount}% off</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="order-summary">
                <h4>Order Summary</h4>
                <div className="summary-details">
                  <div className="summary-row">
                    <span>Product Price</span>
                    <span>₹{product.price.toLocaleString()}</span>
                  </div>
                  <div className="summary-row">
                    <span>Delivery</span>
                    <span className="free">FREE</span>
                  </div>
                  <div className="summary-row">
                    <span>Tax (18%)</span>
                    <span>₹{(product.price * 0.18).toLocaleString()}</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total Amount</span>
                    <span className="total-amount">
                      ₹{(product.price + (product.price * 0.18)).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="delivery-info">
                <h4>Delivery Address</h4>
                <p>{formData.name}</p>
                <p>{formData.address}</p>
                <p>{formData.city}, {formData.pincode}</p>
                <p>Phone: {formData.phone}</p>
              </div>

              <div className="payment-info-review">
                <h4>Payment Method</h4>
                <p>
                  {formData.paymentMethod === 'cod' && 'Cash on Delivery'}
                  {formData.paymentMethod === 'card' && 'Credit/Debit Card'}
                  {formData.paymentMethod === 'upi' && 'UPI'}
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content buy-now-modal">
        <div className="modal-header">
          <h2>Buy Now</h2>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="progress-steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <div className="step-circle">1</div>
            <span>Address</span>
          </div>
          <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <div className="step-circle">2</div>
            <span>Payment</span>
          </div>
          <div className={`step-line ${step >= 3 ? 'active' : ''}`}></div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-circle">3</div>
            <span>Review</span>
          </div>
        </div>

        {renderStep()}

        <div className="step-actions">
          {step > 1 && (
            <button className="btn-prev" onClick={handlePreviousStep}>
              <i className="fas fa-arrow-left"></i> Back
            </button>
          )}
          
          {step < 3 ? (
            <button className="btn-next" onClick={handleNextStep}>
              Continue <i className="fas fa-arrow-right"></i>
            </button>
          ) : (
            <button 
              className="btn-place-order" 
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Processing...
                </>
              ) : (
                <>
                  <i className="fas fa-check"></i> Place Order
                </>
              )}
            </button>
          )}
          
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;