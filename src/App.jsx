import React, { useState } from 'react'
import Navbar from './Components/Navbar.css/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/TESTIMONIALS/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/Footer'
import VideoPlayer from './Components/videoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState]= useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='our program' title='what we offer' />
      <Programs/>
      <About setPlayState={setPlayState} />
      <Title subtitle='gallery' title='Campus Photos' />
      <Gallery/>
      <Title subtitle='TESTIMONIALS' title='What Students Says' />
      <Testimonials/>
      <Title subtitle='Contact Us' title='Get and Touch' />
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
