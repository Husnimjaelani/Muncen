import React from 'react';

const ArticelGridSection = () => {
  const articles = [
    {
      title: "Michelle Tea's Punk Parenting Memoir",
      author: "Muntahin",
      date: "Sep 22",
      image: "assets/media/camera.jpg",
      link: "post-single.html",
    },
    {
      title: "A beginner’s guide to customer journey maps",
      author: "Muntahin",
      date: "Sep 22",
      image: "assets/media/camera.jpg",
      link: "post-single.html",
    },
    {
      title: "Establishing That You Have Something To Say",
      author: "Muntahin",
      date: "Sep 22",
      image: "assets/media/camera.jpg",
      link: "post-single.html",
    },
  ];

  return (
    <section className="articles-grid-section py-8">
      <div className="container mx-auto">
        <div className="row mb-8">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <h2 className="text-3xl font-semibold">Articles</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {articles.map((article, index) => (
            <div key={index} className="col-lg-3 mb-6">
              <article className="post-block-style-wrapper">
                <div className="post-block-style-inner">
                  <div className="post-block-media-wrap mb-4">
                    <a href={article.link}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                  <div className="post-block-content-wrap">
                    <div className="post-item-title mb-2">
                      <h2 className="text-xl font-medium">
                        <a href={article.link}>{article.title}</a>
                      </h2>
                    </div>
                    <div className="post-bottom-meta-list flex space-x-4 text-sm">
                      <div className="post-meta-author-box">
                        By <a href="javascript:void(0)">{article.author}</a>
                      </div>
                      <div className="post-meta-date-box">{article.date}</div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
          <div className="col-lg-3 mb-6">
            <div className="newsletter-box-wrapper p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sign up for our newsletters!</h3>
              <form action="newsletter.php" method="post">
                <input
                  type="email"
                  name="email"
                  id="femail"
                  className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
                  placeholder="Enter your email"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  id="fsubmit"
                  className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticelGridSection;