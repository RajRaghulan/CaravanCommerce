import * as React from "react";
import useOnScreen from '../hooks';

const FooterSocial = () => {
  const ref = React.useRef();
  let socialClass = 'ftco-animate';
  console.log(ref);
  if(!(ref.current && ref.current.querySelector('.ftco-animated'))) {
    socialClass += useOnScreen(ref) ? 'ftco-animate fadeInUp ftco-animated' : '';
  }
  return (
    <>
      <div className="col-md " ref={ref}>
        <div className="ftco-footer-widget mb-4 ">
          <h2 className="ftco-heading-2 ">Caravan Commerce</h2>
          <p>Dress for Success.</p>
          <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5 ">
            <li className={socialClass}>
              <a href="https://www.facebook.com/homestead8990/ ">
                <span className="icon-facebook "></span>
              </a>
            </li>
            <li className={socialClass}>
              <a href="https://www.instagram.com/homesteadfbla/?hl=en ">
                <span className="icon-instagram "></span>
              </a>
            </li>
            <li className={socialClass}>
              <a href="https://twitter.com/homesteadfbla ">
                <span className="icon-twitter "></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

// class FooterSocial extends React.Component {
//   ref = React.useRef()
//   isVisible = useOnScreen(this.ref)

//   render() {
//     return
//   }
// }

export default FooterSocial
