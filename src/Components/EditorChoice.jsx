import React from 'react';
import SectionDivider from './SectionDevinder';

const articles = [
  {
    title: 'When walking, I keep my eyes straight ahead',
    excerpt: 'Anelle, don’t look down. revere the sun. watch it make a shallow arc, skimming like a stone across',
    author: 'Laura Tanenbaum',
    date: 'Sep 22',
    link: 'post-single.html',
    image: 'assets/01.png',
  },
  {
    title: 'You have to fight to reach your dream',
    excerpt: 'Anelle, don’t look down. revere the sun. watch it make a shallow arc, skimming like a stone across',
    author: 'Laura Tanenbaum',
    date: 'Sep 22',
    link: 'post-single.html',
    image: 'assets/01.png',
  },
  {
    title: 'Beauty products that still beloved today',
    excerpt: 'A non-fungible token is a record on a blockchain which is associated with a particular digital or physical asset.',
    author: 'Laura Tanenbaum',
    date: 'Sep 22',
    link: 'post-single.html',
    image: 'assets/01.png',
  },
];

const mostReadArticles = [
  {
    title: 'Rachel Maddow Will Go Mondays Only On MSNBC',
    author: 'Cristiano',
    date: 'Sep 30',
    link: 'post-single.html',
    image: 'assets/01.png',
  },
  {
    title: 'How to Get Glowing Skin With Minimal Makeup',
    author: 'Cristiano',
    date: 'Sep 30',
    link: 'post-single.html',
    image: 'assets/01.png',
  }
];

const EditorChoiceSection = () => {
  return (
    <section className="editor-choice-two-area py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 p-2"> {/* Memperbesar lebar untuk editor choice */}
            <div className="section-title mb-6">
              <h2 className="text-2xl font-bold text-white">Editor Choice</h2>
            </div>
            {articles.map((article, index) => (
              <article key={index} className="post-block-style-wrapper post-block-template-four mb-4 flex flex-col lg:flex-row">
                <div className="post-block-content-wrap p-4 flex-1">
                  <div className="post-item-title">
                    <h2 className="post-title text-xl font-bold text-white mb-2">
                      <a href={article.link}>{article.title}</a>
                    </h2>
                  </div>
                  <div className="post-excerpt-box">
                    <p className="text-white">{article.excerpt}</p>
                  </div>
                  <div className="post-bottom-meta-list flex text-sm mt-2 text-white gap-4">
                    <div className="post-meta-author-box">
                      By <a href="javascript:void(0)" className="text-blue-400">{article.author}</a>
                    </div>
                    <div className="post-meta-date-box">{article.date}</div>
                  </div>
                </div>
                <div className="post-block-media-wrap w-full lg:w-1/2"> {/* Gambar diperbesar */}
                  <a href={article.link}>
                    <img src={article.image} alt="Post title" className="w-full rounded-lg object-cover h-65" />
                  </a>
                </div>
              </article>
            ))}
          </div>

            {/* Pindah ke sebelah kanan */}
          <div className="w-full lg:w-1/3 p-14"> 
          <div className="section-title mb-6">
            <h2 className="title-block text-sm font-bold text-white">Most Read Articles</h2>
          </div>
          {mostReadArticles.map((article, index) => (
            <div key={index} className="mb-8">
              <article className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                <div className="post-block-media-wrap">
                  <a href={article.link}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-65 object-cover" // Ganti h-65 dengan h-48 untuk ukuran yang lebih kecil
                    />
                  </a>
                </div>
                <div className="post-block-content-wrap p-4">
                  <div className="post-item-title">
                    <h2 className="post-title text-xl font-semibold">
                      <a href={article.link} className="hover:text-blue-400">{article.title}</a>
                    </h2>
                  </div>
                  <div className="post-bottom-meta-list flex justify-between mt-2 text-sm text-gray-400">
                    <div className="post-meta-author-box">
                      By <a href="#" className="text-blue-400">{article.author}</a>
                    </div>
                    <div className="post-meta-date-box">{article.date}</div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default EditorChoiceSection;
