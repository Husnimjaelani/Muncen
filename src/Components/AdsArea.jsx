import React from 'react';

const AdsArea = () => {
  return (
    <section className="ads-area mt-16 mb-14">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full">
            <h3 className="sr-only">Advertisement</h3>
            <div className="ads-image">
              <a href="post-single.html">
                <img src="assets/media/ads-full.png" alt="Ads" className="w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsArea;