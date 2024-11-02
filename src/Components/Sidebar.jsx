// Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/3 p-6"> {/* Menambah padding untuk layar besar */}
      <div className="sidebar blog-sidebar">
        <h2 className="text-2xl font-semibold mb-4">Popular on Beatrix</h2>
        {[...Array(4)].map((_, i) => (
          <article key={i} className="post-block-style-wrapper mb-4">
            <div className="flex items-center">
              <img src="/assets/01.png" alt={`Post title ${i + 1}`} className="w-20 h-20 object-cover rounded-lg" />
              <div className="ml-4">
                <h2 className="text-lg font-bold">
                  <a href="#" className="hover:text-blue-500">Popular Article Title {i + 1}</a>
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
