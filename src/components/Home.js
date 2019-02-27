import React, { Component } from 'react';
import image_one from '.././images/jumbotron-img-one.jpg'
import image_two from '.././images/jumbotron-img-two.jpg'
import image_three from '.././images/jumbotron-img-three.jpg'
import image_four from '.././images/jumbotron-img-four.jpg'

class Home extends Component {

  getImages=()=>{
     let images=[image_one,image_two,image_three,image_four]
     let currentImage=images[0]
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
          <h1 className="bold-text">Learn Coding</h1>
          <div className="header-img-text image-box">
          <h2 className="bold-text">Featured Languages</h2>
            <div className="row center-text">
              <div className="column box-border"><h3 className="white-letters">HTML & CSS</h3></div>
              <div className="column box-border"><h3 className="white-letters">JavaScript</h3></div>
              <div className="column box-border"><h3 className="white-letters">Ruby & Rails</h3></div>
              <div className="column box-border"><h3 className="white-letters">Algorithms</h3></div>
            </div>

          </div>
        </div>
      </div>
      </div>
    );
  }

}

export default Home;
