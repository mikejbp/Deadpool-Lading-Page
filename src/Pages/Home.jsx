import React from 'react';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar';
import SectionOne from '../Components/Sections/SectionOne'
import SectionTwo from '../Components/Sections/SectionTwo'

const Home = () => {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  )
}

export default Home