import React from 'react';
import Slide from 'react-reveal/Slide';
import javaPic from '.././images/web-dev-adults-img.jpg'
import curr_img from "../images/person-coding.jpg";
import apcs from "../images/minibootcamp.jpg";
import apcsTwo from "../images/adult_learning.jpg";
import javaPicTwo from "../images/computer_class_3.jpg";
import tutor from "../images/private1.jpg";
import graduate_image from "../images/graduate.jpg";
import programming_image from "../images/programming-image.jpg";


const Chinese = () => (
    <>
      <div className="intro-java-gradient" style={{paddingBottom:"1vw"}}>
        <h3 className="course-title" style={{color:"white"}}>
          <strong> 极限编程学校 </strong>
        </h3>
        <div className="course-top-half">
          <div className="course-top-right-chinese">
            <Slide left>
              <p className="course-paragraph course-paragraph-left" style={{color:"white", width:"100%", textAlign:"left"}}>
              <p> 时常有人问我，孩子课外应该学什么，我的建议是学编程。</p>
              <p> 编程是社会的方向。人工智能是大势，社会上会有越来越多的职业被编程行业淘汰。</p>
              <p> 不论孩子将来学什么，做什么，编程都有用。我的两个孩子在大学毕业后的研究及工作中，都需要编程处理数据，就是例子。 </p>
              <p> 想象一下，如果孩子在中学期间，每周花几个小时，潜移默化，把大学计算机专业头两年的编程课程学完，不是虚头巴脑，而是实实在在开发出一堆App放在网上，那就是大学申请时的“独角兽”。再不济，如果能编个不错的网站，放上自己的成就，譬如音乐，绘画，舞蹈，体育成绩什么的，既宣传个性，又表现出对编程的激情，对申请大学也一定会有益处。</p>
              <p> 总之，编程是可以与数学和英语相比拟的生活技能，具有实在的用处。如果您认同这想法，我们的石溪极限编程学校是学习编程的一个选择。</p>
              <p> 我们是长岛第一家，也是唯一的一家全日制编程学校。老师是有二十多年教学经验的大学电脑专业教授和年轻的在职程序猿。我们教AP Computer Science, 网页App开发,也教正式大学计算机专业头两年的编程课程。我们从一张白纸开始，由易到难，带着您的孩子一步步往上走。</p>
              <p> 我们的教学以动手操作为主。因为是小班，所有的内容都是由老师带着孩子动手做，而且以做project为主，这样学生随时可以看到自己的进步，从而培养兴趣与自信。</p>
              <p> 上课时间可以由家长讨论决定。另外，我们还有编程夏令营，孩子暑假期间可以天天来上课，一个夏天下来，能学到很多东西。</p>
              <p> 我们也有编程集训营，每期十五周时间，天天强化培训，不过这是给有兴趣转行的成人准备的。</p>
              <p> 下面是我们开设的一些课程。详细内容请看英文页面。</p>
              </p>
            </Slide>
          </div>

        </div>

        {/*list hidden until mobile*/}
        <Slide left>
          <p className="course-list" style={{color:"white", width:"100%", textAlign:"left", padding:"5vw"}}>
          <p> 时常有人问我，孩子课外应该学什么，我的建议是学编程。</p>
          <p> 编程是社会的方向。人工智能是大势，社会上会有越来越多的职业被编程行业淘汰。</p>
          <p> 不论孩子将来学什么，做什么，编程都有用。我的两个孩子在大学毕业后的研究及工作中，都需要编程处理数据，就是例子。 </p>
          <p> 想象一下，如果孩子在中学期间，每周花几个小时，潜移默化，把大学计算机专业头两年的编程课程学完，不是虚头巴脑，而是实实在在开发出一堆App放在网上，那就是大学申请时的“独角兽”。再不济，如果能编个不错的网站，放上自己的成就，譬如音乐，绘画，舞蹈，体育成绩什么的，既宣传个性，又表现出对编程的激情，对申请大学也一定会有益处。</p>
          <p> 总之，编程是可以与数学和英语相比拟的生活技能，具有实在的用处。如果您认同这想法，我们的石溪极限编程学校是学习编程的一个选择。</p>
          <p> 我们是长岛第一家，也是唯一的一家全日制编程学校。老师是有二十多年教学经验的大学电脑专业教授和年轻的在职程序猿。我们教AP Computer Science, 网页App开发,也教正式大学计算机专业头两年的编程课程。我们从一张白纸开始，由易到难，带着您的孩子一步步往上走。</p>
          <p> 我们的教学以动手操作为主。因为是小班，所有的内容都是由老师带着孩子动手做，而且以做project为主，这样学生随时可以看到自己的进步，从而培养兴趣与自信。</p>
          <p> 上课时间可以由家长讨论决定。另外，我们还有编程夏令营，孩子暑假期间可以天天来上课，一个夏天下来，能学到很多东西。</p>
          <p> 我们也有编程集训营，每期十五周时间，天天强化培训，不过这是给有兴趣转行的成人准备的。</p>
          <p> 下面是我们预计开设的一些课程。详细内容请看英文页面。</p>
          </p>
        </Slide>
      </div>


      {/*Full Boot*/}
      <div className="course-top-div">
        <h1 className="center-text bold-text">编程集训营</h1>

        <div className="course-div">
          <div className="course-image-div">
            <img alt="curriculum " src={curr_img} className="course-image"
                 style={{width:"30rem", height:"20rem"}}/>
          </div>
          <div className="course-desc-div">
            <p className="font-size-1-4 p-desc-width p-chinese">
              <strong>给想转行做电脑编程的人开的编程集训营。十五周，每周五天由老师领着强化训练。</strong></p>
          </div>
        </div>



        <div className="course-div chinese-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $8950</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">持续时间: <span className="not-bold-text"> 15周</span> </h5>
          </div>
        </div>

        {/*Mini Boot*/}
        <h1 className="center-text bold-text">迷你编程集训营和夏令营</h1>
        <div className="course-div">
          <div className="course-image-div">
            <img alt="curriculum " src={apcs} className="course-image"
                 style={{width:"30rem", height:"20rem"}}/>
          </div>
          <div className="course-desc-div">
            <p className="font-size-1-4 p-desc-width p-chinese">
              <strong>迷你型的编程集训营夏令营是8周时间，每周五天，网页开发前端后端都学，比15周的集训营会减少一些内容，但关键内容都在。</strong></p>
          </div>
        </div>



        <div className="course-div chinese-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $4890</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">持续时间: <span className="not-bold-text"> 8 周</span> </h5>
          </div>
        </div>

        {/*APCS*/}
        <h1 className="center-text bold-text">AP 计算机科学 A</h1>
        <div className="course-div">
          <div className="course-image-div">
            <img src={apcsTwo} alt="front end web development extreme coding school" className="course-image"
                 style={{width:"30rem", height:"23rem"}}/>
          </div>
          <div className="course-desc-div">
            <p className="font-size-1-4 p-desc-width p-chinese">
              <strong>高中AP Computer Science A课程。学完可以参加AP考试，从而获得大多数大学的计算机专业的学分</strong></p>
          </div>
        </div>



        <div className="course-div chinese-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $1,280</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">持续时间: <span className="not-bold-text"> 4 或 8 周</span> </h5>
          </div>
        </div>

        {/*Web Dev*/}
        <h1 className="center-text bold-text">网页开发</h1>
        <div className="course-div">
          <div className="course-image-div">
            <img src={graduate_image} alt="front end web development extreme coding school" className="course-image"
                 style={{width:"30rem", height:"20rem"}}/>
          </div>
          <div className="course-desc-div">
            <p className="font-size-1-4 p-desc-width p-chinese">
              <strong>这个是教授网站前端界面及少量后端开发内容的课程 </strong></p>
          </div>
        </div>



        <div className="course-div chinese-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $1,280</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">持续时间: <span className="not-bold-text"> 4 或 8 周</span> </h5>
          </div>
        </div>

        {/*Intro Java*/}
        <h1 className="center-text bold-text">Java编程入门</h1>
        <div className="course-div">
          <div className="course-image-div">
            <img src={javaPic} alt="front end web development extreme coding school" className="course-image"
                 style={{width:"30rem", height:"20rem"}}/>
          </div>
          <div className="course-desc-div">
            <p className="font-size-1-4 p-desc-width p-chinese">
              <strong>美国大学计算机专业统一的第一学期编程课程 </strong></p>
          </div>
        </div>



        <div className="course-div chinese-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $1,280</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">持续时间: <span className="not-bold-text"> 4 或 8 周</span> </h5>
          </div>
        </div>

        {/*DataStruct*/}
        <h1 className="center-text bold-text">数据结构与算法</h1>
        <div className="course-div">
          <div className="course-image-div">
            <img src={javaPicTwo} alt="front end web development extreme coding school" className="course-image"
                 style={{width:"30rem", height:"23rem"}}/>
          </div>
          <div className="course-desc-div">
            <p className="font-size-1-4 p-desc-width p-chinese">
              <strong>数据结构与算法是给有编程基础的人开的。属于大学计算机专业第二年的课程 </strong></p>
          </div>
        </div>



        <div className="course-div chinese-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $960</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">持续时间: <span className="not-bold-text"> 4 或 8 周</span> </h5>
          </div>
        </div>


        <h1 className="center-text bold-text">React & Redux</h1>
        <div className="course-div">
          <div className="course-image-div">
            <img src={programming_image} alt="front end web development extreme coding school" className="course-image"
                 style={{width:"30rem", height:"20rem"}}/>
          </div>
          <div className="course-desc-div">
            <p className="font-size-1-4 p-desc-width p-chinese">
              <strong>这是给有编程基础的学生准备的课程。介绍目前市场上用于网站前端界面设计的两个热门软件包。 </strong></p>
          </div>
        </div>



        <div className="course-div chinese-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $1,280</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">持续时间: <span className="not-bold-text"> 4 或 8 周</span> </h5>
          </div>
        </div>

        {/*Tutoring*/}
        <h1 className="center-text bold-text">计算机编程补习与辅导</h1>
        <div className="course-div">
          <div className="course-image-div">
            <img src={tutor} alt="front end web development extreme coding school" className="course-image"
                 style={{width:"30rem", height:"20rem"}}/>
          </div>
          <div className="course-desc-div">
            <p className="font-size-1-4 p-desc-width p-chinese">
              <strong>我们还提供个人辅导以及私人订制的课程。</strong></p>
          </div>
        </div>



        <div className="course-div chinese-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">

            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $60 每小时</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">
          
            <h5 className="bold-text course-padding-btm">持续时间: <span className="not-bold-text"> </span> </h5>
          </div>
        </div>




      </div>
    </>
);

export default Chinese;
