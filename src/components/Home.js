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
      {this.getImages()}
        <img src={image_one} id="jumbo-image-home" alt="jumbotron " className="jumbo-image"/>
        <h1>HOME PAGE</h1>
      </div>
    );
  }

}

export default Home;
