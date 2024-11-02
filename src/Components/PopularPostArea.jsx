import React from 'react';

const PopularPosts = () => {
  const articles = [
    {
      id: 1,
      title: "Urban green revivo oversized blazer",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      link: "post-single.html"
    },
    {
      id: 2,
      title: "Varsity brown bomber jacket in tan",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      link: "post-single.html"
    },
    {
      id: 3,
      title: "Blossom is an incredibly easy method",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      link: "post-single.html"
    },
  ];

  return (
    <div className="row divider-border border-t border-b border-white mt-10">
      <div className="flex flex-wrap -mx-4 px-20 m-5">
        {articles.map((article, index) => (
          <div key={article.id} className="lg:w-1/3 w-full p-4 mb-4">
            <div className="post-block-template-three-wrapper popular-post-block-bottom-wrapper">
              <article className="post-block-style-wrapper post-block-template-three bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                <div className="post-block-style-inner post-block-list-style-inner-three p-4 flex">
                  <div className="post-block-number-wrap mr-4">
                    <span className="post-number-counter text-blue-400">{article.id}</span>
                  </div>
                  <div className="post-block-content-wrap flex-grow">
                    <div className="post-item-title">
                      <h2 className="post-title text-lg font-semibold">
                        <a href={article.link} className="hover:underline">{article.title}</a>
                      </h2>
                    </div>
                    <div className="post-bottom-meta-list flex justify-between mt-2 text-sm text-gray-400">
                      <div className="post-meta-author-box">
                        By <a href="javascript:void(0)" className="text-blue-400 hover:underline">{article.author}</a>
                      </div>
                      <div className="post-meta-date-box">{article.date}</div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
