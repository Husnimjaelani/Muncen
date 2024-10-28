import React from 'react';

const EditorChoiceTwo = () => {
  const editorPosts = [
    {
      title: "When walking, I keep my eyes straight ahead",
      excerpt:
        "Anelle, don’t look down. revere the sun. watch it make a shallow arc, skimming like a stone across",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/media/martha.jpg",
      link: "post-single.html",
    },
    {
      title: "You have to fight to reach your dream",
      excerpt:
        "Anelle, don’t look down. revere the sun. watch it make a shallow arc, skimming like a stone across",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/media/martha.jpg",
      link: "post-single.html",
    },
    {
      title: "Beauty products that still beloved today",
      excerpt:
        "A non-fungible token is a record on a blockchain which is associated with a particular digital or physical asset.",
      author: "Laura Tanenbaum",
      date: "Sep 22",
      image: "assets/media/martha.jpg",
      link: "post-single.html",
    },
  ];

  const mostReadPosts = [
    {
      title: "Rachel Maddow Will Go Mondays Only On MSNBC",
      author: "Cristiano",
      date: "Sep 30",
      image: "assets/media/brown-fashion.jpg",
      link: "post-single.html",
    },
    {
      title: "How to Get Glowing Skin With Minimal Makeup",
      author: "Cristiano",
      date: "Sep 30",
      image: "assets/media/brown-fashion.jpg",
      link: "post-single.html",
    },
    {
      title: "Using UX law in design are adept surprisingly",
      author: "Cristiano",
      date: "Sep 30",
      image: "assets/media/classic-dress.jpg",
      link: "post-single.html",
    },
    {
      title: "Five signs of a healthy intelligent person",
      author: "Cristiano",
      date: "Sep 30",
      image: "assets/media/sky-hat.jpg",
      link: "post-single.html",
    },
    {
      title: "Brussels Edition: Seeking a Trade Reset",
      author: "Cristiano",
      date: "Sep 30",
      image: "assets/media/bridge-front.jpg",
      link: "post-single.html",
    },
  ];

  return (
    <section className="editor-choice-two-area">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2 className="title-block">Editor Choice</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Left Column with Editor Choice Articles */}
          <div className="col-lg-8">
            {editorPosts.map((post, index) => (
              <article
                key={index}
                className="post-block-style-wrapper post-block-template-four mb-8"
              >
                <div className="post-block-style-inner flex flex-col md:flex-row">
                  <div className="post-block-content-wrap md:w-2/3">
                    <div className="post-item-title">
                      <h2 className="post-title">
                        <a href={post.link}>{post.title}</a>
                      </h2>
                    </div>
                    <div className="post-excerpt-box">
                      <p>{post.excerpt}</p>
                    </div>
                    <div className="post-bottom-meta-list flex space-x-4 mt-4">
                      <div className="post-meta-author-box">
                        By <a href="javascript:void(0)">{post.author}</a>
                      </div>
                      <div className="post-meta-date-box">{post.date}</div>
                    </div>
                  </div>
                  <div className="post-block-media-wrap md:w-1/3 md:ml-4">
                    <a href={post.link}>
                      <img src={post.image} alt={post.title} className="w-full h-auto" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column with Most Read Articles */}
          <div className="col-lg-4">
            <div className="section-title mt-8">
              <h2 className="title-block">Most Read Articles</h2>
            </div>
            {mostReadPosts.map((post, index) => (
              <article
                key={index}
                className="post-block-style-wrapper post-block-template-two most-read-block-list mb-8"
              >
                <div className="post-block-style-inner flex">
                  <div className="post-block-media-wrap w-1/3">
                    <a href={post.link}>
                      <img src={post.image} alt={post.title} className="w-full h-auto" />
                    </a>
                  </div>
                  <div className="post-block-content-wrap w-2/3 ml-4">
                    <div className="post-item-title">
                      <h2 className="post-title">
                        <a href={post.link}>{post.title}</a>
                      </h2>
                    </div>
                    <div className="post-bottom-meta-list flex space-x-4 mt-2">
                      <div className="post-meta-author-box">
                        <a href="javascript:void(0)">{post.author}</a>
                      </div>
                      <div className="post-meta-date-box">{post.date}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorChoiceTwo;