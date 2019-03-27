import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
{/*import schedule from '.././images/mock-schedule.svg'*/}

const Courses = () => (
  <div>
    <div style={{display:"grid"}}>
      <h style={{textAlign:"center", marginTop:"1%", marginBottom: "1%", fontSize:"2.7rem"}}>
        <Fade top>
          This is our schedule.
        </Fade>
      </h>
      <img  className="schedule-image" alt="school schedule"/>
      <p style={{width:"70%", textAlign: "center", margin:"auto", marginTop: "5%", fontSize: "1.3rem"}}>
        Here at Extreme, we offer many different courses for our students to choose from. We have everything
        from the Full-Stack development course like Boot Camp to learn everything
        you need to get a job in web development, or a smoother, and lighter,
        Front End course that allows students to learn about the basics of web design.
      </p>

      <h2 style={{textAlign:"center", marginTop: "5%"}}> (Here's a more in-depth look at what we offer.)</h2>
    </div>

    {/* Front End */}
    <div style={{background:"#7fc6ff"}}>
      <h1 style={{textAlign: "center", marginTop:"5%", paddingTop:"3%"}}>
        Front End Crash Course
      </h1>
      <div style={{display:"flex", marginTop:"4%"}}>
        <div style={{width:"35%", marginLeft: "17%", marginBottom: "4%"}}>
          <p style={{width:"75%", textAlign: "center", fontSize: "1.4rem"}}>
            <Slide left>
              The Front End Crash Course will include what any basic Front End development would need,
              which would be HTML5, CSS3, and Javascript.
            </Slide>
          </p>
        </div>

        <div style={{width:"35%", marginRight: "13%"}}>
          <Slide right>
            <ul style={{fontSize:"1.2rem"}}>
              <li>Learn HTML5 and how to properly lay elements onto a page seamlessly</li>
              <li>Learn CSS3 and stylize your elements to captivate your audience</li>
              <li>Learn Javascript and create reactive web pages that puts you on a higher level</li>
            </ul>
          </Slide>
        </div>
      </div>
      <Fade>
        <h4 style={{textAlign: "center"}}>
          We offer either an 8 Week, Weekend Course or a 4 Week,
          Weekday Course.
        </h4>
        <h4 style={{textAlign: "center", paddingBottom:"2%", color:"black"}}>
          Contact us for more info.
        </h4>
      </Fade>
    </div>

    {/* React/Redux */}
    <div style={{background:"#282c34"}}>
      <h1 style={{textAlign: "center", marginTop:"2%", color:"#61dafb", paddingTop:"3%"}}>
        React and Redux
      </h1>
      <div style={{display:"flex", marginTop:"4%"}}>
        <div style={{width:"35%", marginLeft: "17%", marginBottom: "4%"}}>
          <p style={{width:"75%", textAlign: "center", fontSize: "1.4rem", color:"#61dafb"}}>
            <Slide left>
              Heighten your web development prowess with React and Redux. These two Javascript
              libraries allow you to push your Front End skills farther than before, and preps
              you for real world projects.
            </Slide>
          </p>
        </div>

        <div style={{width:"35%", marginRight: "13%"}}>
          <Slide right>
            <ul style={{fontSize:"1.2rem", color:"#61dafb"}}>
              <li>React will allow you to add statefulness to your HTML/CSS,
                effectively turning it into a way to run Javascript and allow you
                to open up many new ways of designing functionality for web.
              </li>
              <li>Redux is a container for statefulness, making it easier and lighter
                to code in React.
              </li>
            </ul>
          </Slide>
        </div>
      </div>
      <Fade>
        <h4 style={{textAlign: "center", color:"#61dafb"}}>
          We offer an 8 Week, Weekday Night Course.
        </h4>
        <h4 style={{textAlign: "center", paddingBottom:"2%", color:"#61dafb"}}>
          Contact us for more info.
        </h4>
      </Fade>
    </div>


    {/* Java */}
    <div className="java-gradient">
      <h1 style={{textAlign: "center", marginTop:"2%", paddingTop:"3%", color:"white"}}>
        Java
      </h1>
      <div style={{display:"flex", marginTop:"4%"}}>
        <div style={{width:"35%", marginLeft: "17%", marginBottom: "4%"}}>
          <p style={{width:"75%", textAlign: "center", fontSize: "1.4rem", color:"white"}}>
            <Slide left>
              Enter into Object Oriented Programming (OOP) with Java. Java is widely used in
              applications deployed all over the world; from apps on your smartphone to large
              databases for multi-billion dollar companies.
            </Slide>
          </p>
        </div>

        <div style={{width:"35%", marginRight: "13%"}}>
          <Slide right>
            <ul style={{fontSize:"1.2rem", color:"white"}}>
              <li>
                Learn a language that can be used on any operating system.
              </li>
              <li>
                Find out how modular programming can be powerful.
              </li>
              <li>
                My brain is malfunctioning and I don't know what to write.
              </li>
              <li>
                Course also covers AP-CS A so you are able to take the AP Test with the knowledge
                from this class.
              </li>
            </ul>
          </Slide>
        </div>
      </div>
      <Fade>
        <h4 style={{textAlign: "center", color:"white"}}>
          We offer an 8 Week, Weekday Night Course.
        </h4>
        <h4 style={{textAlign: "center", paddingBottom:"2%", color:"white"}}>
          Contact us for more info.
        </h4>
      </Fade>
    </div>
    {/* Private Lessons */}

    <hr style={{marginTop:"2rem", marginBottom:"2rem", borderTop:"3px solid rgba(0,0,0,.1)"}}/>

    <Fade top>
      <h2 style={{textAlign:"center", paddingTop:"2rem", paddingBottom: "2rem"}}>
        In case you're wondering: We offer private classes.
      </h2>
    </Fade>

    <hr style={{marginTop:"2rem", marginBottom:"2rem", borderTop:"3px solid rgba(0,0,0,.1)"}}/>

    <div className="bootcamp-gradient">
      <h1 style={{textAlign: "center", paddingTop:"3%", color:"white"}}>
        Private Classes
      </h1>
      <div style={{display:"flex", marginTop:"8%", marginBottom: "8%"}}>
        <p style={{width:"80%", textAlign: "center", fontSize: "2rem", color:"white", margin:"auto"}}>
          <Fade>
            We offer private, 1 on 1 (or more) classes to help you learn the way you're comfortable
            with. We are able to teach any of the above courses to you.
          </Fade>
        </p>
      </div>
      <Fade>
        <h4 style={{textAlign: "center", color:"white"}}>
          We go on a student by student basis to make sure we get your needs right.
        </h4>
        <h4 style={{textAlign: "center", paddingBottom:"2%", color:"white"}}>
          Contact us for more info.
        </h4>
      </Fade>
    </div>
  </div>
);

export default Courses;
