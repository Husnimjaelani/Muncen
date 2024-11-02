import React from 'react';
import Sidebar from './Sidebar'; // Perbaiki penamaan komponen
import Breadcrumb from './Notification/BreadCrump'; // Perbaiki penamaan Breadcrumb

const PageContent = () => {
  return (
    <div className="post-single-area mt-2 text-white">
      <Breadcrumb />
      <div className="container mx-auto lg:max-w-7xl px-6"> {/* Memperbesar batas lebar untuk layar besar */}
        <div className="flex flex-wrap lg:flex-nowrap gap-8"> {/* Menambahkan gap antar elemen */}
          {/* Blog Content */}
          <div className="w-full lg:w-2/3 p-6"> {/* Menambah padding untuk layar besar */}
            <div className="post-single-wrapper">
              <div className="post-block-media-wrap location mb-20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215584.98499841205!2d-90.13792306214567!3d32.405349949731544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8629d21b5b027191%3A0xfe6590d037a9f228!2sRidgeland%2C%20MS%2C%20USA!5e0!3m2!1sen!2sbd!4v1672491880233!5m2!1sen!2sbd"
                  allowFullScreen
                  aria-label="Ridgeland"
                  loading="lazy"
                  className="w-full h-64"
                ></iframe>
              </div>
              <div className="theme-blog-details space-y-6">
                <h2 className="text-2xl font-semibold">What Will Be The Next Step to Complete?</h2>
                <p>The “new ’20s” idea might not work—there were a lot more young people...</p>

                <h3 className="text-xl font-semibold">Apple Design Award Winners: Apps</h3>
                <ul className="list-disc list-inside">
                  <li>Parents Are Fed Up With Their Kids’ Expensive Berry Habits</li>
                  <li>15 Mother’s Day Gifts for the Burned-Out Mom in Your Life</li>
                  <li>Really Though, What Jeans Are in Style Now?</li>
                  <li>Don’t Fall for Fertility Fearmongering About Trans Men</li>
                </ul>
              </div>

              {/* Comment Form */}
              <div className="theme-comment-area mt-8">
                <h4 className="text-xl font-bold">Post a comment</h4>
                <form className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="p-2 border border-gray-500 rounded bg-gray-800 text-white" 
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="p-2 border border-gray-500 rounded bg-gray-800 text-white" 
                    />
                    <input 
                      type="text" 
                      placeholder="Your Website" 
                      className="p-2 border border-gray-500 rounded bg-gray-800 text-white" 
                    />
                  </div>
                  <textarea 
                    placeholder="Leave a Reply" 
                    className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white"
                  ></textarea>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Save my name, email, and website for the next time I comment.</span>
                  </label>
                  <button 
                    type="submit" 
                    className="py-2 px-4 bg-blue-500 text-white rounded"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default PageContent;
