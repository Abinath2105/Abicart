// // App.js
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import ProductList from './components/ProductList';
// import SearchBar from './components/SearchBar';
// import Header from './components/Header';
// import { productsData } from './data/productsData';

// function App() {
//   const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState(productsData);
//   const [loading, setLoading] = useState(false);

//   // Debounced search effect
//   useEffect(() => {
//     setLoading(true);
    
//     const timer = setTimeout(() => {
//       if (searchQuery.trim() === '') {
//         setFilteredProducts(productsData);
//       } else {
//         const filtered = productsData.filter(product =>
//           product.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setFilteredProducts(filtered);
//       }
//       setLoading(false);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [searchQuery]);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   const toggleViewMode = (mode) => {
//     setViewMode(mode);
//   };

//   return (
//     <div className="App">
//       <Header />
//       <div className="container">
//         <div className="search-section">
//           <SearchBar onSearch={handleSearch} loading={loading} />
//           <div className="view-toggle">
//             <button
//               className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
//               onClick={() => toggleViewMode('grid')}
//             >
//               <i className="fas fa-th"></i> Grid View
//             </button>
//             <button
//               className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
//               onClick={() => toggleViewMode('list')}
//             >
//               <i className="fas fa-list"></i> List View
//             </button>
//           </div>
//         </div>
        
//         <div className="results-info">
//           <p>Showing {filteredProducts.length} products</p>
//           {searchQuery && <p>Search results for: "{searchQuery}"</p>}
//         </div>

//         <ProductList 
//           products={filteredProducts} 
//           viewMode={viewMode} 
//           loading={loading}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;































// // App.js
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import ProductList from './components/ProductList';
// import SearchBar from './components/SearchBar';
// import Header from './components/Header';
// import ProductForm from './components/ProductForm';
// import Pagination from './components/Pagination';
// import { productsData } from './data/productsData';

// function App() {
//   const [viewMode, setViewMode] = useState('grid');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [products, setProducts] = useState(productsData);
//   const [filteredProducts, setFilteredProducts] = useState(productsData);
//   const [loading, setLoading] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [showForm, setShowForm] = useState(false);
  
//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage, setProductsPerPage] = useState(6);
//   const [totalPages, setTotalPages] = useState(Math.ceil(filteredProducts.length / productsPerPage));

//   // Update total pages when filtered products change
//   useEffect(() => {
//     setTotalPages(Math.ceil(filteredProducts.length / productsPerPage));
//     setCurrentPage(1); // Reset to first page when search changes
//   }, [filteredProducts, productsPerPage]);

//   // Get current products for pagination
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   // Debounced search effect
//   // useEffect(() => {
//   //   setLoading(true);
    
//   //   const timer = setTimeout(() => {
//   //     if (searchQuery.trim() === '') {
//   //       setFilteredProducts(products);
//   //     } else {
//   //       const filtered = products.filter(product =>
//   //         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   //         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   //         product.category.toLowerCase().includes(searchQuery.toLowerCase())
//   //       );
//   //       setFilteredProducts(filtered);
//   //     }
//   //     setLoading(false);
//   //   }, 500);

//   //   return () => clearTimeout(timer);
//   // }, [searchQuery, products]);


//   // Updated search effect in App.js
// useEffect(() => {
//   setLoading(true);
  
//   const timer = setTimeout(() => {
//     if (searchQuery.trim() === '') {
//       setFilteredProducts(products);
//     } else {
//       const query = searchQuery.toLowerCase().trim();
//       const filtered = products.filter(product => {
//         // Safely check all fields that might be undefined
//         const name = product.name ? product.name.toLowerCase() : '';
//         const description = product.description ? product.description.toLowerCase() : '';
//         const category = product.category ? product.category.toLowerCase() : '';
        
//         return name.includes(query) || 
//                description.includes(query) || 
//                category.includes(query);
//       });
//       setFilteredProducts(filtered);
//     }
//     setLoading(false);
//   }, 500);

//   return () => clearTimeout(timer);
// }, [searchQuery, products]);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   const toggleViewMode = (mode) => {
//     setViewMode(mode);
//   };

//   const handleAddProduct = () => {
//     setEditingProduct(null);
//     setShowForm(true);
//   };

//   const handleEditProduct = (product) => {
//     setEditingProduct(product);
//     setShowForm(true);
//   };

