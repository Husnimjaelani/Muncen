import React from 'react'
import MainWrapper from '../Components/Notification/MainWrapper'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import PostSingleArea from '../Components/PostSingleArea'
import RelatedPosts from '../Components/RelatedPost'

const PostSinglePage = () => {
  return (
    <div>
        <MainWrapper>

        <Navbar />
        <PostSingleArea />
        <RelatedPosts />

        </MainWrapper>
        <Footer />
    </div>
  )
}

export default PostSinglePage