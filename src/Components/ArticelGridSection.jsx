import React from 'react';

const ArticlesGridSection = () => {
  const articles = [
    {
      title: "Michelle Tea's Punk Parenting Memoir",
      author: "Muntahin",
      date: "Sep 22",
      image: "assets/01.png",
      link: "post-single.html"
    },
    {
      title: "A beginner’s guide to customer journey maps",
      author: "Muntahin",
      date: "Sep 22",
      image: "assets/01.png",
      link: "post-single.html"
    },
    {
      title: "Establishing That You Have Something To Say",
      author: "Muntahin",
      date: "Sep 22",
      image: "assets/01.png",
      link: "post-single.html"
    }
  ];

  return (
    <section className="articles-grid-section">
      <div className="container mx-auto">
        <div className="row mb-6">
          <div className="col-lg-12">
            <div className="section-title">
              <h2 className="title-block text-white">Articles</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="flex-grow lg:w-3/6 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <article key={index} className="post-block-style-wrapper post-block-template-one post-block-template-small">
                  <div className="post-block-style-inner bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <div className="post-block-media-wrap">
                      <a href={article.link}>
                        <img src={article.image} alt="Post title" className="w-full h-auto" />
                      </a>
                    </div>
                    <div className="post-block-content-wrap p-4">
                      <div className="post-item-title">
                        <h2 className="post-title text-lg font-semibold">
                          <a href={article.link} className="hover:text-blue-400">{article.title}</a>
                        </h2>
                      </div>
                      <div className="post-bottom-meta-list flex justify-between text-sm text-gray-400 mt-2">
                        <div className="post-meta-author-box">
                          By <a href="javascript:void(0)" className="text-blue-400">{article.author}</a>
                        </div>
                        <div className="post-meta-date-box">{article.date}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="lg:w-1/4 ml-6 mb-6"> {/* Tambahkan mb-6 di sini */}
            <div className="newsletter-box-wrapper bg-gray-800 rounded-lg p-11">
              <h3 className="text-white">Sign up for our newsletters!</h3>
              <form action="newsletter.php" method="post" className="flex flex-col mt-4">
                <input type="email" name="email" id="femail" placeholder="Your email" className="mb-2 p-2 rounded bg-gray-700 text-white" required />
                <input type="submit" value="Subscribe" id="fsubmit" className="p-2 rounded bg-blue-500 text-white cursor-pointer hover:bg-blue-600" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesGridSection;
