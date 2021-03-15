import * as React from "react"
import FooterSocial from "./footer-social"

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="ftco-footer ftco-section ">
          <div className="container ">
            <div className="row ">
              <div className="mouse ">
                <a href="# " className="mouse-icon ">
                  <div className="mouse-wheel ">
                    <span className="ion-ios-arrow-up "></span>
                  </div>
                </a>
              </div>
            </div>
            <div className="row mb-5 ">
              <FooterSocial/>
              <div className="col-md ">
                <div className="ftco-footer-widget mb-4 ml-md-5 ">
                  <h2 className="ftco-heading-2 ">Menu</h2>
                  <ul className="list-unstyled ">
                    <li>
                      <a href="shop " className="py-2 d-block ">
                        Store
                      </a>
                    </li>
                    <li>
                      <a href="about " className="py-2 d-block ">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="contact " className="py-2 d-block ">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md ">
                <div className="ftco-footer-widget mb-4 ">
                  <h2 className="ftco-heading-2 ">Have a Question?</h2>
                  <div className="block-23 mb-3 ">
                    <ul>
                      <li>
                        <span className="icon icon-map-marker "></span>
                        <span className="text ">
                          21370 Homestead Rd, Cupertino, CA 95014
                          <br />
                        </span>
                      </li>
                      <li>
                        <a href="tel:// ">
                          <span className="icon icon-phone "></span>
                          <span className="text ">+1 800 007 8990</span>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:vptechnology@hhsfbla.com ">
                          <span className="icon icon-envelope "></span>
                          <span className="text ">
                            caravancommerce@gmail.com
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12 text-center ">
                <p>
                  Copyright &copy;
                  {` ${new Date().getFullYear()}`} Raj Raghulan
                  <br />
                  Made with ❤️❤️ && ☕☕ in Cupertino, CA.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer
