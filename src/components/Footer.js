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
                  <h3 className="text-uppercase font-size-1-5-footer bold-text" style={{textAlign:"center", marginTop:"5%"}}>
                    Extreme Coding School
                  </h3>
                  <h4 className="font-size-1-2-footer">
                    Freedom through Practice
                  </h4>
                </div>
              </div>

              <hr className="clearfix w-100 d-md-none" style={{marginTop:"10px", marginBottom:"10px"}}/>
              <div className="footer-links-div">
                <div className="mb-md-0 mb-3" style={{marginBot:"10px", marginRight:"3%", marginLeft:"3%"}}>

                  <h5 className="text-uppercase bold-text footer-bold">About</h5>

                  <ul className="list-unstyled font-size-1-1">
                    <li>
                      <a className="no-transition" href="/bootcamp">Bootcamps</a>
                    </li>
                    <li>
                      <a className="no-transition" href="/courses">Courses</a>
                    </li>
                    <li>
                      <a className="no-transition" href="/requirements">Resources</a>
                    </li>
                  </ul>

                </div>
                <div style = {{width:"10px"}}/>
                <div className="mb-md-0 mb-3" style={{marginRight:"3%", marginLeft:"3%"}}>

                  <h5 className="text-uppercase bold-text footer-bold">Resources</h5>

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

                  <h5 className="text-uppercase bold-text footer-bold">Contact Us</h5>

                  <ul className="list-unstyled font-size-1-1">
                    <li>
                      <a className="no-transition" href="mailto:ExtremeCodingSchool@gmail.com">Tutoring</a>
                    </li>
                    <li>
                      <a className="no-transition" href="mailto:ExtremeCodingSchool@gmail.com">Admissions</a>
                    </li>
                    <li>
                      <a className="no-transition" href="mailto:ExtremeCodingSchool@gmail.com">General Inquiries</a>
                    </li>
                    <li>
                      <a className="no-transition" href="tel:631402-0302">(631) 403-0302</a>
                    </li>
                  </ul>

                </div>
              </div>

            </div>
            <a className="no-transition" href="https://goo.gl/maps/gtGC2NjrCv32" target="_blank" rel="noopener noreferrer">
              <p className="no-transition font-size-1-5" style={{textAlign:"center"}}>
                207 Hallock Road Suite 2F, Stony Brook, NY 11790
              </p>
            </a>
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
