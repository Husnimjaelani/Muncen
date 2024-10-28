import React from 'react';
import Navbar from '../Components/Navbar';
import Offcanvas from '../Components/Offcanvas';
import AdsArea from '../Components/AdsArea';
import ArticelGridSection from '../Components/ArticelGridSection';
import BlogHeroArea from '../Components/BlogHeroArea';
import EditorChoiceArea from '../Components/EditorChoiceArea';
import EditorChoiceTwo from '../Components/EditorChoiceTwo';
import MostPopularArea from '../Components/MostPopularArea';
import VidioPostArea from '../Components/VidioPostArea';
import PopularPostArea from '../Components/PopularPostArea';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      {/* Blog Hero Section */}
      <BlogHeroArea />

      {/* Ads Area */}
      <AdsArea />

      {/* Editor's Choice Area 1 */}
      <EditorChoiceArea />

      {/* Editor's Choice Area 2 */}
      <EditorChoiceTwo />

      {/* Most Popular Section */}
      <MostPopularArea />

      {/* Video Posts Section */}
      <VidioPostArea />

      {/* Articles Grid Section */}
      <ArticelGridSection />

      {/* Popular Posts Column Section */}
      <PopularPostArea />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
