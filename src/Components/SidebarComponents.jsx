import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/3 p-2 transition-all ease-out duration-300"> {/* Perbesar sidebar untuk layar besar */}
      <div className="sidebar blog-sidebar shadow-lg rounded-lg hover:shadow-2xl transition-all ease-out duration-300 ml-4">
        <h2 className="text-2xl font-semibold mb-4">Popular on Beatrix</h2>
        {[...Array(4)].map((_, i) => (
          <article key={i} className="post-block-style-wrapper mb-4">
            <div className="flex items-center gap-4">
              <img
                src="/assets/01.png"
                alt={`Post title ${i + 1}`}
                className="w-40 h-10 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="ml-4">
                <h2 className="text-lg font-bold">
                  <Link href="#" className="hover:text-blue-500 transition-colors duration-300 ease-out">
                    Popular Article Title {i + 1}
                  </Link>
                </h2>
                <div className="text-sm">By Cristiano - Sep 30</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
