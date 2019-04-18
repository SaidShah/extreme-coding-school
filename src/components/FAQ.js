import React, { Component } from 'react';

const QnA = (props) => {
  return (
      <div className="tab faq-width faq-top-margin">
        <input id={props.tabNum} type="checkbox" name="tabs"/>
        <label htmlFor={props.tabNum} className="faq-label">{props.ask}</label>
        <div className="tab-content faq-width">
          <ul className='faq-ul'>
            <li style = {{whiteSpace: "pre-line"}}>{props.answer}</li>
          </ul>
        </div>
      </div>
  );
}

class FAQ extends Component {

  render() {
    return (
      <div className="faq-top-margin">
        <h1 className="center-text blue-text bold-text">Frequently Asked Questions</h1>

        <QnA
            tabNum = {"tab-one"}
            ask = {"What are the starting dates?"}
            answer = {"You will have the opportunity to choose from multiple starting dates once you have passed the pre-enrollment coding challenges."} />

        <QnA
            tabNum = {"tab-two"}
            ask = {"How much time will I have to dedicate to the program?"}
            answer = {"In order to be successful in the program you must be willing to dedicate 20 hours of class time per week. You will also have to dedicate between 20-30 hours per week outside of class."}
        />

        <QnA
            tabNum = {"tab-three"}
            ask = {"Do I need a college degree to enroll?"}
            answer = {"A college degree is not required. The only requirement is that you must pass the pre-enrollment code challenges in order to be eligible."}
        />

        <QnA
            tabNum = {"tab-four"}
            ask = {"How do I get started?"}
            answer = {"You must first apply to the program, then we will be in contact with you to schedule the code challenges. If you are successful in all 3 of the code challenges, you will be eligible to attend, and we will get in touch so you can choose a start date and make your pre-payment."}
        />

        {/*BOOTCAMP*/}
        <QnA
            tabNum = {"tab-five"}
            ask = {'What are the pre-enrollment code challenges?'}
            answer = {"The first challenge will test your knowledge of HTML and CSS. For the second and third code challenges you will have the option of either completing them in Java, Javascript or Ruby. They are not difficult, but we would like to test your critical thinking and problem-solving skills."}
        />

        {/*MOD/REMOVE*/}
        <QnA
            tabNum = {"tab-six"}
            ask = {"Do I need to bring my own computer?"}
            answer = {"Yes, you must have a Mac computer in order to attend. We require a Mac because we feel if all of the students are working with the same environments we will have a much better learning and debugging experience."}
        />

        <QnA
            tabNum = {"tab-seven"}
            ask = {"Do I have to purchase any textbooks?"}
            answer = {"No, the only thing you need to succeed is your laptop and the eagerness to learn."}
        />

        {/*BOOTCAMP?/MOD*/}
        <QnA
            tabNum = {"tab-eight"}
            ask = {"What criteria do you look for in those applying?"}
            answer = {"The main criteria we look for is your passion and commitment to succeed. Becoming a full-stack developer is difficult and requires lots of hard work, and dedication. We look for applicants who are determined and willing to give the program their all in order to achieve life-changing results."}
        />

        {/*BOOTCAMP*/}
        <QnA
            tabNum = {"tab-ninth"}
            ask = {"How are you different from other boot camps?"}
            answer = {"At Extreme Coding School we have built a curriculum based on the most in-demand technologies specific to the New York market. Especially our Data Structures and Algorithms which most boot camps do not offer."}
        />

        <QnA
            tabNum = {"tab-tenth"}
            ask = {"Are there any scholarships?"}
            answer = {"We offer early registration pricing and an interest-free payment plan for those who qualify."}
        />
        {/*BOOTCAMP???*/}
        {/*MOD/REMOVE*/}
        <QnA
            tabNum = {"tab-eleventh"}
            ask = {"How long does the program take to complete?"}
            answer = {"The program takes 15 weeks to complete, and then you will start working with career services to land your first full-stack developer or web developer position."}
        />

        {/*
        <QnA
            tabNum = {"tab-twelfth"}
            ask = {"What is pair programming?"}
            answer = {"In pair programming, there are two parties. One, the driver, is responsible for typing code, while the other, the navigator, tells the driver what to type."}
        />

        <QnA
            tabNum = {"tab-thirteenth"}
            ask = {"I like driving! Can I be the driver all the time?"}
            answer = {"In the car? Sure. But in pair programming, the driver and navigator often switch responsibilities. So we encourage the same. It is important to feel comfortable with both responsibilities, even if you find one seems to come to you more \"naturally\"."}
        />

        <QnA
            tabNum = {"tab-fourteenth"}
            ask = {"Why pair programming?"}
            answer = {
              "We believe that pair programming is an effective tool for learning and writing code. " +
            "                As the saying goes, \"Two heads are better than one\". It's a bit cliche, but there is truth to it. " +
            "                Sometimes you just need a second pair of eyes to figure out a problem, or to keep your code from going " +
            "                off the rails. It can serve to help keep both members focused on the task at hand whereas programming " +
            "                alone one might become distracted or shut down when confronting an obstacle. It is also a highly effective " +
            "                means of pooling knowledge and coming up with novel solutions to challenging problems. Many companies " +
            "                have recognized the value, and begun to implement it in their own workplace, so familiarity with pair programming " +
            "                is also a marketable skill.\n" +
            "                When coding on a team, communication is key, and pair programming does an excellent job of fostering " +
            "                communication skills. The driver and navigator must by definition be in a constant state of communication. " +
            "                In doing so, they will find it easier to remain focused, and when encountering an obstacle, discuss rather " +
            "                than despair. Companies have come to value pair programming for the communication and cooperation it fosters, " +
            "                and many implement this practice in their workplaces today."}
        />

        <QnA
            tabNum = {"tab-fifteenth"}
            ask = {"What if both navigator and driver get stuck? Are we out of options?"}
            answer = {"Extreme Coding School also has tutors that can help if the need arises, but we like to encourage self-reliance first and foremost. We believe that you can learn best, and feel the greatest sense of accomplishment if, when you run into a problem, you are able to solve it yourself, or amongst peers."}
        />
        */}


        {/* NOTE: PLACE ANY ADDITIONAL QnA's ABOVE THIS COMMENT(FOR CONTINUED EASE OF COPY-PASTE)
        <QnA
            tabNum={""}
            ask={""}
            answer={""}
        />
        */}

        </div>


    );
  }

}

export default FAQ;

