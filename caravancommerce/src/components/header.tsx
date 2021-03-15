import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }: {[key: string]: any}) => (
  <>
    <div className="py-1 bg-turquoise">
      <div className="container">
        <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
          <div className="col-lg-12 d-block">
            <div className="row d-flex">
              <div className="col-md pr-4 d-flex topper align-items-center">
                <div className="icon mr-2 d-flex justify-content-center align-items-center">
                  <span className="icon-phone2"></span>
                </div>
                <span className="text">+1 (408) 833 3466</span>
              </div>
              <div className="col-md pr-4 d-flex topper align-items-center">
                <div className="icon mr-2 d-flex justify-content-center align-items-center">
                  <span className="icon-paper-plane"></span>
                </div>
                <span className="text">caravancommerce@gmail.com</span>
              </div>
              <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                <span className="text">
                  3-5 Business days delivery &amp; Free Returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <a
          className="navbar-brand"
          href="index"
        >
          Caravan Commerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="index" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="shop" className="nav-link">
                Store
              </a>
            </li>
            <li className="nav-item">
              <a href="about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="contact" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item cta cta-colored">
              <a className="nav-link">
                <i className="fa fa-user" id="userIcon"></i>
              </a>
            </li>

            <li className="nav-item cta cta-colored">
              <a href="cart" className="nav-link">
                <i className="fa fa-shopping-cart" id="cartIcon"></i>[{" "}
                <span id="picked"></span>]
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
