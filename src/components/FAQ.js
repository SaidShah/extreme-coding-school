import React, { Component } from 'react';

class FAQ extends Component {

  render() {
    return (
      <div className="faq-top-margin">
        <h1 className="center-text blue-text bold-text">Frequently Asked Questions</h1>

        <div className="tab faq-width faq-top-margin">
          <input id="tab-one" type="checkbox" name="tabs"/>
          <label htmlFor="tab-one" className="faq-label">What are the starting dates?</label>
          <div className="tab-content faq-width">
          <ul className='faq-ul'>
            <li>You will have the opportunity to choose from multiple starting dates once you have passed the pre-enrollment coding challenges.</li>
            </ul>
          </div>
          </div>

          <div className="tab faq-width faq-top-margin">
            <input id="tab-two" type="checkbox" name="tabs"/>
            <label htmlFor="tab-two" className="faq-label">How much time will I have to dedicate to the program?</label>
            <div className="tab-content faq-width">
            <ul className='faq-ul'>
              <li>In order to be successful in the program you must be willing to dedicate 20 hours of class time per week. You will also have to dedicate between 20-30 hours per week outside of class. </li>
              </ul>
            </div>
            </div>

            <div className="tab faq-width faq-top-margin">
              <input id="tab-three" type="checkbox" name="tabs"/>
              <label htmlFor="tab-three" className="faq-label">Do I need a college degree to enroll?</label>
              <div className="tab-content faq-width">
              <ul className='faq-ul'>
                <li>A college degree is not required. The only requirement is that you must pass the pre-enrollment code challenges in order to be eligible. </li>
                </ul>
              </div>
              </div>

              <div className="tab faq-width faq-top-margin">
              <input id="tab-four" type="checkbox" name="tabs"/>
              <label htmlFor="tab-four" className="faq-label">How do I get started?</label>
              <div className="tab-content faq-width">
          <ul className='faq-ul'>
            <li>You must first apply to the program, then we will be in contact with you to schedule the code challenges. If you are successful in all 3 of the code challenges, you will be eligible to attend, and we will get in touch so you can choose a start date and make your pre-payment. </li>
            </ul>
          </div>
          </div>

          <div className="tab faq-width faq-top-margin">
            <input id="tab-five" type="checkbox" name="tabs"/>
            <label htmlFor="tab-five" className="faq-label">What are the pre-enrollment code challenges?</label>
            <div className="tab-content faq-width">
            <ul className='faq-ul'>
              <li>The first challenge will test your knowledge of HTML and CSS. For the second and third code challenges you will have the option of either completing them in Java, Javascript or Ruby. They are not difficult, but we would like to test your critical thinking and problem-solving skills. </li>
              </ul>
            </div>
            </div>

            <div className="tab faq-width faq-top-margin">
              <input id="tab-six" type="checkbox" name="tabs"/>
              <label htmlFor="tab-six" className="faq-label">Do I need to bring my own computer?</label>
              <div className="tab-content faq-width">
              <ul className='faq-ul'>
                <li>Yes, you must have a Mac computer in order to attend. We require a Mac because we feel if all of the students are working with the same enviornments we will have a much better learning and debugging experience. </li>
                </ul>
              </div>
              </div>

            <div className="tab faq-width faq-top-margin">
              <input id="tab-seven" type="checkbox" name="tabs"/>
              <label htmlFor="tab-seven" className="faq-label">Do I have to purchase any textbooks?</label>
              <div className="tab-content faq-width">
              <ul className='faq-ul'>
                <li>No, the only thing you need to succeed is your laptop and the eagerness to learn. </li>
                </ul>
              </div>
              </div>

              <div className="tab faq-width faq-top-margin">
                <input id="tab-eight" type="checkbox" name="tabs"/>
                <label htmlFor="tab-eight" className="faq-label">What criteria do you look for in those applying?</label>
                <div className="tab-content faq-width">
                <ul className='faq-ul'>
                  <li>The main criteria we look for is your passion and commitment to succeed. Becoming a full-stack developer is difficult and requires lots of hard work, and dedication. We look for applicants who are determined and willing to give the program their all in order to achieve life-changing results.</li>
                  </ul>
                </div>
                </div>

                <div className="tab faq-width faq-top-margin">
                  <input id="tab-ninth" type="checkbox" name="tabs"/>
                  <label htmlFor="tab-ninth" className="faq-label">How are you different from other boot camps?</label>
                  <div className="tab-content faq-width">
                  <ul className='faq-ul'>
                    <li>At Extreme Coding School we have built a curriculum based on the most in-demand technologies specific to the New York market. Especially our Data Structures and Algorithms which most boot camps do not offer.</li>
                    </ul>
                  </div>
                  </div>

                  <div className="tab faq-width faq-top-margin">
                    <input id="tab-tenth" type="checkbox" name="tabs"/>
                    <label htmlFor="tab-tenth" className="faq-label">Are there any scholarships?</label>
                    <div className="tab-content faq-width">
                    <ul className='faq-ul'>
                      <li>We offer early registration pricing and an interest-free payment plan for those who qualify.</li>
                      </ul>
                    </div>
                    </div>

                    <div className="tab faq-width faq-top-margin">
                      <input id="tab-eleventh" type="checkbox" name="tabs"/>
                      <label htmlFor="tab-eleventh" className="faq-label">How long does the program take to complete?</label>
                      <div className="tab-content faq-width">
                      <ul className='faq-ul'>
                        <li>The program takes 15 weeks to complete, and then you will start working with career services to land your first full-stack developer or web developer position.</li>
                        </ul>
                      </div>
                      </div>

        </div>


    );
  }

}

export default FAQ;
