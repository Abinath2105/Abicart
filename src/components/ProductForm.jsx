// // components/ProductForm.js
// import React, { useState, useEffect } from 'react';
// import './ProductForm.css';

// const ProductForm = ({ product, onSave, onClose, isEditing }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     originalPrice: '',
//     discount: '',
//     category: '',
//     stock: '',
//     features: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});

//   const categories = [
//     'Mobiles',
//     'Electronics',
//     'Fashion',
//     'Home & Kitchen',
//     'Appliances',
//     'Grocery',
//     'Beauty',
//     'Sports',
//     'Books'
//   ];

//   useEffect(() => {
//     if (product) {
//       setFormData({
//         name: product.name || '',
//         description: product.description || '',
//         price: product.price || '',
//         originalPrice: product.originalPrice || '',
//         discount: product.discount || '',
//         category: product.category || '',
//         stock: product.stock || '',
//         features: product.features ? product.features.join(', ') : ''
//       });
//     }
//   }, [product]);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Product name is required';
//     }

//     if (!formData.price) {
//       newErrors.price = 'Price is required';
//     } else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
//       newErrors.price = 'Price must be a positive number';
//     }

//     if (formData.originalPrice && 
//         (isNaN(formData.originalPrice) || parseFloat(formData.originalPrice) <= 0)) {
//       newErrors.originalPrice = 'Original price must be a positive number';
//     }

//     if (formData.discount && 
//         (isNaN(formData.discount) || parseFloat(formData.discount) < 0 || parseFloat(formData.discount) > 100)) {
//       newErrors.discount = 'Discount must be between 0 and 100';
//     }

//     if (!formData.category) {
//       newErrors.category = 'Category is required';
//     }

//     if (formData.stock && (isNaN(formData.stock) || parseInt(formData.stock) < 0)) {
//       newErrors.stock = 'Stock must be a non-negative number';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const handleBlur = (field) => {
//     setTouched(prev => ({
//       ...prev,
//       [field]: true
//     }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
    
//   //   if (validateForm()) {
//   //     const productData = {
//   //       name: formData.name.trim(),
//   //       description: formData.description.trim(),
//   //       price: parseFloat(formData.price),
//   //       originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : parseFloat(formData.price),
//   //       discount: formData.discount ? parseFloat(formData.discount) : 0,
//   //       category: formData.category,
//   //       stock: formData.stock ? parseInt(formData.stock) : 0,
//   //       features: formData.features ? formData.features.split(',').map(f => f.trim()).filter(f => f) : [],
//   //       image: product?.image || 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400' // Default image
//   //     };

//   //     // Auto-calculate discount if not provided but original price is
//   //     if (!formData.discount && formData.originalPrice && formData.price) {
//   //       const price = parseFloat(formData.price);
//   //       const original = parseFloat(formData.originalPrice);
//   //       const discount = Math.round(((original - price) / original) * 100);
//   //       productData.discount = discount;
//   //     }

//   //     onSave(productData);
//   //   }
//   // };



//   // Update the handleSubmit function in ProductForm.js
// const handleSubmit = (e) => {
//   e.preventDefault();
  
//   if (validateForm()) {
//     // Generate a default image URL based on category
//     const getDefaultImage = (category) => {
//       const categoryImages = {
//         'Mobiles': 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
//         'Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
//         'Fashion': 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400',
//         'Home & Kitchen': 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400',
//         'Appliances': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
//         'Grocery': 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
//         'Beauty': 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
//         'Sports': 'https://images.unsplash.com/photo-1536922246289-88c42f957773?w=400',
//         'Books': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400'
//       };
//       return categoryImages[category] || 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400';
//     };

//     const productData = {
//       name: formData.name.trim(),
//       description: formData.description.trim(),
//       price: parseFloat(formData.price),
//       originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : parseFloat(formData.price),
//       discount: formData.discount ? parseFloat(formData.discount) : 0,
//       category: formData.category,
//       stock: formData.stock ? parseInt(formData.stock) : 0,
//       features: formData.features ? formData.features.split(',').map(f => f.trim()).filter(f => f) : [],
//       rating: product?.rating || 4.0, // Default rating for new products
//       reviews: product?.reviews || 0, // Default reviews for new products
//       image: product?.image || getDefaultImage(formData.category) // Default image based on category
//     };

