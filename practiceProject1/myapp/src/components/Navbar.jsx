import React, { useState } from 'react';

function Navbar() {
  const [showCartModal, setShowCartModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const toggleCartModal = () => setShowCartModal(!showCartModal);
  const toggleSearchModal = () => setShowSearchModal(!showSearchModal);

  return (
    <div>
      {/* Embedded CSS */}
      <style>{`
        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          margin-left: 10px;
          font-size: 18px;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }

        .modal-content {
          background: white;
          padding: 20px 30px;
          border-radius: 8px;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 0 20px rgba(0,0,0,0.3);
        }

        .modal-content input {
          width: 100%;
          padding: 8px;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        .modal-content button {
          background: #000;
          color: #fff;
          padding: 8px 16px;
          border: none;
          cursor: pointer;
          border-radius: 4px;
        }

        .modal-content button:hover {
          background: #444;
        }
      `}</style>

      <div className="hero_area">
        {/* header section starts */}
        <header className="header_section">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="/">
              <span>Giftos</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>

            <div className="collapse navbar-collapse innerpage_navbar" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shop">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/why">Why Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/testimonial">Testimonial</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact Us</a>
                </li>
              </ul>

              <div className="user_option">
                <button onClick={toggleCartModal} className="icon-btn">
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                </button>

                <button onClick={toggleSearchModal} className="icon-btn">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </nav>
        </header>
        {/* end header section */}
      </div>
      {/* end hero area */}

      {/* Cart Modal */}
      {showCartModal && (
        <div className="modal-overlay" onClick={toggleCartModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>Your Cart</h4>
            <p>Your cart is currently empty.</p>
            <button onClick={toggleCartModal}>Close</button>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {showSearchModal && (
        <div className="modal-overlay" onClick={toggleSearchModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>Search</h4>
            <input type="text" placeholder="Type to search..." />
            <button onClick={toggleSearchModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
