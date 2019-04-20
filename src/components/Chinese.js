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
          <div className="course-top-right">
            <Slide left>
              <p className="course-paragraph course-paragraph-left" style={{color:"white", width:"100%", textAlign:"left"}}>
                <p> 可能因为俺是老师，也是过来人，因此时常有人问娃儿课外应该学点啥。俺建议说学编程。</p>
                <p> 为啥呢？</p>
                <p> 第一，编程是未来社会的发展方向。未来怎么样，娃啥都靠不住，最好靠自己。学会编程，工作好找，工资有保证。</p>
                <p> 第二，学会编程，不管娃儿将来学啥专业，做啥工作都有用。俺两娃大学毕业后做研究及工作，都需要编程做数据处理，女儿还抽时间上过俺的编程课，让俺自豪了一阵。 </p>
                <p> 第三，目前这个情形，如果娃能在中学毕业前，把大学计算机专业头两年的编程课程上完，并开发出一堆App，俺觉得对申请大学计算机专业有帮助。</p>
                <p> 第四，娃要是能自己编个不错的网站，放上自己高中课外取得的成就，譬如音乐，绘画，舞蹈，体育啥的，既宣传了自己，又表现出自己对编程的激情，申请大学也应该会加分。</p>
                <p> 第五，退一步说，即使娃上个普通大学，或者大学毕业后找不到满意的工作，这时如果娃集万千编程技术于一身，绝不会回家啃老。</p>
                <p> 估计有家长认同这想法，俺闲着也是闲着，就拉着几个搞软件的，开了这个极限编程学校。</p>
                <p> 极限编程学校教些啥？</p>
                <p> 简单说，大学计算机系头两年的编程内容，从一张白纸开始，啥都教。</p>
                <p> 第一，我们教网页开发，前端界面，后段数据处理都包括。 </p>
                <p> 第二，我们教AP Computer Science A，通过AP考试可以拿大学的学分。 </p>
                <p> 第三，我们教正式的大学电脑专业课程，从易到难，一步步往上走。 </p>
                <p> 极限编程学校学校有啥特点？</p>
                <p> 我们是以动手操作为特点。因为是小班，所有的内容都是由老师带着动手自己做，而且以做project为主，从易到难，学生可以时刻看到自己的进步。</p>
                <p> 极限编程学校的上课时间呢？</p>
                <p> 这个可以商量。有兴趣的家长可以讨论决定。另外，我们还有编程夏令营，娃放暑假后天天来上课，一个夏天能学很多东西。</p>
                <p> 我们也有编程集训营，十五周时间，强化培训，不过这个是给有兴趣转行做编程的成人准备的哈。</p>
                <p> 极限编程学校对学生有年龄限制吗？</p>
                <p> 原则上没有，但娃得有兴趣，真正想学，不吵不闹，坐得住。所以估计得中学以上，不是客气，俺们几个男人开托儿所还真不行。</p>
                <p> 闲话休提，书归正传。下面是我们预计开设的一些课程，详细内容请看英文页面。</p>
              </p>
            </Slide>
          </div>

        </div>

        {/*list hidden until mobile*/}
        <Slide left>
          <p className="course-list" style={{color:"white", width:"100%", textAlign:"left", padding:"5vw"}}>
            <p> 可能因为俺是老师，也是过来人，因此时常有人问娃儿课外应该学点啥。俺建议说学编程。</p>
            <p> 为啥呢？</p>
            <p> 第一，编程是未来社会的发展方向。未来怎么样，娃啥都靠不住，最好靠自己。学会编程，工作好找，工资有保证。</p>
            <p> 第二，学会编程，不管娃儿将来学啥专业，做啥工作都有用。俺两娃大学毕业后做研究及工作，都需要编程做数据处理，女儿还抽时间上过俺的编程课，让俺自豪了一阵。 </p>
            <p> 第三，目前这个情形，如果一个娃能在中学毕业前，把大学计算机专业头两年的编程课程上完，并开发出一堆App，俺觉得会对申请大学计算机专业有帮助。</p>
            <p> 第四，如果娃能自己编个不错的网站，放上自己高中课外取得的成就，譬如音乐，绘画，舞蹈，体育啥的，既宣传了自己，又表现出自己对编程的激情，申请大学也应该会加分。</p>
            <p> 第五，退一步说，即使娃上个普通大学，或者大学毕业后找不到自己满意的工作，这时如果娃集万千编程技术于一身，绝不会回家啃老。</p>
            <p> 估计有家长认同这想法，俺闲着也是闲着，就拉着几个搞软件的，开了这个极限编程学校。</p>
            <p> 极限编程学校教些啥？</p>
            <p> 简单说，大学计算机系头两年的编程内容，从一张白纸开始，啥都教。</p>
            <p> 第一，我们教网页开发，前端界面，后段数据处理都包括。 </p>
            <p> 第二，我们教AP Computer Science A，通过AP考试可以拿大学的学分。 </p>
            <p> 第三，我们教正式的大学电脑专业课程，从易到难，一步步往上走。 </p>
            <p> 极限编程学校学校有啥特点呢？</p>
            <p> 我们是以动手操作为特点。因为是小班，所有的内容都是由老师带着动手自己做，而且以做project为主，从易到难，学生可以时刻看到自己的进步。</p>
            <p> 极限编程学校的上课时间呢？</p>
            <p> 这个可以商量。有兴趣的家长可以一起讨论。另外，我们还有编程夏令营，娃放暑假后天天来上课，一个夏天能学很多东西。</p>
            <p> 我们也有编程集训营，十五周时间，强化培训，这个是给有兴趣转行做编程的成人准备的哈。</p>
            <p> 极限编程学校对学生有年龄限制吗？</p>
            <p> 原则上没有，但娃得有兴趣，真正想学，不吵不闹，坐得住。所以估计得中学以上。不是客气，俺们几个男人开托儿所还真不行。</p>
            <p> 闲话休提，书归正传。下面是我们预计开设的一些课程，详细内容请看英文页面。</p>
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
            <p className="font-size-1-4 p-desc-width">
              <strong>给想转行做电脑编程的人开的编程集训营。十五周，每周五天由老师领着强化训练。</strong></p>
          </div>
        </div>



        <div className="course-div second-course-div  chinese-div-blue">
          <div className="course-double-ul-div course-padding-left">
            <h5 className="bold-text course-padding-btm">编程能力: <span className="not-bold-text"> 中 </span> </h5>
            <h5 className="bold-text course-padding-btm">价格: <span className="not-bold-text"> $8990</span> </h5>
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
            <p className="font-size-1-4 p-desc-width">
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
                 style={{width:"30rem", height:"20rem"}}/>
          </div>
          <div className="course-desc-div">
            <p className="font-size-1-4 p-desc-width">
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
            <p className="font-size-1-4 p-desc-width">
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
            <p className="font-size-1-4 p-desc-width">
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
                 style={{width:"30rem", height:"20rem"}}/>
          </div>
          <div className="course-desc-div">
            <p className="font-size-1-4 p-desc-width">
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
            <p className="font-size-1-4 p-desc-width">
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
            <p className="font-size-1-4 p-desc-width">
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