//   const handleDeleteProduct = (productId) => {
//     const updatedProducts = products.filter(product => product.id !== productId);
//     setProducts(updatedProducts);
//     setFilteredProducts(updatedProducts);
//   };

//   const handleSaveProduct = (productData) => {
//     if (editingProduct) {
//       // Update existing product
//       const updatedProducts = products.map(product =>
//         product.id === editingProduct.id ? { ...productData, id: editingProduct.id } : product
//       );
//       setProducts(updatedProducts);
//       setFilteredProducts(updatedProducts);
//     } else {
//       // Add new product
//       const newProduct = {
//         ...productData,
//         id: Date.now(), // Generate unique ID
//         rating: 4.0, // Default rating for new products
//         reviews: 0, // Default reviews for new products
//         features: productData.features || [] // Ensure features array exists
//       };
//       const updatedProducts = [...products, newProduct];
//       setProducts(updatedProducts);
//       setFilteredProducts(updatedProducts);
//     }
//     setShowForm(false);
//     setEditingProduct(null);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//     setEditingProduct(null);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleProductsPerPageChange = (value) => {
//     setProductsPerPage(parseInt(value));
//     setCurrentPage(1);
//   };

//   return (
//     <div className="App">
//       <Header />
//       <div className="container">
//         <div className="controls-section">
//           <div className="search-section">
//             <SearchBar onSearch={handleSearch} loading={loading} />
//             <div className="controls-right">
//               <div className="view-toggle">
//                 <button
//                   className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
//                   onClick={() => toggleViewMode('grid')}
//                 >
//                   <i className="fas fa-th"></i> Grid
//                 </button>
//                 <button
//                   className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
//                   onClick={() => toggleViewMode('list')}
//                 >
//                   <i className="fas fa-list"></i> List
//                 </button>
//               </div>
//               <button className="btn-add-product" onClick={handleAddProduct}>
//                 <i className="fas fa-plus"></i> Add Product
//               </button>
//             </div>
//           </div>
//         </div>
        
//         <div className="results-info">
//           <p>Showing {filteredProducts.length} products 
//             ({indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length})
//           </p>
//           {searchQuery && <p>Search results for: "{searchQuery}"</p>}
//         </div>

//         <ProductList 
//           products={currentProducts} 
//           viewMode={viewMode} 
//           loading={loading}
//           onEdit={handleEditProduct}
//           onDelete={handleDeleteProduct}
//         />

//         {filteredProducts.length > 0 && (
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={handlePageChange}
//             productsPerPage={productsPerPage}
//             onProductsPerPageChange={handleProductsPerPageChange}
//             totalProducts={filteredProducts.length}
//           />
//         )}
//       </div>

//       {showForm && (
//         <ProductForm
//           product={editingProduct}
//           onSave={handleSaveProduct}
//           onClose={handleCloseForm}
//           isEditing={!!editingProduct}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

























// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import Pagination from './components/Pagination';
import LoginModal from './components/LoginModal';
import CartSidebar from './components/CartSidebar';
import BuyNowModal from './components/BuyNowModal';
import { productsData } from './data/productsData';

