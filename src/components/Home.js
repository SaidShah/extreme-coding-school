import React, { Component } from 'react';
import image_one from '.././images/jumbotron-img-one.jpg'
import image_two from '.././images/jumbotron-img-two.jpg'
import image_three from '.././images/jumbotron-img-three.jpg'
import image_four from '.././images/jumbotron-img-four.jpg'

class Home extends Component {

  getImages=()=>{
     let images=[image_one,image_two,image_three,image_four]
     let index = 0;

     setInterval(function(){
       if(index >= 3){
         index = 0

         document.getElementById("jumbo-image-home").src = images[index]
       }else {
         index++
         document.getElementById("jumbo-image-home").src = images[index]

       }

     },5000)
  }

  render() {
    return (
      <div>
      <div className="header-img-container center-text">
      {this.getImages()}
        <img src={image_one} id="jumbo-image-home" alt="jumbotron " className="jumbo-image"/>
        <div className="header-img-text center-text white-text">
          <h2 className="bold-text">Extreme Coding School</h2>
          <h1 className="bold-text">Become a developer in 12 weeks</h1>
          <div className="header-img-text image-box">
          <h2 className="bold-text">Featured Languages</h2>
            <div className="row">
              <div className="column box-border">
                <h5 className="white-letters">HTML & CSS</h5>
                <p>Build projects as you dive into detail about how the browser works and what exactly the source code comprising a web page does.</p>
              </div>

              <div className="column box-border">
                <h5 className="white-letters">JavaScript</h5>
                <p>Consume RESTful API's, Parse JSON to extract data, use AJAX to update data on a website in real time, get comfortable with event handlers, etc...</p>
                </div>
              <div className="column box-border">
              <h5 className="white-letters">Ruby & Rails</h5>
              <p>Learn Basic + Intermediate Ruby,Test-Driven Development,
                ActiveRecord, Database Queries, Joins, Schema Design, etc... </p>
              </div>
              <div className="column box-border">
                <h5 className="white-letters">Algorithms</h5>
                <p>Practice computer science fundamentals, Learn which data structures to use for specific problems,
                    Learn most efficient search and sort algorithms, etc...</p>
                </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    );
  }

}

export default Home;
