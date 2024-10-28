import React from 'react';

const PopularPostArea = () => {
  const popularPosts = [
    {
      title: "London Wants To Have Its Brexit Cake and Eat It Too",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/media/protest.jpg",
      link: "post-single.html",
    },
    {
      title: "The Complicity of the Textbooks",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/media/protest.jpg",
      link: "post-single.html",
    },
    {
      title: "Creating is a privilege but it's also a gift",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/media/bloomberg.jpg",
      link: "post-single.html",
    },
    {
      title: "Your Empty Office Turn Into Apartments?",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/media/protest.jpg",
      link: "post-single.html",
    },
    {
      title: "Yeah, I bought some Dogecoin today",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/media/protest.jpg",
      link: "post-single.html",
    },
    {
      title: "The remarkable rise of Ryan Manson",
      excerpt: "In Teaching White Supremacy, Donald Yacovone traces how the writing",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/media/protest.jpg",
      link: "post-single.html",
    },
  ];

  return (
    <section className="popular-posts-column-area mt-16 mb-8">
      <div className="container mx-auto">
        <div className="row mb-6">
          <div className="section-title">
            <h2 className="text-3xl font-semibold">Popular Posts</h2>
          </div>
        </div>
        <div className="row">
          {popularPosts.map((post, index) => (
            <div key={index} className="col-lg-4 mb-10">
              <article className="post-block-style-wrapper post-block-template-one post-block-template-medium">
                <div className="post-block-style-inner">
                  <div className="post-block-media-wrap mb-4">
                    <a href={post.link}>
                      <img src={post.image} alt={post.title} className="w-full" />
                    </a>
                  </div>
                  <div className="post-block-content-wrap">
                    <div className="post-item-title mb-2">
                      <h2 className="text-xl font-medium">
                        <a href={post.link}>{post.title}</a>
                      </h2>
                    </div>
                    <div className="post-excerpt-box mb-2">
                      <p>{post.excerpt}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPostArea;