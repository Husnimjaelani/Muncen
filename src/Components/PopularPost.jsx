import React from 'react';
import { Link } from 'react-router-dom';

const PopularPosts = () => {
  const posts = [
    {
      id: 1,
      title: "London Wants To Have Its Brexit Cake and Eat It Too",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/01.png",
      link: "post-single.html",
    },
    {
      id: 2,
      title: "The Complicity of the Textbooks",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/01.png",
      link: "post-single.html",
    },
    {
      id: 3,
      title: "Creating is a privilege but it's also a gift",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/01.png",
      link: "post-single.html",
    },
    {
      id: 4,
      title: "Your Empty Office Turn Into Apartments?",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/01.png",
      link: "post-single.html",
    },
    {
      id: 5,
      title: "Yeah, I bought some Dogecoin today",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/01.png",
      link: "post-single.html",
    },
    {
      id: 6,
      title: "The remarkable rise of Ryan Manson",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/01.png",
      link: "post-single.html",
    },
  ];

  return (
    <section className="popular-posts-column-area mt-20 mb-35">
      <div className="container mx-auto">
        <div className="section-title">
          <h2 className="title-block text-white">Popular Posts</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden mb-4"
            >
              <div className="post-block-style-inner">
                <div className="post-block-media-wrap">
                  <Link href={post.link}>
                    <img src={post.image} alt={post.title} className="w-full h-45 object-cover" />
                  </Link>
                </div>
                <div className="post-block-content-wrap p-4">
                  <div className="post-item-title">
                    <h2 className="post-title text-lg font-semibold">
                      <Link href={post.link}>{post.title}</Link>
                    </h2>
                  </div>
                  <div className="post-excerpt-box">
                    <p>{post.excerpt}</p>
                  </div>
                  <div className="post-bottom-meta-list flex justify-between mt-2 text-sm text-gray-400">
                    <div className="post-meta-author-box">
                      By <Link to="" className="text-blue-400">{post.author}</Link>
                    </div>
                    <div className="post-meta-date-box">{post.date}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPosts;
