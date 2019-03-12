import React, { PureComponent } from 'react';

class Requirements extends PureComponent {

  render() {
    return (
      <div className="faq-top-margin faq-width bold-text">
        <h1 className="center-text blue-text bold-text">Program Requirements</h1>
        <p className="center-text black-text">Although there are not many requirements, we adhere strictly to the ones we do have. There are 5 basic requirements that will enable us to help our students achieve their goals of becoming professional developers. </p>
        <ol>
          <li className="black-text">A prospective student must own or be able to obtain a Mac laptop computer before or on the first day of class. Our curriculum is built so our students can learn by actually coding solutions for real-world problems, so having a Mac computer is strictly enforced.</li>
          <li className="black-text">A prospective student must pass the first code challenge which will test their understanding of basic HTML and CSS.</li>
          <li className="black-text">A prospective student must pass the second code challenge which will test their critical thinking ability through the use of some basic algorithms using either Java, JavaScript or Ruby.</li>
          <li className="black-text">A prospective student must pass the third code challenge which will test their problem solving ability through the use of basic data structures in a either Java or JavaScript.</li>
          <li className="black-text">After the other four requirements are met the student will be ready to start, and there will be a payment due before, or on the first day of class, which must be paid in order to attend.</li>
        </ol>

        <br/>
        <br/>
        <br/>
        <p className="center-text black-text">Due to the competitive pricing at Extreme Coding School we have a very competitive application process, so students are encouraged to apply early, and study before their code challenges.</p>
        <br/>
        <br/>
        <h1 className="center-text blue-text bold-text">Prepare For The Code Challenge</h1>
        <br/>
        <br/>
        <h3 className=" bold-text">HTML & CSS</h3>
        <ol>
          <li><a href="https://www.htmldog.com/references/html/tags/" target="_blank" rel="noopener noreferrer">Learn all about HTML tags</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noopener noreferrer">Learn all about HTML tags from the MDN web docs</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference" target="_blank" rel="noopener noreferrer">Understand CSS through the MDN web docs</a></li>
          <li><a href="https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048" target="_blank" rel="noopener noreferrer">30 CSS selectors to memorize</a></li>
          <li><a href="http://flukeout.github.io/" target="_blank" rel="noopener noreferrer">A fun game to test your CSS selector skills</a></li>
          <li><a href="https://repl.it/repls/MagentaRobustHacks" target="_blank" rel="noopener noreferrer">Practice Coding HTML & CSS</a></li>
        </ol>
        <br/>
        <h3 className=" bold-text">JavaScript</h3>
        <ol>
          <li><a href="https://developers.google.com/web/tools/chrome-devtools/console/#open_as_panel" target="_blank" rel="noopener noreferrer">Getting familiar with Chrome Devtools</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" target="_blank" rel="noopener noreferrer">JavaScript Data Types and Data Structures</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">Practive JavaScript Strings</a></li>
            <li><a href="https://dorey.github.io/JavaScript-Equality-Table/" target="_blank" rel="noopener noreferrer">JavaScript equality table</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals" target="_blank" rel="noopener noreferrer">JavaScript conditionals</a></li>
            <li><a href="https://repl.it/repls/AjarJuicyBugs" target="_blank" rel="noopener noreferrer">Practice Coding JavaScript</a></li>
        </ol>

        <br/>
        <h3 className=" bold-text">Ruby</h3>
        <ol>
          <li><a href="http://docs.railsbridge.org/ruby/datatypes" target="_blank" rel="noopener noreferrer">Learn Ruby data types</a></li>
          <li><a href="https://code.tutsplus.com/articles/rspec-testing-for-beginners-part-1--cms-26716" target="_blank" rel="noopener noreferrer">Learn Ruby Rspec testing</a></li>
          <li><a href="https://pine.fm/LearnToProgram/chap_03.html" target="_blank" rel="noopener noreferrer">More Ruby variables</a></li>
          <li><a href="http://phrogz.net/programmingruby/tut_methods.html" target="_blank" rel="noopener noreferrer">Understanding Ruby methods</a></li>
          <li><a href="https://www.ruby-lang.org/en/documentation/quickstart/" target="_blank" rel="noopener noreferrer">Learn Ruby fast with IRB</a></li>
            <li><a href="https://repl.it/repls/FlawedGlamorousPlots" target="_blank" rel="noopener noreferrer">Practice Coding in Ruby</a></li>
        </ol>
      </div>
    );
  }

}

export default Requirements;
