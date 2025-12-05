// components/Pagination.js
import React from 'react';
import './Pagination.css';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  productsPerPage,
  onProductsPerPageChange,
  totalProducts
}) => {
  const pageNumbers = [];
  const maxVisiblePages = 5;

  // Calculate page numbers to show
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleFirst = () => {
    onPageChange(1);
  };

  const handleLast = () => {
    onPageChange(totalPages);
  };

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <div className="products-per-page">
          <label htmlFor="perPage">Products per page:</label>
          <select
            id="perPage"
            value={productsPerPage}
            onChange={(e) => onProductsPerPageChange(e.target.value)}
            className="per-page-select"
          >
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
            <option value="15">15</option>
          </select>
        </div>
        <div className="page-info">
          Page {currentPage} of {totalPages} ({totalProducts} total products)
        </div>
      </div>

      <div className="pagination-controls">
        <button
          className="page-btn first-btn"
          onClick={handleFirst}
          disabled={currentPage === 1}
        >
          <i className="fas fa-angle-double-left"></i>
        </button>
        
        <button
          className="page-btn prev-btn"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <i className="fas fa-chevron-left"></i> Prev
        </button>

        <div className="page-numbers">
          {startPage > 1 && (
            <>
              <button
                className={`page-btn ${1 === currentPage ? 'active' : ''}`}
                onClick={() => onPageChange(1)}
              >
                1
              </button>
              {startPage > 2 && <span className="ellipsis">...</span>}
            </>
          )}

          {pageNumbers.map(number => (
            <button
              key={number}
              className={`page-btn ${number === currentPage ? 'active' : ''}`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          ))}

          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <span className="ellipsis">...</span>}
              <button
                className={`page-btn ${totalPages === currentPage ? 'active' : ''}`}
                onClick={() => onPageChange(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}
        </div>

        <button
          className="page-btn next-btn"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next <i className="fas fa-chevron-right"></i>
        </button>
        
        <button
          className="page-btn last-btn"
          onClick={handleLast}
          disabled={currentPage === totalPages}
        >
          <i className="fas fa-angle-double-right"></i>
        </button>
      </div>

      <div className="go-to-page">
        <label htmlFor="goToPage">Go to page:</label>
        <input
          type="number"
          id="goToPage"
          min="1"
          max={totalPages}
          defaultValue={currentPage}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              const page = parseInt(e.target.value);
              if (page >= 1 && page <= totalPages) {
                onPageChange(page);
              }
            }
          }}
          className="page-input"
        />
        <button
          className="go-btn"
          onClick={() => {
            const input = document.getElementById('goToPage');
            const page = parseInt(input.value);
            if (page >= 1 && page <= totalPages) {
              onPageChange(page);
            }
          }}
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default Pagination;