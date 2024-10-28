import React from 'react';

const VidioPostArea = () => {
  const featuredVideo = {
    title: "8 Reasons to become a Design Preneur",
    excerpt:
      "Design your way to success by Mike Rosales hello and welcome to my blog on anything about Design and Entrepreneurship.",
    image: "assets/media/singer.jpg",
    link: "post-single.html",
  };

  const videoList = [
    {
      title: "Maddie Ziegler Takes a Lie Detector Test",
      author: "Cristiano",
      date: "Sep 30",
      image: "assets/media/model.jpg",
      link: "post-single.html",
    },
    {
      title: "The dark fate that awaits every player",
      author: "Cristiano",
      date: "Sep 30",
      image: "assets/media/beach.jpg",
      link: "post-single.html",
    },
    {
      title: "Perfection has to do with the end product",
      author: "Cristiano",
      date: "Sep 30",
      image: "assets/media/sky-open.jpg",
      link: "post-single.html",
    },
  ];

  return (
    <section className="video-posts-area pt-20 pb-20 mt-20">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-7">
            <div className="section-title mb-6">
              <h2 className="text-3xl font-semibold">Featured Videos</h2>
            </div>
            <article className="post-block-style-wrapper post-block-video mb-8">
              <div className="post-block-style-inner">
                <div className="post-block-video-thumb mb-4 relative">
                  <div className="post-block-media-wrap">
                    <a href={featuredVideo.link}>
                      <img src={featuredVideo.image} alt={featuredVideo.title} className="w-full" />
                    </a>
                  </div>
                  <div className="video-play-icon-wrap absolute inset-0 flex items-center justify-center">
                    <a
                      href={featuredVideo.link}
                      className="theme-play-btn video-play-btn bg-gray-700 p-4 rounded-full"
                    >
                      <span className="text-white text-2xl">▶</span>
                    </a>
                  </div>
                </div>
                <div className="post-block-content-wrap">
                  <div className="post-item-title mb-2">
                    <h2 className="text-xl font-medium">
                      <a href={featuredVideo.link}>{featuredVideo.title}</a>
                    </h2>
                  </div>
                  <div className="post-excerpt-box">
                    <p>{featuredVideo.excerpt}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-lg-5">
            <div className="section-btn text-right mb-6">
              <a href="post-single.html" className="text-lg font-medium text-gray-600">
                <span className="text-xl">+</span> See All Videos
              </a>
            </div>
            {videoList.map((video, index) => (
              <article key={index} className="post-block-style-wrapper mb-8">
                <div className="post-block-style-inner flex">
                  <div className="post-block-media-wrap w-1/3 mr-4">
                    <a href={video.link}>
                      <img src={video.image} alt={video.title} className="w-full" />
                    </a>
                  </div>
                  <div className="post-block-content-wrap flex-1">
                    <div className="post-item-title mb-2">
                      <h2 className="text-lg font-medium">
                        <a href={video.link}>{video.title}</a>
                      </h2>
                    </div>
                    <div className="post-bottom-meta-list flex space-x-4 text-sm">
                      <div className="post-meta-author-box">
                        <a href="javascript:void(0)">{video.author}</a>
                      </div>
                      <div className="post-meta-date-box">{video.date}</div>
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

export default VidioPostArea;
