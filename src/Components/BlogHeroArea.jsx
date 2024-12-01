import React from 'react';
import { Link } from 'react-router-dom'; // pastikan import ini ada
import SectionDivider from './SectionDevinder';

const BlogHeroArea = () => {
  return (
    <section className="blog-hero-area mt-2">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Kolom Kiri */}
          <div className="lg:w-1/4 w-full p-4 mt-3">
            {/* Artikel Card */}
            {[1, 2, 3, 4].map((_, index) => (
              <article
                key={index}
                className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden mb-4"
              >
                <div className="post-block-style-inner">
                  <div className="post-block-media-wrap">
                    <Link to="/postsinglepage">
                      <img src="/assets/01.png" alt="Post title" className="w-full h-45 object-cover" />
                    </Link>
                  </div>
                  <div className="post-block-content-wrap p-4">
                    <div className="post-item-title">
                      <h2 className="post-title text-lg font-semibold">
                        <Link to="/postsinglepage">Michelle Tea’s Punk Parenting Memoir</Link>
                      </h2>
                    </div>
                    <div className="post-bottom-meta-list flex justify-between mt-2 text-sm text-gray-400">
                      <div className="post-meta-author-box">
                        By <Link href="#" className="text-blue-400">Laura Tanenbaum</Link>
                      </div>
                      <div className="post-meta-date-box">Sep 22</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Kolom Tengah */}
          <div className="lg:w-2/4 w-full mt-7">
            {[1, 2].map((_, index) => (
              <article
                key={index}
                className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden mb-4"
              >
                <div className="post-block-style-inner">
                  <div className="post-block-media-wrap">
                    <Link to="/postsinglepage">
                      <img src="/assets/02.png" alt="Post title" className="w-full h-64 object-cover" />
                    </Link>
                  </div>
                  <div className="post-block-content-wrap p-4">
                    <div className="post-item-title">
                      <h2 className="post-title text-xl font-semibold">
                        <Link to="/postsinglepage">Georgia’s voting law will make elections easier than ever</Link>
                      </h2>
                    </div>
                    <div className="post-excerpt-box my-2 text-gray-300">
                      <p>Tuesday’s primary is the first big test of the legislation, which was opposed by voting rights groups and Democrats.</p>
                    </div>
                    <div className="post-bottom-meta-list flex justify-between mt-2 text-sm text-gray-400">
                      <div className="post-meta-author-box">
                        By <Link href="#" className="text-blue-400">Laura Tanenbaum</Link>
                      </div>
                      <div className="post-meta-date-box">Sep 22</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Kolom Kanan */}
          <div className="lg:w-1/4 w-full p-4">
            <div className="section-title sm:mt-6 mb-4">
              <h2 className="title-block text-white">Todays Pick</h2>
            </div>
            {[1, 2, 3].map((_, index) => (
              <article
                key={index}
                className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden mb-4"
              >
                <div className="post-block-style-inner post-block-list-style-inner">
                  <div className="post-block-media-wrap">
                    <Link to="/postsinglepage">
                      <img src="/assets/01.png" alt="Post title" className="w-full h-45 object-cover" />
                    </Link>
                  </div>
                  <div className="post-block-content-wrap p-4">
                    <div className="post-category-box mb-1">
                      <Link className="post-cat-item text-blue-400" href="/blog-category">Politics</Link>
                    </div>
                    <div className="post-item-title">
                      <h2 className="post-title text-lg font-semibold">
                        <Link to="/postsinglepage">Corporations Are People, Too</Link>
                      </h2>
                    </div>
                    <div className="post-bottom-meta-list flex justify-between mt-2 text-sm text-gray-400">
                      <div className="post-meta-author-box">
                        <Link href="#" className="text-blue-400">Alisson</Link>
                      </div>
                      <div className="post-meta-date-box">Sep 22</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default BlogHeroArea;
