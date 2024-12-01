import React from 'react';
import { Link } from 'react-router-dom';

const RelatedPosts = () => {
  const posts = [
    {
      title: "Maddie Ziegler Takes a Lie Detector Test",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/01.png"
    },
    {
      title: "Five signs of a healthy intelligent person",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/01.png"
    },
    {
      title: "Michelle Tea's Punk Parenting Memoir",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/01.png"
    },
  ];

  return (
    <section className="popular-posts-column-area related-posts-wrapper mt-20 mb-50">
      <div className="container mx-auto lg:max-w-7xl px-6">
        <div className="row mb-8">
          <div className="section-title">
            <h2 className="text-3xl font-bold text-white">Related Posts</h2>
          </div>
        </div>
        <div className="row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="col mb-24">
              <article className="post-block-style-wrapper post-block-template-one post-block-template-medium">
                <div className="post-block-style-inner">
                  <div className="post-block-media-wrap">
                    <Link href="#">
                      <img src={post.image} alt="Post title" className="w-full h-auto rounded-lg" />
                    </Link>
                  </div>
                  <div className="post-block-content-wrap">
                    <div className="post-item-title">
                      <h2 className="post-title">
                        <Link href="#" className="text-lg font-semibold text-white hover:text-blue-500">{post.title}</Link>
                      </h2>
                    </div>
                    <div className="post-excerpt-box">
                      <p className="text-white">{post.excerpt}</p>
                    </div>
                    <div className="post-bottom-meta-list flex justify-between mt-4 text-sm text-gray-400">
                      <div className="post-meta-author-box">
                        By <Link to="#" className="hover:text-blue-500">{post.author}</Link>
                      </div>
                      <div className="post-meta-date-box">
                        {post.date}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
