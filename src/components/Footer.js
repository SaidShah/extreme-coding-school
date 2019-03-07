import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div className="footer-margin">
      <footer className="page-footer font-small color-dark-blue pt-4">

          <div className="container-fluid text-center text-md-left">

            <div className="row">

              <div className="col-md-6" style={{display:"flex", justifyContent:"center"}}>
                <div>
                  <h5 className="text-uppercase font-size-2-footer bold-text" style={{textAlign:"center", marginTop:"5%"}}>Extreme Coding School</h5>
                 <p className="font-size-1-5-footer">Learn Programming and Change Your Life</p>
                </div>
              </div>

              <hr className="clearfix w-100 d-md-none" style={{marginTop:"10px", marginBottom:"10px"}}/>

              <div className="col-md-3 mb-md-0 mb-3" style={{marginBot:"10px"}}>

                  <h5 className="text-uppercase bold-text" style={{fontSize:"1.8vw"}}>About</h5>

                  <ul className="list-unstyled font-size-1-4">
                    <li>
                      <a className="no-transition" href="mailto:admissions@extremecodingschool.com">Contact Us</a>
                    </li>
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

                <div className="col-md-3 mb-md-0 mb-3">

                  <h5 className="text-uppercase bold-text" style={{fontSize:"1.8vw"}}>Resources</h5>

                  <ul className="list-unstyled font-size-1-4">
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
