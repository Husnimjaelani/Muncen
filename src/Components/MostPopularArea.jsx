import React from 'react';

const MostPopularArea = () => {
  const articles = [
    {
      title: "Every day, in every city and town across the country",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      excerpt:
        "The major oil-producing state has long tried to have it both ways regulating emissions.",
      image: "assets/media/headphone-girl.jpg",
      link: "post-single.html",
    },
    {
      title: "I work best when my space is filled with inspiration",
      author: "Cristiano",
      date: "Sep 22",
      excerpt: "Australians have just learned their election will be held on 21 May.",
      image: "assets/media/office.jpg",
      link: "post-single.html",
    },
    {
      title: "It’s a new era in design, there are no rules",
      author: "Cristiano",
      date: "Sep 22",
      excerpt: "Anelle, don’t look down. revere the sun. watch it make a shallow arc.",
      image: "assets/media/paint.jpg",
      link: "post-single.html",
    },
  ];

  const popularPosts = [
    {
      number: 1,
      title: "Urban green revivo oversized blazer",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      link: "post-single.html",
    },
    {
      number: 2,
      title: "Varsity brown bomber jacket in tan",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      link: "post-single.html",
    },
    {
      number: 3,
      title: "Blossom is an incredibly easy method",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      link: "post-single.html",
    },
  ];

  return (
    <section className="most-popular-area mt-12">
      <div className="container mx-auto">
        <div className="row mb-8">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2 className="text-3xl font-semibold">Most Popular</h2>
            </div>
          </div>
        </div>
        <div className="row mb-12">
          <div className="col-lg-5">
            <article className="post-block-style-wrapper mb-6">
              <div className="post-block-style-inner">
                <div className="post-block-media-wrap mb-4">
                  <a href={articles[0].link}>
                    <img src={articles[0].image} alt={articles[0].title} className="w-full" />
                  </a>
                </div>
                <div className="post-block-content-wrap">
                  <div className="post-item-title mb-2">
                    <h2 className="text-xl font-medium">
                      <a href={articles[0].link}>{articles[0].title}</a>
                    </h2>
                  </div>
                  <div className="post-excerpt-box mb-2">
                    <p>{articles[0].excerpt}</p>
                  </div>
                  <div className="post-bottom-meta-list flex space-x-4 text-sm">
                    <div className="post-meta-author-box">
                      By <a href="javascript:void(0)">{articles[0].author}</a>
                    </div>
                    <div className="post-meta-date-box">{articles[0].date}</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-lg-7">
            {articles.slice(1).map((article, index) => (
              <article key={index} className="post-block-style-wrapper mb-6">
                <div className="post-block-style-inner flex">
                  <div className="post-block-content-wrap mr-4 flex-1">
                    <div className="post-item-title mb-2">
                      <h2 className="text-xl font-medium">
                        <a href={article.link}>{article.title}</a>
                      </h2>
                    </div>
                    <div className="post-excerpt-box mb-2">
                      <p>{article.excerpt}</p>
                    </div>
                    <div className="post-bottom-meta-list flex space-x-4 text-sm">
                      <div className="post-meta-author-box">
                        By <a href="javascript:void(0)">{article.author}</a>
                      </div>
                      <div className="post-meta-date-box">{article.date}</div>
                    </div>
                  </div>
                  <div className="post-block-media-wrap w-1/3">
                    <a href={article.link}>
                      <img src={article.image} alt={article.title} className="w-full" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="row border-t border-gray-200 pt-8">
          {popularPosts.map((post, index) => (
            <div key={index} className="col-lg-4">
              <div className="post-block-template-three-wrapper mb-6">
                <article className="post-block-style-wrapper">
                  <div className="post-block-style-inner flex">
                    <div className="post-block-number-wrap pr-4">
                      <span className="post-number-counter text-3xl font-semibold">
                        {post.number}
                      </span>
                    </div>
                    <div className="post-block-content-wrap flex-1">
                      <div className="post-item-title mb-2">
                        <h2 className="text-lg font-medium">
                          <a href={post.link}>{post.title}</a>
                        </h2>
                      </div>
                      <div className="post-bottom-meta-list flex space-x-4 text-sm">
                        <div className="post-meta-author-box">
                          By <a href="javascript:void(0)">{post.author}</a>
                        </div>
                        <div className="post-meta-date-box">{post.date}</div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostPopularArea;