function App() {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [loading, setLoading] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showBuyNow, setShowBuyNow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(Math.ceil(filteredProducts.length / productsPerPage));

  // Update total pages when filtered products change
  useEffect(() => {
    setTotalPages(Math.ceil(filteredProducts.length / productsPerPage));
    setCurrentPage(1); // Reset to first page when search changes
  }, [filteredProducts, productsPerPage]);

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Filter by category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  // Debounced search effect
  useEffect(() => {
    setLoading(true);
    
    const timer = setTimeout(() => {
      if (searchQuery.trim() === '') {
        if (selectedCategory === 'All') {
          setFilteredProducts(products);
        } else {
          const filtered = products.filter(product => product.category === selectedCategory);
          setFilteredProducts(filtered);
        }
      } else {
        const query = searchQuery.toLowerCase().trim();
        const baseProducts = selectedCategory === 'All' ? products : 
          products.filter(product => product.category === selectedCategory);
        
        const filtered = baseProducts.filter(product => {
          const name = (product.name || '').toLowerCase();
          const description = (product.description || '').toLowerCase();
          const category = (product.category || '').toLowerCase();
          const features = (product.features || []).join(' ').toLowerCase();
          
          return name.includes(query) || 
                 description.includes(query) || 
                 category.includes(query) ||
                 features.includes(query);
        });
        setFilteredProducts(filtered);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, products, selectedCategory]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  const handleAddProduct = () => {
    if (!user) {
      setShowLogin(true);
      return;
    }
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEditProduct = (product) => {
    if (!user) {
      setShowLogin(true);
      return;
    }
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const handleSaveProduct = (productData) => {
    if (editingProduct) {
      // Update existing product
      const updatedProducts = products.map(product =>
        product.id === editingProduct.id ? { ...productData, id: editingProduct.id } : product
      );
      setProducts(updatedProducts);
    } else {
      // Add new product
      const newProduct = {
        ...productData,
        id: Date.now(),
        rating: productData.rating || 4.0,
        reviews: productData.reviews || 0,
        features: productData.features || []
      };
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
    }
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  // Cart functions
  const addToCart = (product) => {
    if (!user) {
      setShowLogin(true);
      return;
    }
    
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    
    // Show cart notification
    showNotification('Product added to cart!');
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Buy Now function
  const handleBuyNow = (product) => {
    if (!user) {
      setShowLogin(true);
      return;
    }
    
    setSelectedProduct(product);
    setShowBuyNow(true);
  };

  const handlePlaceOrder = () => {
    showNotification('Order placed successfully!');
    setShowBuyNow(false);
  };

  // Login function
  const handleLogin = (credentials) => {
    // Mock login - in real app, this would be an API call
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: credentials.email,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100'
    };
    setUser(mockUser);
    setShowLogin(false);
    showNotification('Logged in successfully!');
  };

  const handleLogout = () => {
    setUser(null);
    showNotification('Logged out successfully!');
  };

  // Category filter
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  // Notification function
  const showNotification = (message) => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #28a745;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 9999;
      animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  };

  // Add CSS for notification animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleProductsPerPageChange = (value) => {
    setProductsPerPage(parseInt(value));
    setCurrentPage(1);
  };

  return (
    <div className="App">
      <Header 
        user={user}
        onLoginClick={() => setShowLogin(true)}
        onLogout={handleLogout}
        cartCount={getCartCount()}
        onCartClick={() => setShowCart(true)}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      
      <div className="container">
        <div className="controls-section">
          <div className="search-section">
            <SearchBar onSearch={handleSearch} loading={loading} />
            <div className="controls-right">
              <div className="view-toggle">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => toggleViewMode('grid')}
                  title="Grid View"
                >
                  <i className="fas fa-th"></i> Grid
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => toggleViewMode('list')}
                  title="List View"
                >
                  <i className="fas fa-list"></i> List
                </button>
              </div>
              {user && (
                <button className="btn-add-product" onClick={handleAddProduct}>
                  <i className="fas fa-plus"></i> Add Product
                </button>
              )}
            </div>
          </div>
        </div>
        
        <div className="results-info">
          <div className="category-filter-info">
            <span className="category-label">
              <i className="fas fa-filter"></i> Category: {selectedCategory}
            </span>
            {selectedCategory !== 'All' && (
              <button 
                className="clear-filter"
                onClick={() => handleCategorySelect('All')}
              >
                Clear Filter
              </button>
            )}
          </div>
          <p>Showing {filteredProducts.length} products 
            ({indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length})
          </p>
          {searchQuery && <p>Search results for: "{searchQuery}"</p>}
        </div>

        <ProductList 
          products={currentProducts} 
          viewMode={viewMode} 
          loading={loading}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
          onAddToCart={addToCart}
          onBuyNow={handleBuyNow}
          user={user}
        />

        {filteredProducts.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            productsPerPage={productsPerPage}
            onProductsPerPageChange={handleProductsPerPageChange}
            totalProducts={filteredProducts.length}
          />
        )}
      </div>

      {/* Modals */}
      {showForm && (
        <ProductForm
          product={editingProduct}
          onSave={handleSaveProduct}
          onClose={handleCloseForm}
          isEditing={!!editingProduct}
        />
      )}

      {showLogin && (
        <LoginModal
          onLogin={handleLogin}
          onClose={() => setShowLogin(false)}
        />
      )}

      {showCart && (
        <CartSidebar
          cart={cart}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          onClearCart={clearCart}
          total={getCartTotal()}
          onCheckout={() => {
            setShowCart(false);
            showNotification('Proceeding to checkout...');
          }}
        />
      )}

      {showBuyNow && selectedProduct && (
        <BuyNowModal
          product={selectedProduct}
          onClose={() => setShowBuyNow(false)}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
    </div>
  );
}

export default App;