//     // Auto-calculate discount if not provided but original price is different
//     if (!formData.discount && formData.originalPrice && formData.price) {
//       const price = parseFloat(formData.price);
//       const original = parseFloat(formData.originalPrice);
//       if (original > price) {
//         const discount = Math.round(((original - price) / original) * 100);
//         productData.discount = discount;
//       }
//     }

//     onSave(productData);
//   }
// };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h2>{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
//           <button className="close-btn" onClick={onClose}>
//             <i className="fas fa-times"></i>
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="product-form">
//           <div className="form-grid">
//             <div className="form-group">
//               <label htmlFor="name">
//                 Product Name *
//                 {errors.name && touched.name && <span className="error-text">{errors.name}</span>}
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 onBlur={() => handleBlur('name')}
//                 className={errors.name && touched.name ? 'error' : ''}
//                 placeholder="Enter product name"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="price">
//                 Price (₹) *
//                 {errors.price && touched.price && <span className="error-text">{errors.price}</span>}
//               </label>
//               <input
//                 type="number"
//                 id="price"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 onBlur={() => handleBlur('price')}
//                 className={errors.price && touched.price ? 'error' : ''}
//                 placeholder="Enter price"
//                 min="0"
//                 step="0.01"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="originalPrice">
//                 Original Price (₹)
//                 {errors.originalPrice && touched.originalPrice && <span className="error-text">{errors.originalPrice}</span>}
//               </label>
//               <input
//                 type="number"
//                 id="originalPrice"
//                 name="originalPrice"
//                 value={formData.originalPrice}
//                 onChange={handleChange}
//                 onBlur={() => handleBlur('originalPrice')}
//                 className={errors.originalPrice && touched.originalPrice ? 'error' : ''}
//                 placeholder="Enter original price"
//                 min="0"
//                 step="0.01"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="discount">
//                 Discount (%)
//                 {errors.discount && touched.discount && <span className="error-text">{errors.discount}</span>}
//               </label>
//               <input
//                 type="number"
//                 id="discount"
//                 name="discount"
//                 value={formData.discount}
//                 onChange={handleChange}
//                 onBlur={() => handleBlur('discount')}
//                 className={errors.discount && touched.discount ? 'error' : ''}
//                 placeholder="Enter discount percentage"
//                 min="0"
//                 max="100"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="category">
//                 Category *
//                 {errors.category && touched.category && <span className="error-text">{errors.category}</span>}
//               </label>
//               <select
//                 id="category"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 onBlur={() => handleBlur('category')}
//                 className={errors.category && touched.category ? 'error' : ''}
//               >
//                 <option value="">Select a category</option>
//                 {categories.map(category => (
//                   <option key={category} value={category}>{category}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <label htmlFor="stock">
//                 Stock Quantity
//                 {errors.stock && touched.stock && <span className="error-text">{errors.stock}</span>}
//               </label>
//               <input
//                 type="number"
//                 id="stock"
//                 name="stock"
//                 value={formData.stock}
//                 onChange={handleChange}
//                 onBlur={() => handleBlur('stock')}
//                 className={errors.stock && touched.stock ? 'error' : ''}
//                 placeholder="Enter stock quantity"
//                 min="0"
//               />
//             </div>
//           </div>

//           <div className="form-group full-width">
//             <label htmlFor="description">
//               Description
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Enter product description"
//               rows="4"
//             />
//           </div>

//           <div className="form-group full-width">
//             <label htmlFor="features">
//               Features (comma-separated)
//             </label>
//             <input
//               type="text"
//               id="features"
//               name="features"
//               value={formData.features}
//               onChange={handleChange}
//               placeholder="e.g., 8GB RAM, 256GB Storage, 5G Support"
//             />
//             <small className="hint">Enter features separated by commas</small>
//           </div>

