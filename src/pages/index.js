import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Trent Yates - Front-End Developer'
  const siteDescription = 'Front-End Web Developer'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              
              <br />
              Creative Web Developer with a passion for Front-End and UX/UI.
            </h2>
          </header>

          <p>
            About Me:
          </p>

          {/* <p>
            I began my journey after high school attending Clarion University for Physics and Engineering, eventually leaving and beginning a career in the service industry as a Bartender. After 5+ years, with the unfortunate hit of Covid-19, I needed to make a career change and made the decision to return to school and learn a new skill.
          </p> */}

          <p>
            I am a recent gradaute of the Academy Pittsburgh Web Developer Bootcamp. I enjoy converting data into something visually appealing and easily digestible. I am hard working with a discerning eye for detail, and a drive to deliver high quality work. After 5+ years in the service industry, I enjoy working directly with clients to educate and help bring forward the best products/solutions to fit their needs. I am motivated, enthuastic, and well organised, with a keen eye for modern, beautiful web design.

          </p>

          <p>
            I am experienced in languages, frameworks, and technologies such as C#, Ruby, JavaScript, JQuery, HTML5, CSS, Bootstrap, React.js, Node.js, Express.js, Angular.js, Restful API's, and SQL. I enjoy Agile Software Development, particulary SCRUM and Design Driven Development.

          </p>

          <p>
            Outside of work you can find me spending time with my family, making music/preforming as a DJ, and livestreaming. I also enjoy biking, camping, cooking and homebrewing. 
          </p>
          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul> */}
        </section>

        {/* <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section> */}

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            Feel free to reach out in regards to any of my previous work, potential contracts and oppurtunites, or further information about myself.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  351 Stratford Avenue
                  <br />
                  Pittsburgh PA, 15232
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  412-513-1846
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">tmgyates94@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
