import React from 'react'
import MainWrapper from '../Components/Notification/MainWrapper'
import Navbar from '../Components/Navbar'
import Land from '../Components/Land'
import Footer from '../Components/Footer'

const LandingPage = () => {
  return (
    <div>
        <MainWrapper>
            <Navbar />
            <Land />
        </MainWrapper>
        <Footer />
    </div>
  )
}

export default LandingPage