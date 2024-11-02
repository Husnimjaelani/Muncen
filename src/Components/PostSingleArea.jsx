import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Sidebar from './Sidebar';

const PostSingleArea = () => {
  return (
    <div className="post-single-area mt-2 text-white">
      <div className="container mx-auto lg:max-w-7xl px-6"> {/* Memperbesar batas lebar untuk layar besar */}
        <div className="flex flex-wrap lg:flex-nowrap gap-8"> {/* Menambahkan gap antar elemen */}
          {/* Blog Content */}
          <div className="w-full lg:w-2/3 p-6"> {/* Menambah padding untuk layar besar */}
            <div className="post-single-wrapper">
              <div className="post-cat-box mb-4">
                <a href="#" className="text-blue-500">Politics</a>
              </div>
              <h1 className="text-4xl font-bold mb-6">Georgia's voting law will make elections easier than ever</h1>
              <p className="mb-4">Tuesday's primary is the first big test of the legislation...</p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-4">
                  <span>By <a href="#" className="text-blue-500">Laura Tanenbaum</a></span>
                  <span>Sep 22</span>
                </div>
                <div className="flex space-x-2">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaLinkedinIn /></a>
                </div>
              </div>
              <img className="w-full mb-8 rounded-lg" src="/assets/01.png" alt="Post Image" />

              <div className="theme-blog-details space-y-6">
                <p>Struggling to sell one multi-million dollar home currently on the market...</p>
                <blockquote className="border-l-4 pl-4 italic">“Most of us felt like we could trust each other...”</blockquote>
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

              {/* Author Bio */}
              <div className="author-bio-wrap mt-8 flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
                <img src="/assets/01.png" alt="Author" className="w-16 h-16 rounded-full" />
                <div>
                  <h5 className="font-bold">Kristin Watson</h5>
                  <p>Sr. UX Designer</p>
                  <div className="flex space-x-2">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedinIn /></a>
                  </div>
                </div>
              </div>

              {/* Comment Form */}
              <div className="theme-comment-area mt-8">
                <h4 className="text-xl font-bold">Post a comment</h4>
                <form className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" placeholder="Your Name" className="p-2 border border-gray-500 rounded bg-gray-800 text-white" />
                    <input type="email" placeholder="Your Email" className="p-2 border border-gray-500 rounded bg-gray-800 text-white" />
                    <input type="text" placeholder="Your Website" className="p-2 border border-gray-500 rounded bg-gray-800 text-white" />
                  </div>
                  <textarea placeholder="Leave a Reply" className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white"></textarea>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Save my name, email, and website for the next time I comment.</span>
                  </label>
                  <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded">Post Comment</button>
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

export default PostSingleArea;