//           <div className="form-actions">
//             <button type="button" className="btn-cancel" onClick={onClose}>
//               Cancel
//             </button>
//             <button type="submit" className="btn-save">
//               {isEditing ? 'Update Product' : 'Add Product'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProductForm;














// components/ProductForm.js
import React, { useState, useEffect } from 'react';
import './ProductForm.css';

const ProductForm = ({ product, onSave, onClose, isEditing }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    originalPrice: '',
    discount: '',
    category: '',
    stock: '',
    features: '',
    rating: '',
    reviews: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const categories = [
    'Mobiles',
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Appliances',
    'Grocery',
    'Beauty',
    'Sports',
    'Books'
  ];

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        description: product.description || '',
        price: product.price || '',
        originalPrice: product.originalPrice || product.price || '',
        discount: product.discount || '',
        category: product.category || '',
        stock: product.stock || '',
        features: product.features ? product.features.join(', ') : '',
        rating: product.rating || '',
        reviews: product.reviews || ''
      });
    }
  }, [product]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Product name is required';
    }

    if (!formData.price) {
      newErrors.price = 'Price is required';
    } else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Price must be a positive number';
    }

    if (formData.originalPrice && 
        (isNaN(formData.originalPrice) || parseFloat(formData.originalPrice) <= 0)) {
      newErrors.originalPrice = 'Original price must be a positive number';
    }

    if (formData.discount && 
        (isNaN(formData.discount) || parseFloat(formData.discount) < 0 || parseFloat(formData.discount) > 100)) {
      newErrors.discount = 'Discount must be between 0 and 100';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (formData.stock && (isNaN(formData.stock) || parseInt(formData.stock) < 0)) {
      newErrors.stock = 'Stock must be a non-negative number';
    }

    if (formData.rating && (isNaN(formData.rating) || parseFloat(formData.rating) < 0 || parseFloat(formData.rating) > 5)) {
      newErrors.rating = 'Rating must be between 0 and 5';
    }

    if (formData.reviews && (isNaN(formData.reviews) || parseInt(formData.reviews) < 0)) {
      newErrors.reviews = 'Reviews must be a non-negative number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Generate a default image URL based on category
      const getDefaultImage = (category) => {
        const categoryImages = {
          'Mobiles': 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
          'Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
          'Fashion': 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400',
          'Home & Kitchen': 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400',
          'Appliances': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
          'Grocery': 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
          'Beauty': 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
          'Sports': 'https://images.unsplash.com/photo-1536922246289-88c42f957773?w=400',
          'Books': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400'
        };
        return categoryImages[category] || 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400';
      };

      const productData = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        price: parseFloat(formData.price),
        originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : parseFloat(formData.price),
        discount: formData.discount ? parseFloat(formData.discount) : 0,
        category: formData.category,
        stock: formData.stock ? parseInt(formData.stock) : 0,
        features: formData.features ? formData.features.split(',').map(f => f.trim()).filter(f => f) : [],
        rating: formData.rating ? parseFloat(formData.rating) : 4.0,
        reviews: formData.reviews ? parseInt(formData.reviews) : 0,
        image: product?.image || getDefaultImage(formData.category)
      };

      // Auto-calculate discount if not provided but original price is different
      if (!formData.discount && formData.originalPrice && formData.price) {
        const price = parseFloat(formData.price);
        const original = parseFloat(formData.originalPrice);
        if (original > price) {
          const discount = Math.round(((original - price) / original) * 100);
          productData.discount = discount;
        }
      }

      onSave(productData);
    }
  };

  const handleAutoCalculate = () => {
    if (formData.originalPrice && formData.price) {
      const price = parseFloat(formData.price);
      const original = parseFloat(formData.originalPrice);
      if (original > price) {
        const discount = Math.round(((original - price) / original) * 100);
        setFormData(prev => ({
          ...prev,
          discount: discount.toString()
        }));
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content product-form-modal">
        <div className="modal-header">
          <h2>{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="name">
                Product Name *
                {errors.name && touched.name && <span className="error-text">{errors.name}</span>}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur('name')}
                className={errors.name && touched.name ? 'error' : ''}
                placeholder="Enter product name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">
                Selling Price (₹) *
                {errors.price && touched.price && <span className="error-text">{errors.price}</span>}
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                onBlur={() => handleBlur('price')}
                className={errors.price && touched.price ? 'error' : ''}
                placeholder="Enter selling price"
                min="0"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label htmlFor="originalPrice">
                Original Price (₹)
                {errors.originalPrice && touched.originalPrice && <span className="error-text">{errors.originalPrice}</span>}
              </label>
              <div className="price-input-group">
                <input
                  type="number"
                  id="originalPrice"
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleChange}
                  onBlur={() => handleBlur('originalPrice')}
                  className={errors.originalPrice && touched.originalPrice ? 'error' : ''}
                  placeholder="Enter original price"
                  min="0"
                  step="0.01"
                />
                <button 
                  type="button" 
                  className="auto-calculate-btn"
                  onClick={handleAutoCalculate}
                  title="Auto-calculate discount"
                >
                  <i className="fas fa-calculator"></i>
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="discount">
                Discount (%)
                {errors.discount && touched.discount && <span className="error-text">{errors.discount}</span>}
              </label>
              <input
                type="number"
                id="discount"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                onBlur={() => handleBlur('discount')}
                className={errors.discount && touched.discount ? 'error' : ''}
                placeholder="Enter discount percentage"
                min="0"
                max="100"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">
                Category *
                {errors.category && touched.category && <span className="error-text">{errors.category}</span>}
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                onBlur={() => handleBlur('category')}
                className={errors.category && touched.category ? 'error' : ''}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="stock">
                Stock Quantity
                {errors.stock && touched.stock && <span className="error-text">{errors.stock}</span>}
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                onBlur={() => handleBlur('stock')}
                className={errors.stock && touched.stock ? 'error' : ''}
                placeholder="Enter stock quantity"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="rating">
                Rating (0-5)
                {errors.rating && touched.rating && <span className="error-text">{errors.rating}</span>}
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                onBlur={() => handleBlur('rating')}
                className={errors.rating && touched.rating ? 'error' : ''}
                placeholder="Enter rating (0-5)"
                min="0"
                max="5"
                step="0.1"
              />
            </div>

            <div className="form-group">
              <label htmlFor="reviews">
                Number of Reviews
                {errors.reviews && touched.reviews && <span className="error-text">{errors.reviews}</span>}
              </label>
              <input
                type="number"
                id="reviews"
                name="reviews"
                value={formData.reviews}
                onChange={handleChange}
                onBlur={() => handleBlur('reviews')}
                className={errors.reviews && touched.reviews ? 'error' : ''}
                placeholder="Enter number of reviews"
                min="0"
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              rows="4"
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="features">
              Features (comma-separated)
            </label>
            <input
              type="text"
              id="features"
              name="features"
              value={formData.features}
              onChange={handleChange}
              placeholder="e.g., 8GB RAM, 256GB Storage, 5G Support"
            />
            <small className="hint">Enter features separated by commas</small>
          </div>

          <div className="form-summary">
            <h4>Summary</h4>
            <div className="summary-grid">
              <div className="summary-item">
                <span>Category:</span>
                <span>{formData.category || 'Not selected'}</span>
              </div>
              <div className="summary-item">
                <span>Selling Price:</span>
                <span>{formData.price ? `₹${parseFloat(formData.price).toLocaleString()}` : 'Not set'}</span>
              </div>
              <div className="summary-item">
                <span>Original Price:</span>
                <span>{formData.originalPrice ? `₹${parseFloat(formData.originalPrice).toLocaleString()}` : 'Not set'}</span>
              </div>
              <div className="summary-item">
                <span>Discount:</span>
                <span>{formData.discount ? `${formData.discount}%` : '0%'}</span>
              </div>
              <div className="summary-item">
                <span>Stock:</span>
                <span>{formData.stock || 0} units</span>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-save">
              {isEditing ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;