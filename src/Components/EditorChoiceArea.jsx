import React from 'react';
import { Link } from 'react-router-dom';

const todaysPickArticles = [
  {
    title: "Our company creates with a hobby",
    author: "Laura Tanenbaum",
    date: "Sep 22",
    link: "post-single.html",
    number: 1
  },
  {
    title: "Sayaka Murata Inhabits a Planet of Her Own",
    author: "Laura Tanenbaum",
    date: "Sep 22",
    link: "post-single.html",
    number: 2
  },
  {
    title: "Flutter: the good, bad and the ugly",
    author: "Laura Tanenbaum",
    date: "Sep 22",
    link: "post-single.html",
    number: 3
  }
];

const mostRecentArticles = [
  {
    title: "The Complicity of the Textbooks",
    author: "Laura Tanenbaum",
    date: "Sep 22",
    excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
    image: "assets/media/cafe.jpg",
    link: "post-single.html"
  },
  {
    title: "When walking, I keep my eyes straight ahead",
    author: "Laura Tanenbaum",
    date: "Sep 22",
    excerpt: "Anelle, don’t look down. revere the sun. watch it make a shallow arc, skimming like a stone",
    image: "assets/media/red-girl.jpg",
    link: "post-single.html"
  }
];

const EditorChoiceArea = () => {
  return (
    <section className="editor-choice-one-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title">
              <h2 className="title-block">Todays Pick</h2>
            </div>
            <div className="post-block-template-three-wrapper">
              {todaysPickArticles.map((article, index) => (
                <article key={index} className="post-block-style-wrapper post-block-template-three">
                  <div className="post-block-style-inner post-block-list-style-inner-three">
                    <div className="post-block-number-wrap">
                      <span className="post-number-counter">{article.number}</span>
                    </div>
                    <div className="post-block-content-wrap">
                      <div className="post-item-title">
                        <h2 className="post-title">
                          <Link to={article.link}>{article.title}</Link>
                        </h2>
                      </div>
                      <div className="post-bottom-meta-list">
                        <div className="post-meta-author-box">
                          By <Link to="#">{article.author}</Link>
                        </div>
                        <div className="post-meta-date-box">{article.date}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="col-lg-8 most-recent-col-custom">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title-block">Most Recent</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {mostRecentArticles.map((article, index) => (
                <div key={index} className="col-lg-6">
                  <article className="post-block-style-wrapper post-block-template-one post-block-template-medium">
                    <div className="post-block-style-inner">
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
                        <div className="post-excerpt-box">
                          <p>{article.excerpt}</p>
                        </div>
                        <div className="post-bottom-meta-list">
                          <div className="post-meta-author-box">
                            By <Link to="#">{article.author}</Link>
                          </div>
                          <div className="post-meta-date-box">{article.date}</div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default EditorChoiceArea;
