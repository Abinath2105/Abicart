// // components/ProductList.js
// import React from 'react';
// import ProductCard from './ProductCard';
// import ProductRow from './ProductRow';
// import './ProductList.css';

// const ProductList = ({ products, viewMode, loading }) => {
//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="spinner"></div>
//         <p>Searching products...</p>
//       </div>
//     );
//   }

//   if (products.length === 0) {
//     return (
//       <div className="no-results">
//         <i className="fas fa-search fa-3x"></i>
//         <h3>No products found</h3>
//         <p>Try different keywords or check spelling</p>
//       </div>
//     );
//   }

//   return (
//     <div className={`product-list ${viewMode}`}>
//       {viewMode === 'grid' ? (
//         <div className="grid-view">
//           {products.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       ) : (
//         <div className="list-view">
//           <table className="product-table">
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>Rating</th>
//                 <th>Features</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map(product => (
//                 <ProductRow key={product.id} product={product} />
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductList;




































// // components/ProductList.js
// import React from 'react';
// import ProductCard from './ProductCard';
// import ProductRow from './ProductRow';
// import './ProductList.css';

// const ProductList = ({ products, viewMode, loading, onEdit, onDelete }) => {
//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="spinner"></div>
//         <p>Searching products...</p>
//       </div>
//     );
//   }

//   if (products.length === 0) {
//     return (
//       <div className="no-results">
//         <i className="fas fa-search fa-3x"></i>
//         <h3>No products found</h3>
//         <p>Try different keywords or check spelling</p>
//       </div>
//     );
//   }

//   return (
//     <div className={`product-list ${viewMode}`}>
//       {viewMode === 'grid' ? (
//         <div className="grid-view">
//           {products.map(product => (
//             <ProductCard 
//               key={product.id} 
//               product={product} 
//               onEdit={() => onEdit(product)}
//               onDelete={() => onDelete(product.id)}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="list-view">
//           <table className="product-table">
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>Category</th>
//                 <th>Stock</th>
//                 <th>Rating</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map(product => (
//                 <ProductRow 
//                   key={product.id} 
//                   product={product} 
//                   onEdit={() => onEdit(product)}
//                   onDelete={() => onDelete(product.id)}
//                 />
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductList;




// components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import ProductRow from './ProductRow';
import './ProductList.css';

const ProductList = ({ products, viewMode, loading, onEdit, onDelete, onAddToCart, onBuyNow, user }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Searching products...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="no-results">
        <i className="fas fa-search fa-3x"></i>
        <h3>No products found</h3>
        <p>Try different keywords or check spelling</p>
      </div>
    );
  }

  return (
    <div className={`product-list ${viewMode}`}>
      {viewMode === 'grid' ? (
        <div className="grid-view">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onEdit={() => onEdit(product)}
              onDelete={() => onDelete(product.id)}
              onAddToCart={() => onAddToCart(product)}
              onBuyNow={() => onBuyNow(product)}
              user={user}
            />
          ))}
        </div>
      ) : (
        <div className="list-view">
          <table className="product-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <ProductRow 
                  key={product.id} 
                  product={product} 
                  onEdit={() => onEdit(product)}
                  onDelete={() => onDelete(product.id)}
                  onAddToCart={() => onAddToCart(product)}
                  onBuyNow={() => onBuyNow(product)}
                  user={user}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductList;