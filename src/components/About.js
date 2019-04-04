import React from 'react';
import said_pic from '.././images/said-pic-min.jpg'
import chen_pic from '.././images/chen-pic-min.jpg'
import dylan_pic from '.././images/dylan-pic-min.jpg'

const About = () => (
  <div>



    <div>
      <div>
        <h1 className="center-text bold-text black-text mission-title" style={{marginTop:"2%"}}>Our Mission</h1>
        <h3 className="center-text about-title bold-text black-text">Mentorship | Community | Practice</h3>
        <hr className="about-us-hr" style={{marginBottom:"2rem"}}/>
      </div>



      <div>
        <div className="row-about">
          <div className="column-about">
            <img className="about-img" src={chen_pic} alt="Ben Chen PhD"/>
          </div>
          <div className="column-about-name">
            <h3 className="bold-text about-font-name">Ben Chen, PhD</h3>
            <h5 className="bold-text about-font">Co-Founder</h5>
            <h6 className="bold-text about-font">Professor in Computer Science</h6>
          </div>
        </div>
        <p className="about-p">
          In high school, my two children were just regular kids.  In Kurt Vonnegut’s terms, they had neither good nor ill fortune. They were healthy, they got reasonably good grades, and they did what they were supposed to -- not unlike many others.
        </p>
        <p className="about-p">
          On a hot summer day, when I was watching them skipping around the soccer field on South P, I suddenly started to think about their future -- Are they going to be alright when they grow up? Are they going to have a career and a rewarding life? At the bare minimum, are they going to be independent financially and not move back in with us after their college?
        </p>
        <p className="about-p">
          I got worried, and I had many reasons to.
        </p>

        <p className="about-p">
          At that time, a large majority of college graduates owed a student loan worth more than two brand-new Audi A4 ($72,000) or, in today’s market, two brand-new Tesla Model 3. This amount, with compound interest, was what they would have to pay back for the rest of their lives. All while they would be trying to get an actual car of their own to go to work, have their own little apartment or house, and do exciting things like — eat.
        </p>
        <p className="about-p">
          Today, as an educator in a local college, I see firsthand many students graduating without employable skills. How can they ever pay off the amount of debt they owe? How can they ever live a rewarding life? I think there is no mystery — for many of them, they simply can’t, and they never will.  They are trapped for the rest of their lives.
        </p>

        <p className="about-p">
          This is the reason we started this school.
        </p>

        <p className="about-p">
          We would like to offer you, whether a student or a parent like me, a little different system, parallel to your routine life. We would teach you or your children a full-stack of highly marketable skills to avoid the life-long trap.
        </p>

        <p className="about-p">
          Here is how the system would work.
        </p>

        <p className="about-p">
          If you are busy, set aside a small block of time each week — maybe one or two evenings or days — to take a programming class with us. We will teach you how to build things from scratch — from simple web sites to complex web and mobile applications. We will teach you how to design the front-end and how to store and manage a large amount of data in the back-end.
        </p>

        <p className="about-p">
          If you have a summer off from high school, come to take an immersive AP Computer Science boot camp. We will teach you everything to pass the AP exam. Its credits can be transferred into most colleges to save you money down the road. Or you may even take our immersive, 5 days a week, hands-on boot camp for 8 weeks. You will learn the full-stack web development technologies both front-end and back-end. Upon completion, you will have built a portfolio of projects to show your passion and make you stand out from the crowd in your college applications.

        </p>

        <p className="about-p">
          If you’re thinking about a career change, you may consider our immersive, 15-week, boot camp. Come talk to us. We will explain how.
        </p>

        <p className="about-p">
          You own your own destiny. You don’t have to lose sleep worrying about the future like I used to. Come travel with us on an exciting journey.
        </p>
      </div>





      <hr className="about-us-hr about-hr-margin"/>

      <div className="row-about">
        <div className="column-about">
          <img className="about-img" src={said_pic} alt="said b shah"/>
        </div>
        <div className="column-about-name">
          <h3 className="bold-text about-font-name">Said B Shah</h3>
          <h5 className="bold-text about-font">Co-Founder</h5>
          <h6 className="bold-text about-font">Full-Stack Developer</h6>
        </div>
      </div>
      <p className="about-p">
        As a software developer, I know how hard it is to become one. Whether it is
        a lack of training or funding, there are many hurdles one has to cross.
      </p>
      <p className="about-p">
        First, it’s hard to get into a Computer Science program in college. I remember when I wanted to major in CS, my counselor said, “Sorry, Said, you just don’t have enough math classes to be accepted”. That was tough for me to hear, especially when I had the passion in programming. Here are some real numbers to show how hard it is. There are about a thousand students who would like to major in CS every year at state universities, there are between 100 and 200 people who actually get in and graduate with a bachelor’s degree.
      </p>
      <p className="about-p">
        Second, even if you’re lucky enough to get into a CS program, it is still hard to learn the practical skills of coding. Most professors don’t code in class. Their mode of teaching consists of hours of mind-numbing PowerPoint slides covering technologies already obsolete. It is hard for many people to learn like that. I, for example, tend to learn by designing algorithms, writing code, and building tangible modern web projects. I believe there are many like-minded people who learn this way.
      </p>

      <p className="about-p">
        Third, now suppose you’ve finished your CS degree and you would like to get a job in the industry. There are still code challenges standing between you and your dream job. If you don’t code a lot, your professors never showed you how to code properly, or your college is theory-oriented and not covering cutting-edge technologies used in the industry, you will have a hard time beating those challenges. Not to mention that you need extensive GitHub repositories, a portfolio website, and a substantive resume to land interviews in the first place. Those are things that a traditional, selective, and expensive CS program typically fails to deliver but are most important to employers.
      </p>
      <p className="about-p">
        Fourth, what if you find your calling in coding after you’ve finished college or even graduate school, and you want a career change. You’ll be out of luck with most CS programs in the country. But our school would be happy to provide you with a learning opportunity. A community of coders in our school will help you reach your career goal.
      </p>

      <p className="about-p">
        This is why we designed our curricula this way. It’s hands-on and project-oriented. It focuses on a full-stack of technologies used currently in the industry.
      </p>




      <hr className="about-us-hr about-hr-margin"/>

      <div className="row-about">
        <div className="column-about">
          <img className="about-img" src={dylan_pic} alt="Dylan T. Downard"/>
        </div>
        <div className="column-about-name">
          <h3 className="bold-text about-font-name">Dylan Downard</h3>
          <h5 className="bold-text about-font">Co-Founder</h5>
          <h6 className="bold-text about-font">Full-Stack Developer</h6>
        </div>
      </div>
      <p className="about-p">
        Back when I was young, like many kids my age, I wanted to play video games. And I did! I played them so much that
        I wanted to make one. So I went on a long journey of self discovery and eventually learned how to code a basic
        game in Lua. Unfortunetly, that took 4 long years because there were no resources for me to learn like I needed to.
      </p>
      <p className="about-p">
        I was a very hyper-active kid, (and am still a hyper-active person,) so for me, sitting down and forcing
        myself to learn how to code was unbearable. Especially when I had to learn code on a computer, where I was
        2 clicks away from playing more video games. The only way I was able to learn most of my school work was from
        private tutors, because the classroom environment was too unfocused for me.
      </p>
      <p className="about-p">
        I ended up going to college for Math, which I was good at, however I had to take an intro CS class and
        it reignited  my passion for programming. I then got into tutoring for Computer Science, as it was second nature
        to me at that point. I started working on other projects, websites, programs and a couple games. I started
        applying for jobs, however, it did not bear fruit.
      </p>
      <p className="about-p">
        While I had experience doing lower level projects when I was young, all school
        had taught me was theory. I could learn all day on what an Object or certain Data Structure
        was, but none of that matters if you don't have anything to show in the real world. Companies
        just don't look at degrees in this field. If you waste 4 years of your life doing nothing but homework
        and no real world projects/work, then you'll be stuck like I was.
      </p>
      <p className="about-p">
        I want to help people avoid this problem. Because of Extreme, I'm able to do so. I am
        in the position where I can help people of all ages learn about code at different
        skill levels and make sure they get the practical side of it all. It drives me forward,
        knowing that other people don't have to go through the trouble I did to get knowledge;
        to waste time learning theory when it didn't apply or wasn't taught right.
      </p>
      <p className="about-p" style={{textAlign: "center"}}>

        <span style={{fontStyle: 'italic'}}>
          "I wasted time, and now doth time waste me."
        </span>
        &nbsp;- William Shakespeare
      </p>


    </div>
  </div>
);

export default About;
