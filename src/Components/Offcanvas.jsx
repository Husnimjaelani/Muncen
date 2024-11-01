import React from 'react';
import { Link } from 'react-router-dom';
import '../style/offcanvas.css';

const OffCanvas = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 flex ${isOpen ? 'block' : 'hidden'}`}>
      {/* Background gelap */}
      <div className="bg-black bg-opacity-50 w-full" onClick={onClose}></div>
      
      {/* OffCanvas yang muncul dari kanan */}
      <div className={`bg-white w-80 shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="tpoffcanvas">
          <div className="tpoffcanvas__close-btn">
            <button className="close-btn" onClick={onClose}>
              <i className="icofont-close"></i>
            </button>
          </div>
          <div className="tpoffcanvas__logo offcanvas-logo">
            <Link to="/" onClick={onClose}>
              <img src="/assets/02.png" alt="Logo" />
            </Link>
          </div>
          <div className="tpoffcanvas__text offcanvas-content">
            <div className="main-canvas-inner">
              <div className="canvas-bar-post-list">
                {Array(4).fill().map((_, index) => (
                  <article key={index} className="post-block-style-wrapper post-block-template-two most-read-block-list">
                    <div className="post-block-style-inner post-block-list-style-inner">
                      <div className="post-block-media-wrap">
                        <Link to="post-single.html" onClick={onClose}>
                          <img src={`assets/media/image-${index + 1}.jpg`} alt="Post title" />
                        </Link>
                      </div>
                      <div className="post-block-content-wrap">
                        <div className="post-item-title">
                          <h2 className="post-title">
                            <Link to="post-single.html" onClick={onClose}>Rachel Maddow Will Go Mondays Only On MSNBC</Link>
                          </h2>
                        </div>
                        <div className="post-bottom-meta-list">
                          <div className="post-meta-author-box">
                            <Link to="#" onClick={onClose}>Cristiano</Link>
                          </div>
                          <div className="post-meta-date-box">
                            Sep 30
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="panel-nav-social">
                <a href="#" onClick={onClose}><i className="icofont-facebook"></i></a>
                <a href="#" onClick={onClose}><i className="icofont-twitter"></i></a>
                <a href="#" onClick={onClose}><i className="icofont-instagram"></i></a>
                <a href="#" onClick={onClose}><i className="icofont-linkedin"></i></a>
                <a href="#" onClick={onClose}><i className="icofont-youtube"></i></a>
              </div>
            </div>
            <div className="mobile-canvas-content">
              <div className="canvas-nav-menu-wrapper">
                {/* Tambahkan menu navigasi mobile di sini jika diperlukan */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default OffCanvas;
