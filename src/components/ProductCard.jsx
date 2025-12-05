// // components/ProductCard.js
// import React from 'react';
// import './ProductCard.css';

// const ProductCard = ({ product }) => {
//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 >= 0.5;
    
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<i key={i} className="fas fa-star"></i>);
//     }
    
//     if (hasHalfStar) {
//       stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
//     }
    
//     const emptyStars = 5 - stars.length;
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
//     }
    
//     return stars;
//   };

//   return (
//     <div className="product-card">
//       <div className="product-image">
//         <img src={product.image} alt={product.name} />
//         <span className="discount-badge">{product.discount}% off</span>
//       </div>
//       <div className="product-details">
//         <h3 className="product-name">{product.name}</h3>
//         <p className="product-description">{product.description}</p>
        
//         <div className="product-rating">
//           <span className="rating-stars">
//             {renderStars(product.rating)}
//           </span>
//           <span className="rating-count">({product.reviews})</span>
//         </div>
        
//         <div className="product-price">
//           <span className="current-price">₹{product.price}</span>
//           <span className="original-price">₹{product.originalPrice}</span>
//           <span className="discount">{product.discount}% off</span>
//         </div>
        
//         <div className="product-features">
//           {product.features.map((feature, index) => (
//             <span key={index} className="feature-tag">{feature}</span>
//           ))}
//         </div>
        
//         <div className="product-actions">
//           <button className="btn-add-to-cart">
//             <i className="fas fa-shopping-cart"></i> Add to Cart
//           </button>
//           <button className="btn-buy-now">
//             <i className="fas fa-bolt"></i> Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;













// // components/ProductCard.js
// import React from 'react';
// import './ProductCard.css';

// const ProductCard = ({ product, onEdit, onDelete }) => {
//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 >= 0.5;
    
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<i key={i} className="fas fa-star"></i>);
//     }
    
//     if (hasHalfStar) {
//       stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
//     }
    
//     const emptyStars = 5 - stars.length;
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
//     }
    
//     return stars;
//   };

//   return (
//     <div className="product-card">
//       <div className="product-image">
//         <img src={product.image} alt={product.name} />
//         <span className="discount-badge">{product.discount}% off</span>
//         <div className="product-actions-overlay">
//           <button className="action-btn edit-btn" onClick={() => onEdit(product)}>
//             <i className="fas fa-edit"></i>
//           </button>
//           <button className="action-btn delete-btn" onClick={() => onDelete(product.id)}>
//             <i className="fas fa-trash"></i>
//           </button>
//         </div>
//       </div>
//       <div className="product-details">
//         <div className="category-badge">
//           {product.category}
//         </div>
//         <h3 className="product-name">{product.name}</h3>
//         <p className="product-description">{product.description}</p>
        
//         <div className="product-rating">
//           <span className="rating-stars">
//             {renderStars(product.rating)}
//           </span>
//           <span className="rating-count">({product.reviews})</span>
//         </div>
        
//         <div className="product-price">
//           <span className="current-price">₹{product.price.toLocaleString()}</span>
//           <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
//           <span className="discount">{product.discount}% off</span>
//         </div>
        
//         <div className="stock-info">
//           <span className={`stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
//             {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
//           </span>
//         </div>
        
//         <div className="product-features">
//           {product.features && product.features.slice(0, 3).map((feature, index) => (
//             <span key={index} className="feature-tag">{feature}</span>
//           ))}
//         </div>
        
//         <div className="product-actions">
//           <button className="btn-add-to-cart">
//             <i className="fas fa-shopping-cart"></i> Add to Cart
//           </button>
//           <button className="btn-buy-now">
//             <i className="fas fa-bolt"></i> Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;










// components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onEdit, onDelete, onAddToCart, onBuyNow, user }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="discount-badge">{product.discount}% off</span>
        {user && (
          <div className="product-actions-overlay">
            <button className="action-btn edit-btn" onClick={() => onEdit(product)} title="Edit Product">
              <i className="fas fa-edit"></i>
            </button>
            <button className="action-btn delete-btn" onClick={() => onDelete(product.id)} title="Delete Product">
              <i className="fas fa-trash"></i>
            </button>
          </div>
        )}
      </div>
      <div className="product-details">
        <div className="category-badge">
          {product.category}
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-rating">
          <span className="rating-stars">
            {renderStars(product.rating)}
          </span>
          <span className="rating-count">({product.reviews})</span>
        </div>
        
        <div className="product-price">
          <span className="current-price">₹{(product.price || 0).toLocaleString()}</span>
          <span className="original-price">₹{(product.originalPrice || product.price || 0).toLocaleString()}</span>
          {product.discount > 0 && (
            <span className="discount">{product.discount}% off</span>
          )}
        </div>
        
        <div className="stock-info">
          <span className={`stock-status ${(product.stock || 0) > 0 ? 'in-stock' : 'out-of-stock'}`}>
            {(product.stock || 0) > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
        </div>
        
        <div className="product-features">
          {product.features && product.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>
        
        <div className="product-actions">
          <button 
            className="btn-add-to-cart" 
            onClick={() => onAddToCart(product)}
            disabled={(product.stock || 0) <= 0}
            title={(product.stock || 0) <= 0 ? 'Out of stock' : 'Add to cart'}
          >
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </button>
          <button 
            className="btn-buy-now" 
            onClick={() => onBuyNow(product)}
            disabled={(product.stock || 0) <= 0}
            title={(product.stock || 0) <= 0 ? 'Out of stock' : 'Buy now'}
          >
            <i className="fas fa-bolt"></i> Buy Now
          </button>
        </div>
        
        <div className="product-meta">
          <span className="meta-item">
            <i className="fas fa-shipping-fast"></i> Free Delivery
          </span>
          <span className="meta-item">
            <i className="fas fa-shield-alt"></i> 1 Year Warranty
          </span>
          <span className="meta-item">
            <i className="fas fa-undo"></i> 7-Day Return
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;