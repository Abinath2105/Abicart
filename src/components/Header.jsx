// // components/Header.js
// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="logo">
//           <h1>ShopCart</h1>
//           <span className="tagline">India's Online Shopping Destination</span>
//         </div>
        
//         <div className="header-actions">
//           <div className="user-menu">
//             <button className="header-btn">
//               <i className="fas fa-user"></i>
//               <span>Login</span>
//             </button>
//             <button className="header-btn">
//               <i className="fas fa-shopping-cart"></i>
//               <span>Cart</span>
//               <span className="cart-count">3</span>
//             </button>
//           </div>
//         </div>
//       </div>
      
//       <nav className="categories">
//         <ul>
//           <li><a href="#"><i className="fas fa-mobile-alt"></i> Mobiles</a></li>
//           <li><a href="#"><i className="fas fa-laptop"></i> Electronics</a></li>
//           <li><a href="#"><i className="fas fa-tshirt"></i> Fashion</a></li>
//           <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
//           <li><a href="#"><i className="fas fa-car"></i> Appliances</a></li>
//           <li><a href="#"><i className="fas fa-utensils"></i> Grocery</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;









// components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ user, onLoginClick, onLogout, cartCount, onCartClick, onCategorySelect, selectedCategory }) => {
  const categories = [
    'All',
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

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>AbiCart</h1>
          <span className="tagline">India's Online Shopping Destination</span>
        </div>
        
        <div className="header-actions">
          {user ? (
            <div className="user-profile">
              <div className="user-info">
                <img src={user.avatar} alt={user.name} className="user-avatar" />
                <div className="user-details">
                  <span className="user-name">Hi, {user.name.split(' ')[0]}</span>
                  <span className="user-email">{user.email}</span>
                </div>
              </div>
              <button className="header-btn logout-btn" onClick={onLogout}>
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <button className="header-btn login-btn" onClick={onLoginClick}>
              <i className="fas fa-user"></i>
              <span>Login</span>
            </button>
          )}
          
          <button className="header-btn cart-btn" onClick={onCartClick}>
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
      
      <nav className="categories">
        <ul>
          {categories.map(category => (
            <li key={category}>
              <button 
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => onCategorySelect(category)}
              >
                {getCategoryIcon(category)} {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const getCategoryIcon = (category) => {
  const icons = {
    'All': 'fas fa-th',
    'Mobiles': 'fas fa-mobile-alt',
    'Electronics': 'fas fa-laptop',
    'Fashion': 'fas fa-tshirt',
    'Home & Kitchen': 'fas fa-home',
    'Appliances': 'fas fa-car',
    'Grocery': 'fas fa-utensils',
    'Beauty': 'fas fa-spa',
    'Sports': 'fas fa-running',
    'Books': 'fas fa-book'
  };
  return <i className={icons[category] || 'fas fa-tag'}></i>;
};

export default Header;