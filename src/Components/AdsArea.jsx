import React from 'react';

const AdsArea = () => {
  return (
    <section className="ads-area mt-5 mb-5">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h3 className="ads-caption hidden">Advertisement</h3>
          <div className="ads-image">
            <a href="post-single.html">
              <img
                src="assets/01.png"
                alt="Ads"
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsArea;
