import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: "Rachel Maddow Will Go Mondays Only On MSNBC",
    image: "assets/media/brown-fashion.jpg",
    author: "Cristiano",
    date: "Sep 30",
    link: "/post-single"
  },
  {
    title: "Rachel Maddow Will Go Mondays Only On MSNBC",
    image: "assets/media/brown-fashion.jpg",
    author: "Cristiano",
    date: "Sep 30",
    link: "/post-single"
  },
  {
    title: "Rachel Maddow Will Go Mondays Only On MSNBC",
    image: "assets/media/classic-dress.jpg",
    author: "Cristiano",
    date: "Sep 30",
    link: "/post-single"
  },
  {
    title: "Rachel Maddow Will Go Mondays Only On MSNBC",
    image: "assets/media/sky-hat.jpg",
    author: "Cristiano",
    date: "Sep 30",
    link: "/post-single"
  }
];

const OffCanvas = ({ isOpen, toggleOffcanvas }) => {
  return (
    <div className={`tp-offcanvas-area ${isOpen ? 'block' : 'hidden'}`}>
      <div className="tpoffcanvas">
        <div className="tpoffcanvas__close-btn">
          <button className="close-btn" onClick={toggleOffcanvas}>
            <i className="icofont-close"></i>
          </button>
        </div>
        <div className="tpoffcanvas__logo offcanvas-logo">
          <Link to="/">
            <img src="assets/media/logo.svg" alt="Logo" />
          </Link>
        </div>
        <div className="tpoffcanvas__text offcanvas-content">
          <div className="main-canvas-inner">
            <div className="canvas-bar-post-list">
              {articles.map((article, index) => (
                <article key={index} className="post-block-style-wrapper post-block-template-two most-read-block-list">
                  <div className="post-block-style-inner post-block-list-style-inner">
                    <div className="post-block-media-wrap">
                      <Link to={article.link}>
                        <img src={article.image} alt="Post title" />
                      </Link>
                    </div>
                    <div className="post-block-content-wrap">
                      <div className="post-item-title">
                        <h2 className="post-title">
                          <Link to={article.link}>{article.title}</Link>
                        </h2>
                      </div>
                      <div className="post-bottom-meta-list">
                        <div className="post-meta-author-box">
                          <Link to="#">{article.author}</Link>
                        </div>
                        <div className="post-meta-date-box">
                          {article.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="panel-nav-social">
              <a href="#"><i className="icofont-facebook"></i></a>
              <a href="#"><i className="icofont-twitter"></i></a>
              <a href="#"><i className="icofont-instagram"></i></a>
              <a href="#"><i className="icofont-linkedin"></i></a>
              <a href="#"><i className="icofont-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay" onClick={toggleOffcanvas}></div>
    </div>
  );
};

export default OffCanvas;
