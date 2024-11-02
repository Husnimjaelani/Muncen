import React from 'react'
import Navbar from '../Components/Navbar'
import BlogHeroArea from '../Components/BlogHeroArea'
import MainWrapper from '../Components/Notification/MainWrapper'
import EditorChoiceArea from '../Components/EditorChoiceArea'
import AdsArea from '../Components/AdsArea'
import EditorChoice from '../Components/EditorChoice'
import ArticlesGridSection from '../Components/ArticelGridSection'
import MostPopularArea from '../Components/MostPopularArea'
import PopularPostsArea from '../Components/PopularPostArea'
import VidioPostArea from '../Components/VidioPostArea'
import PopularPosts from '../Components/PopularPost'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <MainWrapper>

      <Navbar />
      <BlogHeroArea />
      <EditorChoiceArea />
      <AdsArea/>
      <EditorChoice />
      <ArticlesGridSection />
      <MostPopularArea />
      <PopularPostsArea />
      <VidioPostArea />
      <PopularPosts />


      </MainWrapper>
      <Footer /> 
    </div>
  )
}

export default Home;