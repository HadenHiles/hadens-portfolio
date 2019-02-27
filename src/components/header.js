import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="heading-wrapper">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="info">
              <i className="icon ion-ios-location-outline"></i>
              <div className="right-area">
                <h5>Mount St. Louis Moonstone</h5>
              </div>
            </div>
          </div>
          
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="info">
              <i className="icon ion-ios-telephone-outline"></i>
              <div className="right-area">
                <h5>705-984-7625</h5>
              </div>
            </div>
          </div>
          
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="info">
              <i className="icon ion-ios-chatboxes-outline"></i>
              <div className="right-area">
                <h5>hadenhiles@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a className="downlad-btn" href="#">Download CV</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
