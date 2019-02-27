import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <section className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-md-1 col-lg-2"></div>
              <div className="col-md-10 col-lg-8">
                <div className="intro">
                  <div className="profile-img"><img src="theme/images/profile-1-250x250.jpg" alt=""/></div>
                  <h2><b>Haden Hiles</b></h2>
                  <h4 className="font-yellow">Web Developer</h4>
                  <ul className="information margin-tb-30">
                    <li><b>BORN : </b>July 28, 1995</li>
                    <li><b>EMAIL : </b>hadenhiles@gmail.com</li>
                    <li><b>MARITAL STATUS : </b>In a Relationship</li>
                  </ul>
                  <ul className="social-icons">
                    <li><a href="#"><i className="ion-social-pinterest"></i></a></li>
                    <li><a href="#"><i className="ion-social-linkedin"></i></a></li>
                    <li><a href="#"><i className="ion-social-instagram"></i></a></li>
                    <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                    <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>

          {/* Theme scripts */}
          <script src="theme/jquery-3.2.1.min.js"></script>
          <script src="theme/tether.min.js"></script>
          <script src="theme/bootstrap.js"></script>
          <script src="theme/isotope.pkgd.min.js"></script>
          <script src="theme/jquery.waypoints.min.js"></script>
          <script src="theme/progressbar.min.js"></script>
          <script src="theme/jquery.fluidbox.min.js"></script>
          <script src="theme/scripts.js"></script>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
