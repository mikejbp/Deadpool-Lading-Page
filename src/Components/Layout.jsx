import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer/Footer';
import '../CSS/Layout.css'
import { grid } from '@mui/system';

const Layout = ({children}) => {
  return (
      <div className='layout'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout