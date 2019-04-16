import React from 'react';
import Slide from 'react-reveal/Slide';
import javaPic from '.././images/web-dev-adults-img.jpg'


const Chinese = () => (
  <>
  <div className="intro-java-gradient" style={{paddingBottom:"1vw"}}>
    <h3 className="course-title" style={{color:"white"}}>
      <strong> This is your Introduction </strong>
    </h3>
    <div className="course-top-half">
      <div className="course-top-right">
        <Slide left>
          <p className="course-paragraph course-paragraph-left" style={{color:"white", width:"100%", textAlign:"center"}}>
            滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中......
          </p>
        </Slide>
      </div>

    </div>

    {/*list hidden until mobile*/}
    <ul className="course-list" style={{color:"white"}}>
      <li>
        Design and build robust, object-oriented applications
      </li>
      <li>
        Organize complex data using Java collections
      </li>
      <li>
        Read/write files and handle exceptions
      </li>
      <li>
        Get to know Big O notation and efficicent sorting algorithms.
      </li>
    </ul>
  </div>





  <div className="course-top-div">
    <h1 className="center-text bold-text">Bootcamp</h1>

    <div className="course-div">
      <div className="course-image-div">
        <img src={javaPic} alt="front end web development extreme coding school" className="course-image"
          style={{width:"30rem", height:"20rem"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中...... </strong></p>
      </div>
    </div>



    <div className="course-div second-course-div  chinese-div-blue">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Ages: <span className="not-bold-text"> 16+</span> </h5>
        <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text"> Intermediate - Advanced</span> </h5>
        <h5 className="bold-text course-padding-btm">Price: <span className="not-bold-text"> $1,280</span> </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisite: <span className="not-bold-text"> Understanding of Algebra l</span> </h5>
        <h5 className="bold-text course-padding-btm">Tools: <span className="not-bold-text"> Laptop Computer</span> </h5>
        <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 or 8 week track</span> </h5>
      </div>
    </div>



    <h1 className="center-text bold-text">Mini Bootcamp</h1>
    <div className="course-div">
      <div className="course-image-div">
        <img src={javaPic} alt="front end web development extreme coding school" className="course-image"
          style={{width:"30rem", height:"20rem"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中...... </strong></p>
      </div>
    </div>



    <div className="course-div second-course-div  chinese-div-blue">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Ages: <span className="not-bold-text"> 16+</span> </h5>
        <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text"> Intermediate - Advanced</span> </h5>
        <h5 className="bold-text course-padding-btm">Price: <span className="not-bold-text"> $1,280</span> </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisite: <span className="not-bold-text"> Understanding of Algebra l</span> </h5>
        <h5 className="bold-text course-padding-btm">Tools: <span className="not-bold-text"> Laptop Computer</span> </h5>
        <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 or 8 week track</span> </h5>
      </div>
    </div>


    <h1 className="center-text bold-text">AP Computer Science A</h1>
    <div className="course-div">
      <div className="course-image-div">
        <img src={javaPic} alt="front end web development extreme coding school" className="course-image"
          style={{width:"30rem", height:"20rem"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中...... </strong></p>
      </div>
    </div>



    <div className="course-div second-course-div  chinese-div-blue">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Ages: <span className="not-bold-text"> 16+</span> </h5>
        <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text"> Intermediate - Advanced</span> </h5>
        <h5 className="bold-text course-padding-btm">Price: <span className="not-bold-text"> $1,280</span> </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisite: <span className="not-bold-text"> Understanding of Algebra l</span> </h5>
        <h5 className="bold-text course-padding-btm">Tools: <span className="not-bold-text"> Laptop Computer</span> </h5>
        <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 or 8 week track</span> </h5>
      </div>
    </div>


    <h1 className="center-text bold-text">Web Development</h1>
    <div className="course-div">
      <div className="course-image-div">
        <img src={javaPic} alt="front end web development extreme coding school" className="course-image"
          style={{width:"30rem", height:"20rem"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中...... </strong></p>
      </div>
    </div>



    <div className="course-div second-course-div  chinese-div-blue">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Ages: <span className="not-bold-text"> 16+</span> </h5>
        <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text"> Intermediate - Advanced</span> </h5>
        <h5 className="bold-text course-padding-btm">Price: <span className="not-bold-text"> $1,280</span> </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisite: <span className="not-bold-text"> Understanding of Algebra l</span> </h5>
        <h5 className="bold-text course-padding-btm">Tools: <span className="not-bold-text"> Laptop Computer</span> </h5>
        <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 or 8 week track</span> </h5>
      </div>
    </div>


    <h1 className="center-text bold-text">Intro to Java</h1>
    <div className="course-div">
      <div className="course-image-div">
        <img src={javaPic} alt="front end web development extreme coding school" className="course-image"
          style={{width:"30rem", height:"20rem"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中...... </strong></p>
      </div>
    </div>



    <div className="course-div second-course-div  chinese-div-blue">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Ages: <span className="not-bold-text"> 16+</span> </h5>
        <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text"> Intermediate - Advanced</span> </h5>
        <h5 className="bold-text course-padding-btm">Price: <span className="not-bold-text"> $1,280</span> </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisite: <span className="not-bold-text"> Understanding of Algebra l</span> </h5>
        <h5 className="bold-text course-padding-btm">Tools: <span className="not-bold-text"> Laptop Computer</span> </h5>
        <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 or 8 week track</span> </h5>
      </div>
    </div>


    <h1 className="center-text bold-text">Data Structures & Algorithms</h1>
    <div className="course-div">
      <div className="course-image-div">
        <img src={javaPic} alt="front end web development extreme coding school" className="course-image"
          style={{width:"30rem", height:"20rem"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中...... </strong></p>
      </div>
    </div>



    <div className="course-div second-course-div  chinese-div-blue">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Ages: <span className="not-bold-text"> 16+</span> </h5>
        <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text"> Intermediate - Advanced</span> </h5>
        <h5 className="bold-text course-padding-btm">Price: <span className="not-bold-text"> $1,280</span> </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisite: <span className="not-bold-text"> Understanding of Algebra l</span> </h5>
        <h5 className="bold-text course-padding-btm">Tools: <span className="not-bold-text"> Laptop Computer</span> </h5>
        <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 or 8 week track</span> </h5>
      </div>
    </div>


    <h1 className="center-text bold-text">React & Redux</h1>
    <div className="course-div">
      <div className="course-image-div">
        <img src={javaPic} alt="front end web development extreme coding school" className="course-image"
          style={{width:"30rem", height:"20rem"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中...... </strong></p>
      </div>
    </div>



    <div className="course-div second-course-div  chinese-div-blue">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Ages: <span className="not-bold-text"> 16+</span> </h5>
        <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text"> Intermediate - Advanced</span> </h5>
        <h5 className="bold-text course-padding-btm">Price: <span className="not-bold-text"> $1,280</span> </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisite: <span className="not-bold-text"> Understanding of Algebra l</span> </h5>
        <h5 className="bold-text course-padding-btm">Tools: <span className="not-bold-text"> Laptop Computer</span> </h5>
        <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 or 8 week track</span> </h5>
      </div>
    </div>


    <h1 className="center-text bold-text">Tutoring and Private Lessons</h1>
    <div className="course-div">
      <div className="course-image-div">
        <img src={javaPic} alt="front end web development extreme coding school" className="course-image"
          style={{width:"30rem", height:"20rem"}}/>
      </div>
      <div className="course-desc-div">
        <p className="font-size-1-4 p-desc-width">
        <strong>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中...... </strong></p>
      </div>
    </div>



    <div className="course-div second-course-div  chinese-div-blue">
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Ages: <span className="not-bold-text"> 16+</span> </h5>
        <h5 className="bold-text course-padding-btm">Skill Level: <span className="not-bold-text"> Intermediate - Advanced</span> </h5>
        <h5 className="bold-text course-padding-btm">Price: <span className="not-bold-text"> $1,280</span> </h5>
      </div>
      <div className="course-double-ul-div course-padding-left">
        <h5 className="bold-text course-padding-btm">Prerequisite: <span className="not-bold-text"> Understanding of Algebra l</span> </h5>
        <h5 className="bold-text course-padding-btm">Tools: <span className="not-bold-text"> Laptop Computer</span> </h5>
        <h5 className="bold-text course-padding-btm">Duration: <span className="not-bold-text"> 4 or 8 week track</span> </h5>
      </div>
    </div>




  </div>
  </>
);

export default Chinese;
