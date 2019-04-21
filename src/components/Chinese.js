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
                <p> 时常有人问我，孩子课外应该学什么。我的建议是学编程。</p>
                <p> 编程是社会的方向。人工智能是大势所趋，很多职业在被淘汰，而编程行业是一枝独秀，欣欣向荣。</p>
                <p> 何况不管孩子将来学什么，做什么，编程都有用。我的两个孩子大学毕业后做研究及工作，都需要编程做数据处理，就是栗子。 </p>
                <p> 如果孩子在中学毕业前，每周花几个小时，潜移默化，把大学计算机专业头两年的编程课程学完，不是虚头巴脑，而是实实在在开发出一堆App放在网上，那就是大学申请时的“独角兽”。再不济，能编个不错的网站，上面放上高中课外取得的成就，譬如音乐，绘画，舞蹈，体育什么的，既宣传了个性，又能表现出对编程的兴趣，对申请大学也一定会有益处。</p>
                <p> 所以孩子学编程，全是好处，没有坏处。如果您认同这想法，我们的石溪极限编程学校是一个选择。</p>
                <p> 我们学校是长岛第一家，也是唯一的一家全日制编程学校。老师是有二十多年教学经验的大学电脑系教授和年轻的在职程序猿。我们教AP Computer Science, 网页App开发,也教正式大学计算机系头两年的编程内容，从一张白纸开始，由易到难，带着您的孩子一步步往上走。</p>
                <p> 我们的教学以动手操作为主。因为是小班，所有的内容都是由老师带着孩子动手做，而且以做project为主，这样学生和家长都可以随时看到进步。</p>
                <p> 上课时间可以由家长讨论决定。另外，我们还有编程夏令营，孩子放暑假后可以天天来上课，一个夏天下来，能学很多东西。</p>
                <p> 我们也有编程集训营，十五周时间，天天强化培训，不过这个是给有兴趣转行做编程的成人准备的。</p>
                <p> 闲话休提。下面是我们预计开设的一些课程。详细内容请看英文页面。</p>
              </p>
            </Slide>
          </div>

        </div>

        {/*list hidden until mobile*/}
        <Slide left>
          <p className="course-list" style={{color:"white", width:"100%", textAlign:"left", padding:"5vw"}}>
          <p> 时常有人问我，孩子课外应该学什么。我的建议是学编程。</p>
          <p> 编程是社会的方向。人工智能是大势所趋，很多职业在被淘汰，而编程行业是一枝独秀，欣欣向荣。</p>
          <p> 何况不管孩子将来学什么，做什么，编程都有用。我的两个孩子大学毕业后做研究及工作，都需要编程做数据处理，就是栗子。 </p>
          <p> 如果孩子在中学毕业前，每周花几个小时，潜移默化，把大学计算机专业头两年的编程课程学完，不是虚头巴脑，而是实实在在开发出一堆App放在网上，那就是大学申请时的“独角兽”。再不济，能编个不错的网站，上面放上高中课外取得的成就，譬如音乐，绘画，舞蹈，体育什么的，既宣传了个性，又能表现出对编程的兴趣，对申请大学也一定会有益处。</p>
          <p> 所以孩子学编程，全是好处，没有坏处。如果您认同这想法，我们的石溪极限编程学校是一个选择。</p>
          <p> 我们学校是长岛第一家，也是唯一的一家全日制编程学校。老师是有二十多年教学经验的大学电脑系教授和年轻的在职程序猿。我们教AP Computer Science, 网页App开发,也教正式大学计算机系头两年的编程内容，从一张白纸开始，由易到难，带着您的孩子一步步往上走。</p>
          <p> 我们的教学以动手操作为主。因为是小班，所有的内容都是由老师带着孩子动手做，而且以做project为主，这样学生和家长都可以随时看到进步。</p>
          <p> 上课时间可以由家长讨论决定。另外，我们还有编程夏令营，孩子放暑假后可以天天来上课，一个夏天下来，能学很多东西。</p>
          <p> 我们也有编程集训营，十五周时间，天天强化培训，不过这个是给有兴趣转行做编程的成人准备的。</p>
          <p> 闲话休提。下面是我们预计开设的一些课程。详细内容请看英文页面。</p>
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



        <div className="course-div second-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">编程能力: <span className="not-bold-text"> 中 </span> </h5>
            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $8950</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">电脑: <span className="not-bold-text">苹果电脑</span> </h5>
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



        <div className="course-div second-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">编程能力: <span className="not-bold-text"> 中 - 高</span> </h5>
            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $4890</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">工具: <span className="not-bold-text"> 苹果电脑</span> </h5>
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



        <div className="course-div second-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">编程能力: <span className="not-bold-text"> 初</span> </h5>
            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $1,280</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">工具: <span className="not-bold-text"> 手提电脑</span> </h5>
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



        <div className="course-div second-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">编程能力: <span className="not-bold-text"> 中</span> </h5>
            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $1,280</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">工具: <span className="not-bold-text">手提电脑</span> </h5>
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



        <div className="course-div second-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">编程能力: <span className="not-bold-text"> 初</span> </h5>
            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $1,280</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">工具: <span className="not-bold-text"> 手提电脑</span> </h5>
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



        <div className="course-div second-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">编程能力: <span className="not-bold-text"> 中</span> </h5>
            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $960</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">工具: <span className="not-bold-text">手提电脑</span> </h5>
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



        <div className="course-div second-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">编程能力: <span className="not-bold-text"> 中</span> </h5>
            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $1,280</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">工具: <span className="not-bold-text"> 手提电脑</span> </h5>
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



        <div className="course-div second-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">编程能力: <span className="not-bold-text"> 初，高，中</span> </h5>
            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $60 每小时</span> </h5>
          </div>
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">工具: <span className="not-bold-text"> 手提电脑</span> </h5>
            <h5 className="bold-text course-padding-btm">持续时间: <span className="not-bold-text"> </span> </h5>
          </div>
        </div>




      </div>
    </>
);

export default Chinese;
