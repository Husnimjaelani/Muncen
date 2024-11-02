import React from 'react';

const FeaturedVideos = () => {
  const videos = [
    {
      id: 1,
      title: "8 Reasons to become a Design Preneur",
      excerpt: "Design your way to success by Mike Rosales hello and welcome to my blog on anything about Design and Entrepreneurship",
      image: "assets/01.png",
      link: "post-single.html",
    },
    {
      id: 2,
      title: "Maddie Ziegler Takes a Lie Detector Test",
      author: "Cristiano",
      date: "Sep 30",
      image: "assets/01.png",
      link: "post-single.html",
    },
    {
      id: 3,
      title: "The dark fate that awaits every player",
      author: "Cristiano",
      date: "Sep 30",
      image: "assets/01.png",
      link: "post-single.html",
    },
    {
      id: 4,
      title: "Perfection has to do with the end product",
      author: "Cristiano",
      date: "Sep 30",
      image: "assets/01.png",
      link: "post-single.html",
    },
  ];

  return (
    <section className="video-posts-area pt-10 pb-10 mt-10 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 lg:pr-6">
            <div className="section-title mb-4">
              <h2 className="text-2xl font-bold">Featured Videos</h2>
            </div>
            <article className="post-block-style-wrapper post-block-template-one post-block-video mb-4">
              <div className="post-block-style-inner">
                <div className="post-block-video-thumb relative">
                  <div className="post-block-media-wrap">
                    <a href={videos[0].link}>
                      <img src={videos[0].image} alt="Post title" className="w-full h-auto rounded-lg" />
                    </a>
                  </div>
                  <div className="video-play-icon-wrap absolute inset-0 flex items-center justify-center">
                    <a href={videos[0].link} className="theme-play-btn video-play-btn text-3xl text-white">
                      {/* You can add an icon here */}
                      ▶
                    </a>
                  </div>
                </div>
                <div className="post-block-content-wrap mt-4">
                  <div className="post-item-title">
                    <h2 className="post-title text-lg font-semibold">
                      <a href={videos[0].link}>{videos[0].title}</a>
                    </h2>
                  </div>
                  <div className="post-excerpt-box">
                    <p>{videos[0].excerpt}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="lg:w-1/3">
            <div className="section-btn text-right mb-4">
              <a href="post-single.html" className="text-blue-500 font-bold"><span>+</span> See All Videos</a>
            </div>
            {videos.slice(1).map((video) => (
              <article key={video.id} className="post-block-style-wrapper post-block-template-two post-video-list mb-4">
                <div className="post-block-style-inner post-block-list-style-inner flex">
                  <div className="post-block-media-wrap">
                    <a href={video.link}>
                      <img src={video.image} alt="Post title" className="w-16 h-16 rounded-lg" />
                    </a>
                  </div>
                  <div className="post-block-content-wrap ml-4 flex-grow">
                    <div className="post-item-title">
                      <h2 className="post-title">
                        <a href={video.link}>{video.title}</a>
                      </h2>
                    </div>
                    <div className="post-bottom-meta-list flex justify-between text-sm text-gray-500">
                      <div className="post-meta-author-box">
                        <a href="javascript:void(0)">{video.author}</a>
                      </div>
                      <div className="post-meta-date-box">
                        {video.date}
                      </div>
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

export default FeaturedVideos;
