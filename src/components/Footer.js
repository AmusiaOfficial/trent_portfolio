import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-dribbble">
            <span className="label">Dribbble</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-envelope-o">
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
