import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div className="footer-margin">
      <footer className="page-footer font-small color-dark-blue pt-4">

          <div className="container-fluid text-center text-md-left">

            <div className="row" style={{justifyContent:"center"}}>

              <div className="col-md-6" style={{display:"flex", justifyContent:"center"}}>
                <div>
                  <h5 className="text-uppercase font-size-1-5-footer bold-text" style={{textAlign:"center", marginTop:"5%"}}>Extreme Coding School</h5>
                 <p className="font-size-1-2-footer">Learn Programming and Change Your Life</p>
                </div>
              </div>

              <hr className="clearfix w-100 d-md-none" style={{marginTop:"10px", marginBottom:"10px"}}/>
              <div style={{width:"50%", display:"flex", justifyContent:"center"}}>
                <div className="mb-md-0 mb-3" style={{marginBot:"10px", marginRight:"3%", marginLeft:"3%"}}>

                    <h5 className="text-uppercase bold-text footer-bold" style={{fontSize:"1.4vw"}}>About</h5>

                    <ul className="list-unstyled font-size-1-1">
                      <li>
                        <a className="no-transition" href="/curriculum">Curriculum</a>
                      </li>
                      <li>
                        <a className="no-transition" href="/pricing">Pricing</a>
                      </li>
                      <li>
                        <a className="no-transition" href="/requirements">Requirements</a>
                      </li>
                    </ul>

                  </div>
                <div style = {{width:"10px"}}/>
                  <div className="mb-md-0 mb-3" style={{marginRight:"3%", marginLeft:"3%"}}>

                    <h5 className="text-uppercase bold-text footer-bold" style={{fontSize:"1.4vw"}}>Resources</h5>

                    <ul className="list-unstyled font-size-1-1">
                      <li>
                        <a className="no-transition" href="/privacy">Privacy Policy</a>
                      </li>
                      <li>
                        <a className="no-transition" href="/apply">Apply Now</a>
                      </li>
                      <li>
                        <a className="no-transition" href="/faq">FAQ</a>
                      </li>
                      <li>
                        <a className="no-transition" href="/">Home</a>
                      </li>
                    </ul>

                  </div>
                <div style = {{width:"10px"}}/>

                  <div className="mb-md-0 mb-3" style={{marginRight:"3%", marginLeft:"3%"}}>

                    <h5 className="text-uppercase bold-text footer-bold" style={{fontSize:"1.4vw"}}>Contact Us</h5>

                    <ul className="list-unstyled font-size-1-1">
                      <li>
                        <a className="no-transition" href="mailto:admissions@extremecodingschool.com">Email Us</a>
                      </li>
                      <li>
                        <a className="no-transition" href="tel:+6312313240">(631) 213-3240</a>
                      </li>
                    </ul>

                  </div>
                </div>
                <a className="no-transition" href="https://goo.gl/maps/z6EYdnYBwg12" target="_blank" rel="noopener noreferrer">
                  <p className="no-transition font-size-1-5">207 Hallock Road, Stony Brook, NY 11790</p>
                </a>
            </div>

          </div>

          <div className="footer-copyright text-center py-3 font-size-1-5">© 2018 Copyright:
            <a className="no-transition" href="/"> ExtremeCodingSchool.com</a>
          </div>

        </footer>

      </div>
    );
  }

}

export default Footer;
