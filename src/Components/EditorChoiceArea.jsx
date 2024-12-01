import React from 'react';
import { Link } from 'react-router-dom';

const EditorChoiceArea = () => {
  const todaysPickData = [
    {
      title: "Sayaka Murata Inhabits a Planet of Her Own",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      number: 1,
    },
    {
      title: "Sayaka Murata Inhabits a Planet of Her Own",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      number: 2,
    },
    {
      title: "Sayaka Murata Inhabits a Planet of Her Own",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      number: 3,
    },
  ];

  const mostRecentData = [
    {
      title: "The Complicity of the Textbooks",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "01.png",
      description: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
    },
    {
      title: "When walking, I keep my eyes straight ahead",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "01.png",
      description: "Anelle, don’t look down. revere the sun. watch it make a shallow arc, skimming like a stone",
    },
  ];

  return (
    <section className="editor-choice-one-area py-3">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Kolom Kiri - Todays Pick */}
          <div className="lg:w-1/3 w-full p-5">
            <div className="section-title mb-5">
              <h2 className="title-block text-white text-bold">Todays Pick</h2>
            </div>
            <div className="post-block-template-three-wrapper">
              {todaysPickData.map((post) => (
                <article
                  key={post.number}
                  className="post-block-style-wrapper bg-transparent border-b border-white last:border-b-0 mb-4 pb-4"
                >
                  <div className="post-block-style-inner post-block-list-style-inner-three flex">
                    <div className="post-block-number-wrap flex items-center justify-center w-20 rounded-full mr-4">
                      <span className="post-number-counter text-3xl text-white">{post.number}</span>
                    </div>
                    <div className="post-block-content-wrap">
                      <div className="post-item-title">
                        <h2 className="post-title text-xl font-semibold">
                          <Link href="post-single.html" className="text-white hover:text-blue-400">{post.title}</Link>
                        </h2>
                      </div>
                      <div className="post-bottom-meta-list flex justify-start mt-2 gap-4 text-sm text-gray-400 mb-2">
                        <div className="post-meta-author-box">
                          By <Link href="#" className="text-blue-400">{post.author}</Link>
                        </div>
                        <div className="post-meta-date-box">{post.date}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Kolom Kanan - Most Recent */}
          <div className="lg:w-2/3 w-full p-4">
            <div className="section-title mb-4">
              <h2 className="title-block text-white">Most Recent</h2>
            </div>
            <div className="flex flex-wrap -mx-4">
              {mostRecentData.map((post, index) => (
                <div key={index} className="w-full md:w-1/2 px-4 mb-8">
                  <article className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                    <div className="post-block-media-wrap">
                      <Link href="post-single.html">
                        <img
                          src={`/assets/${post.image}`}
                          alt={post.title}
                          className="w-full h-65 object-cover"
                        />
                      </Link>
                    </div>
                    <div className="post-block-content-wrap p-4">
                      <div className="post-item-title">
                        <h2 className="post-title text-xl font-semibold">
                          <Link href="post-single.html" className="hover:text-blue-400">{post.title}</Link>
                        </h2>
                      </div>
                      <div className="post-excerpt-box my-2 text-gray-300">
                        <p>{post.description}</p>
                      </div>
                      <div className="post-bottom-meta-list flex justify-between mt-2 text-sm text-gray-400">
                        <div className="post-meta-author-box">
                          By <Link href="#" className="text-blue-400">{post.author}</Link>
                        </div>
                        <div className="post-meta-date-box">{post.date}</div>
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
  );
};

export default EditorChoiceArea;
