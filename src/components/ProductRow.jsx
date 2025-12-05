// // components/ProductRow.js
// import React from 'react';
// import './ProductRow.css';

// const ProductRow = ({ product }) => {
//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (i <= Math.floor(rating)) {
//         stars.push(<i key={i} className="fas fa-star"></i>);
//       } else if (i === Math.ceil(rating) && rating % 1 > 0) {
//         stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
//       } else {
//         stars.push(<i key={i} className="far fa-star"></i>);
//       }
//     }
//     return stars;
//   };

//   return (
//     <tr className="product-row">
//       <td>
//         <div className="product-cell">
//           <img src={product.image} alt={product.name} className="product-img" />
//           <div className="product-info">
//             <h4>{product.name}</h4>
//             <p className="product-desc">{product.description}</p>
//             <div className="features-list">
//               {product.features.map((feature, index) => (
//                 <span key={index} className="feature-badge">{feature}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </td>
//       <td>
//         <div className="price-cell">
//           <div className="current-price">₹{product.price}</div>
//           <div className="original-price">₹{product.originalPrice}</div>
//           <div className="discount">{product.discount}% off</div>
//         </div>
//       </td>
//       <td>
//         <div className="rating-cell">
//           <div className="rating-stars">
//             {renderStars(product.rating)}
//           </div>
//           <div className="rating-text">{product.rating}/5</div>
//           <div className="reviews">{product.reviews} reviews</div>
//         </div>
//       </td>
//       <td>
//         <ul className="specs-list">
//           <li><i className="fas fa-check"></i> Free Delivery</li>
//           <li><i className="fas fa-check"></i> 1 Year Warranty</li>
//           <li><i className="fas fa-check"></i> 7-Day Replacement</li>
//           <li><i className="fas fa-check"></i> Top Brand</li>
//         </ul>
//       </td>
//       <td>
//         <div className="action-cell">
//           <button className="btn-cart">
//             <i className="fas fa-cart-plus"></i> Add
//           </button>
//           <button className="btn-buy">
//             <i className="fas fa-bolt"></i> Buy Now
//           </button>
//         </div>
//       </td>
//     </tr>
//   );
// };

// export default ProductRow;





















// // components/ProductRow.js
// import React from 'react';
// import './ProductRow.css';

// const ProductRow = ({ product, onEdit, onDelete }) => {
//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (i <= Math.floor(rating)) {
//         stars.push(<i key={i} className="fas fa-star"></i>);
//       } else if (i === Math.ceil(rating) && rating % 1 > 0) {
//         stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
//       } else {
//         stars.push(<i key={i} className="far fa-star"></i>);
//       }
//     }
//     return stars;
//   };

//   return (
//     <tr className="product-row">
//       <td>
//         <div className="product-cell">
//           <img src={product.image} alt={product.name} className="product-img" />
//           <div className="product-info">
//             <h4>{product.name}</h4>
//             <p className="product-desc">{product.description}</p>
//             <div className="features-list">
//               {product.features && product.features.slice(0, 2).map((feature, index) => (
//                 <span key={index} className="feature-badge">{feature}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </td>
//       <td>
//         <div className="price-cell">
//           <div className="current-price">₹{product.price.toLocaleString()}</div>
//           <div className="original-price">₹{product.originalPrice.toLocaleString()}</div>
//           <div className="discount">{product.discount}% off</div>
//         </div>
//       </td>
//       <td>
//         <div className="category-cell">
//           <span className="category-label">{product.category}</span>
//         </div>
//       </td>
//       <td>
//         <div className="stock-cell">
//           <span className={`stock-badge ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
//             {product.stock}
//           </span>
//         </div>
//       </td>
//       <td>
//         <div className="rating-cell">
//           <div className="rating-stars">
//             {renderStars(product.rating)}
//           </div>
//           <div className="rating-text">{product.rating}/5</div>
//         </div>
//       </td>
//       <td>
//         <div className="action-cell">
//           <button className="btn-edit" onClick={() => onEdit(product)}>
//             <i className="fas fa-edit"></i> Edit
//           </button>
//           <button className="btn-delete" onClick={() => onDelete(product.id)}>
//             <i className="fas fa-trash"></i> Delete
//           </button>
//           <div className="buy-actions">
//             <button className="btn-cart">
//               <i className="fas fa-cart-plus"></i>
//             </button>
//             <button className="btn-buy">
//               <i className="fas fa-bolt"></i>
//             </button>
//           </div>
//         </div>
//       </td>
//     </tr>
//   );
// };

// export default ProductRow;




// components/ProductRow.js
import React from 'react';
import './ProductRow.css';

const ProductRow = ({ product, onEdit, onDelete, onAddToCart, onBuyNow, user }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else if (i === Math.ceil(rating) && rating % 1 > 0) {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  return (
    <tr className="product-row">
      <td>
        <div className="product-cell">
          <img src={product.image} alt={product.name} className="product-img" />
          <div className="product-info">
            <h4>{product.name}</h4>
            <p className="product-desc">{product.description}</p>
            <div className="features-list">
              {product.features && product.features.slice(0, 2).map((feature, index) => (
                <span key={index} className="feature-badge">{feature}</span>
              ))}
            </div>
            <div className="product-meta-list">
              <span><i className="fas fa-shipping-fast"></i> Free Delivery</span>
              <span><i className="fas fa-undo"></i> 7-Day Return</span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="price-cell">
          <div className="current-price">₹{(product.price || 0).toLocaleString()}</div>
          <div className="original-price">₹{(product.originalPrice || product.price || 0).toLocaleString()}</div>
          {product.discount > 0 && (
            <div className="discount">{product.discount}% off</div>
          )}
        </div>
      </td>
      <td>
        <div className="category-cell">
          <span className="category-label">{product.category}</span>
        </div>
      </td>
      <td>
        <div className="stock-cell">
          <span className={`stock-badge ${(product.stock || 0) > 0 ? 'in-stock' : 'out-of-stock'}`}>
            {product.stock || 0}
          </span>
        </div>
      </td>
      <td>
        <div className="rating-cell">
          <div className="rating-stars">
            {renderStars(product.rating)}
          </div>
          <div className="rating-text">{product.rating}/5</div>
        </div>
      </td>
      <td>
        <div className="action-cell">
          {user && (
            <>
              <button className="btn-edit" onClick={() => onEdit(product)}>
                <i className="fas fa-edit"></i> Edit
              </button>
              <button className="btn-delete" onClick={() => onDelete(product.id)}>
                <i className="fas fa-trash"></i> Delete
              </button>
            </>
          )}
          <div className="buy-actions">
            <button 
              className="btn-cart" 
              onClick={() => onAddToCart(product)}
              disabled={(product.stock || 0) <= 0}
              title="Add to cart"
            >
              <i className="fas fa-cart-plus"></i>
            </button>
            <button 
              className="btn-buy" 
              onClick={() => onBuyNow(product)}
              disabled={(product.stock || 0) <= 0}
              title="Buy now"
            >
              <i className="fas fa-bolt"></i>
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;