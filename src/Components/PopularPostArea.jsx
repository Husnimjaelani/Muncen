import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="flex flex-col divider-border border-t border-b border-white mt-10 mih-h-screen">
      <div className="flex flex-wrap -mx-4 m-5 px-20 w-full">
        {articles.map((article, index) => (
          <div key={article.id} className="flex flex-col lg:w-1/3 w-full p-4 mb-4">
            <div className="post-block-template-three-wrapper popular-post-block-bottom-wrapper">
              <article className="post-block-style-wrapper post-block-template-three bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                <div className="post-block-style-inner post-block-list-style-inner-three p-4 flex">
                  <div className="post-block-number-wrap mr-4">
                    <span className="post-number-counter text-blue-400">{article.id}</span>
                  </div>
                  <div className="post-block-content-wrap flex-grow">
                    <div className="post-item-title">
                      <h2 className="post-title text-lg font-semibold">
                        <Link href={article.link} className="hover:underline">{article.title}</Link>
                      </h2>
                    </div>
                    <div className="post-bottom-meta-list flex justify-between mt-2 text-sm text-gray-400">
                      <div className="post-meta-author-box">
                        By <Link to="" className="text-blue-400 hover:underline">{article.author}</Link>
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
