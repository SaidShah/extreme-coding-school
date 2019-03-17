import React, { PureComponent } from 'react';

class CurriculumSections extends PureComponent {



  render() {
    return (
      <div>
      <div className="wrapper">


        <div className="half">

          <div className="tab">
            <input id="tab-one" type="checkbox" name="tabs"/>
            <label htmlFor="tab-one" className="curriculum-label">Module 1: Gain an in-depth knowledge of Git, Ruby, HTML & SQL </label>
            <label htmlFor="tab-one" className="curriculum-label-mobile">Module 1: Git, Ruby, HTML & SQL </label>
            <hr className="curriculum-hr"/>
            <div className="tab-content">
            <div className="row">
              <div className="column-left curriculum-text">
                <h4 className="curriculum-h4">Description:</h4>
                <p>Begin your journey by learning version control & GIT as you dive deep into object-orientation in Ruby. Create & manipulate databases as you learn how to efficiently debug applications. Master the building blocks of the web and become fluent in HTML & CSS.</p>

              </div>
                <div className="column-right curriculum-text">

                <h4 className="curriculum-h4">What You Will Learn:</h4>
                <ul>
                  <li>Git and version control through push, pull, merge, branching, and more.</li>
                  <li>Gain a thorough understanding of Ruby including repls, arrays, objects, hashes, regex, iterators, and more.</li>
                  <li>Learn how to build beautiful UIs for web apps by using HTML & CSS</li>
                  <li>Create, normalize and manipulate tables with PostgreSQL and SQLite3</li>
                </ul>

                </div>
            </div>
            </div>
          </div>

          <div className="tab">
            <input id="tab-two" type="checkbox" name="tabs"/>
            <label htmlFor="tab-two" className="curriculum-label">Module 2: Master JSON and Frameworks like Rails and Rack</label>
            <label htmlFor="tab-two" className="curriculum-label-mobile">Module 2: JSON, Rails and Rack</label>
              <hr className="curriculum-hr"/>
            <div className="tab-content">
            <div className="row">
              <div className="column-left curriculum-text">
                <h4 className="curriculum-h4">Description:</h4>
                <p>By having a good foundation in Ruby as well as knowledge of how the web works, students utilize Rails to build complex functional back-ends. Create servers, manipulate data and learn all about APIs. Experience how quickly you can build incredible apps and back-ends with Rails.</p>

              </div>
                <div className="column-right curriculum-text">

                <h4 className="curriculum-h4">What You Will Learn:</h4>
                <ul>
                  <li>Learn how to draw routes and create forms</li>
                  <li>Gain a thorough understanding of concepts like Authorization and Validation</li>
                  <li>Understand design patterns and architectural patterns such as REST and MVC</li>
                  <li>Build your own HTTP server and learn how the request / response model of the web works</li>
                </ul>

                </div>
            </div>
            </div>
          </div>

          <div className="tab">
            <input id="tab-three" type="checkbox" name="tabs"/>
            <label htmlFor="tab-three" className="curriculum-label">Module 3: Learn JavaScript, the DOM, Node and JSON</label>
            <label htmlFor="tab-three" className="curriculum-label-mobile">Module 3: JavaScript, DOM, Node and JSON</label>
              <hr className="curriculum-hr"/>
            <div className="tab-content">

            <div className="row">
              <div className="column-left curriculum-text">
                <h4 className="curriculum-h4">Description:</h4>
                <p>Learn and understand functional programming with JavaScript which is crucal for front-end devs. Dive into detail about how the browser works and what exactly the source code comprising a web page does. Learn how to communicate with other systems to enable you to do even more with yours.</p>

              </div>
                <div className="column-right curriculum-text">

                <h4 className="curriculum-h4">What You Will Learn:</h4>
                <ul>
                  <li>Learn different approaches to the object model, javaScript syntax and functional architecture</li>
                  <li>Manipulate the DOM and use one of the webs most famous frameworks, jQuery.</li>
                  <li>Manipulate webpages with event listeners and events</li>
                  <li>Build full-stack Javascript web applications from end-to-end with JavaScript and your knowledge of Rails</li>
                  <li>Build real-time web application servers with Node and Express frameworks</li>
                </ul>

                </div>
            </div>
            </div>
          </div>


          <div className="tab">
            <input id="tab-four" type="checkbox" name="tabs"/>
            <label htmlFor="tab-four" className="curriculum-label">Module 4: Dive into React, Redux and Json Web Tokens</label>
            <label htmlFor="tab-four" className="curriculum-label-mobile">Module 4: React, Redux and JSON Web Tokens</label>
              <hr className="curriculum-hr"/>
            <div className="tab-content">
            <div className="row">
              <div className="column-left curriculum-text">
                <h4 className="curriculum-h4">Description:</h4>
                <p>Learn and understand the premier JavaScript framework which is React to make your web applications more manageable. Understand and build scalable front-ends with React and Redux, while writing slick functional reactive code with Redux as a state manager and Rails as the back-end JSON API</p>

              </div>
                <div className="column-right curriculum-text">

                <h4 className="curriculum-h4">What You Will Learn:</h4>
                <ul>
                  <li>Learn the file structure of React, how to draw routes, create forms, and more</li>
                  <li>Build end-to-end web applications with Rails in the back-end and React in the front-end</li>
                  <li>Understand and implement state management with Redux</li>
                  <li>Build applications that consume APIs and scale as application complexity increases</li>
                </ul>

                </div>
            </div>
            </div>
          </div>


          <div className="tab tab-bottom">
            <input id="tab-five" type="checkbox" name="tabs"/>
            <label htmlFor="tab-five" className="curriculum-label">Module 5: Learn Data Structures and Algorithms</label>
            <label htmlFor="tab-five" className="curriculum-label-mobile">Module 5: Learn Data Structures and Algorithms</label>
              <hr className="curriculum-hr"/>
            <div className="tab-content">
            <div className="row">
              <div className="column-left curriculum-text">
                <h4 className="curriculum-h4">Description:</h4>
                <p>To understand the ramifications of how data is stored and accesed, students build their knowledge of Stacks, Queues, Trees and Graphs. Gain a thorough understanding of Big O while implementing the most popular sorting and searching algorithms.</p>

              </div>
                <div className="column-right curriculum-text">

                <h4 className="curriculum-h4">What You Will Learn:</h4>
                <ul>
                  <li>Understand how to search for data with depth first search, breath first search and more</li>
                  <li>Learn how to sort small and large data sets by implementing sorting algorithms</li>
                  <li>Understand which data structures to use based on the given problem to come up with the most efficient solution</li>
                  <li>Learn about space and time complexities as well as Big-O </li>
                </ul>

                </div>
            </div>
            </div>
          </div>


        </div>
      </div>
      </div>

    );
  }

}

export default CurriculumSections;
