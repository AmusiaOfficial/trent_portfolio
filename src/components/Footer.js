import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">

        <li>
          <a target="_blank" href="https://github.com/Trent-Yates" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/trent-mg-yates/" className="icon fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="mailto:tmgyates94@gmail.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Trent Yates</li>
        <li>
          Design: <a>Trent Yates</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
