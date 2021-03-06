import React, { Component } from 'react';

class ContactUs extends Component {

  render() {
    return (
      <div>
        <div>

          <div style={{textAlign:"center"}}>


            <h1 style={{marginBottom:"2%", marginTop:"2%"}}>
              Emails
            </h1>

            <a className="no-transition" href="mailto:extremecodingschool@gmail.com">
              <h3 className="contact-h3" style={{marginBottom: "1%"}}>
                <strong> Tutoring </strong> -
                ExtremeCodingSchool@gmail.com
              </h3>
            </a>

            <a className="no-transition" href="mailto:ExtremeCodingSchool@gmail.com">
              <h3 className="contact-h3" style={{marginBottom: "1%"}}>
                <strong> Admissions </strong> -
                ExtremeCodingSchool@gmail.com
              </h3>
            </a>

            <a className="no-transition" href="mailto:extremecodingschool@gmail.com">
              <h3 className="contact-h3" style={{marginBottom: "1%"}}>
                <strong> General Inquiries </strong> -
                ExtremeCodingSchool@gmail.com
              </h3>
            </a>


            <hr />
            <h1 style={{marginTop:"2%"}}>
              Phone Number
            </h1>
            <h4 style={{marginBottom:"2%"}}>
              Monday - Friday, 10:00 AM - 6:00 PM
            </h4>

            <a className="no-transition" href="tel:6314030302">
              <h3 className="contact-h3">
                <strong> 631-403-0302</strong>
              </h3>
            </a>

          </div>


        </div>
      </div>
    );
  }
}

export default ContactUs;
