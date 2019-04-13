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

            <a className="no-transition" href="mailto:admissions@extremecodingschool.com">
              <h3 className="contact-h3" style={{marginBottom: "1%"}}>
                <strong> Tutoring </strong> -
                tutoring@extremecodingschool.com
              </h3>
            </a>

            <a className="no-transition" href="mailto:admissions@extremecodingschool.com">
              <h3 className="contact-h3" style={{marginBottom: "1%"}}>
                <strong> Admissions </strong> -
                admissions@extremecodingschool.com
              </h3>
            </a>

            <a className="no-transition" href="mailto:info@extremecodingschool.com">
              <h3 className="contact-h3" style={{marginBottom: "1%"}}>
                <strong> General Inquiries </strong> -
                info@extremecodingschool.com
              </h3>
            </a>


            <hr />
            <h1 style={{marginTop:"2%"}}>
              Phone Number
            </h1>
            <h4 style={{marginBottom:"2%"}}>
              (Available: Mon-Fri 10am-6pm)
            </h4>

            <a className="no-transition" href="tel:6312133240">
              <h3 className="contact-h3">
                <strong> 631-213-3240</strong>
              </h3>
            </a>

          </div>


        </div>
      </div>
    );
  }
}

export default ContactUs;
