import React from 'react';

const MostPopularArea = () => {
  const articles = [
    {
      title: "Georgia’s voting law will make elections easier than ever",
      excerpt: "Tuesday’s primary is the first big test of the legislation, which was opposed by voting rights groups and Democrats.",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "/assets/02.png",
      isFeatured: true,
    },
    {
      title: "Corporations Are People, Too",
      excerpt: "Tuesday’s primary is the first big test of the legislation, which was opposed by voting rights groups and Democrats.",
      author: "Alisson",
      date: "Sep 22",
      image: "/assets/01.png",
      category: "Politics",
      isFeatured: false,
    },
  ];

  return (
    <section className="blog-hero-area mt-2">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Kolom Tengah untuk Artikel Utama */}
          <div className="lg:w-2/4 w-full mt-7">
            {articles
              .filter(article => article.isFeatured)
              .map((article, index) => (
                <article key={index} className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <div className="post-block-style-inner">
                    <div className="post-block-media-wrap">
                      <a href="post-single.html">
                        <img src={article.image} alt={article.title} className="w-full h-70 object-cover" />
                      </a>
                    </div>
                    <div className="post-block-content-wrap p-4">
                      <div className="post-item-title">
                        <h2 className="post-title text-2xl font-semibold">
                          <a href="post-single.html">{article.title}</a>
                        </h2>
                      </div>
                      <div className="post-excerpt-box my-2 text-gray-300">
                        <p>{article.excerpt}</p>
                      </div>
                      <div className="post-bottom-meta-list flex justify-between mt-2 text-sm text-gray-400">
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

{/* Kolom Kanan untuk Artikel Sampingan dengan Gambar di Kanan */}
<div className="lg:w-1/2 w-full p-6 mt-1">
  {articles
    .filter(article => !article.isFeatured)
    .map((article, index) => (
      <article key={index} className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden mb-4 flex">
        <div className="post-block-content-wrap p-4 flex-1 flex flex-col justify-center">
          {article.category && (
            <div className="post-category-box mb-1">
              <a className="post-cat-item text-blue-400" href="blog-category.html">{article.category}</a>
            </div>
          )}
          <div className="post-item-title">
            <h2 className="post-title text-lg font-semibold">
              <a href="post-single.html">{article.title}</a>
            </h2>
          </div>
          <div className="post-excerpt-box my-2 text-gray-300">
            <p>{article.excerpt}</p>
          </div>
          <div className="post-bottom-meta-list flex justify-between mt-2 text-sm text-gray-400">
            <div className="post-meta-author-box">
              <a href="javascript:void(0)" className="text-blue-400">{article.author}</a>
            </div>
            <div className="post-meta-date-box">{article.date}</div>
          </div>
        </div>
        <div className="post-block-media-wrap flex items-center justify-center w-1/3"> {/* Menentukan lebar gambar */}
          <a href="post-single.html">
            <img src={article.image} alt={article.title} className="w-full h-auto object-cover" /> {/* Mengubah ukuran gambar */}
          </a>
        </div>
      </article>
    ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default MostPopularArea;
