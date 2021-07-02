import React from 'react'

import Footer from './Footer'
import headshot from '../assets/images/headshot.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={headshot} alt="" />
      </a>
      <h1>
        <strong>I am Trent Yates</strong>, a Web Developer
        <br />
          &nbsp;open to work.
        <br />
        
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
