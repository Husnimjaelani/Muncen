import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: "Michelle Tea’s Punk Parenting Memoir",
    image: "assets/media/team-mate.jpg",
    author: "Laura Tanenbaum",
    date: "Sep 22",
    link: "post-single.html"
  },
  {
    title: "A Design Lover's Guide Mexico City",
    image: "assets/media/team-mate.jpg",
    author: "Laura Tanenbaum",
    date: "Sep 22",
    link: "post-single.html"
  },
  {
    title: "Education vs. Fuel: a lose-lose situation",
    image: "assets/media/model-glass.jpg",
    author: "Laura Tanenbaum",
    date: "Sep 22",
    link: "post-single.html"
  },
  {
    title: "Maddie Ziegler Takes a Lie Detector Test",
    image: "assets/media/model-glass.jpg",
    author: "Laura Tanenbaum",
    date: "Sep 22",
    link: "post-single.html"
  },
  {
    title: "Georgia’s voting law will make elections easier than ever",
    image: "assets/media/red-woman.jpg",
    author: "Laura Tanenbaum",
    date: "Sep 22",
    link: "post-single.html",
    excerpt: "Tuesday’s primary is the first big test of the legislation, which was opposed by voting rights groups and Democrats."
  },
  {
    title: "Should your architecture practice be employed",
    image: "assets/media/red-woman.jpg",
    author: "Laura Tanenbaum",
    date: "Sep 22",
    link: "post-single.html",
    excerpt: "Tuesday’s primary is the first big test of the legislation, which was opposed by voting rights groups and Democrats."
  }
];

const todaysPick = [
  {
    title: "Corporations Are People, Too",
    image: "assets/media/yellow-diva.jpg",
    author: "Alisson",
    date: "Sep 22",
    category: "Politics",
    link: "post-single.html"
  },
  {
    title: "The UX design trends 2023",
    image: "assets/media/green-diva.jpg",
    author: "Tony Stark",
    date: "Sep 22",
    category: "Lifestyle",
    link: "post-single.html"
  },
  {
    title: "Five signs of smart person",
    image: "assets/media/hair-style.jpg",
    author: "Tony Stark",
    date: "Sep 22",
    category: "Lifestyle",
    link: "post-single.html"
  }
];

const BlogHeroArea = () => {
  return (
    <section className="blog-hero-area mt-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            {articles.slice(0, 4).map((article, index) => (
              <article key={index} className="post-block-style-wrapper post-block-template-one post-block-template-small">
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
          <div className="col-lg-6">
            {articles.slice(4).map((article, index) => (
              <article key={index} className="post-block-style-wrapper post-block-template-one sm-mt-24">
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
                    {article.excerpt && (
                      <div className="post-excerpt-box">
                        <p>{article.excerpt}</p>
                      </div>
                    )}
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
          <div className="col-lg-3">
            <div className="section-title sm-mt-24">
              <h2 className="title-block">Todays Pick</h2>
            </div>
            <div className="post-block-template-two-wrapper">
              {todaysPick.map((pick, index) => (
                <article key={index} className="post-block-style-wrapper post-block-template-two">
                  <div className="post-block-style-inner post-block-list-style-inner">
                    <div className="post-block-media-wrap">
                      <Link to={pick.link}>
                        <img src={pick.image} alt="Post title" />
                      </Link>
                    </div>
                    <div className="post-block-content-wrap">
                      <div className="post-category-box">
                        <Link className="post-cat-item" to="blog-category.html">{pick.category}</Link>
                      </div>
                      <div className="post-item-title">
                        <h2 className="post-title">
                          <Link to={pick.link}>{pick.title}</Link>
                        </h2>
                      </div>
                      <div className="post-bottom-meta-list">
                        <div className="post-meta-author-box">
                          <Link to="#">{pick.author}</Link>
                        </div>
                        <div className="post-meta-date-box">{pick.date}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="ads-widget mt-40">
              <Link to="post-single.html">
                <img src="assets/media/ads-sidebar.png" alt="Advertisement" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroArea;