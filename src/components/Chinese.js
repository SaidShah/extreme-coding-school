import React from 'react';
import Slide from 'react-reveal/Slide';
import javaPic from '.././images/web-dev-adults-img.jpg'
import frontEnd from "../images/front-end.svg";
import curr_img from "../images/person-coding.jpg";
import apcs from "../images/minibootcamp.jpg";
import apcsTwo from "../images/adult_learning.jpg";
import javaPicTwo from "../images/computer_class_3.jpg";
import react from "../images/react-logo.svg";
import tutor from "../images/private1.jpg";


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
                <p> 可能因为俺是老师，也是过来人，因此时常有人问俺娃儿课外应该学点啥。我回答说学编程。</p>
                <p> 你可能不以为然, 事实也这样。作为中国人，几乎家家都领着娃儿学提琴、学钢琴，学画画。思想解放一点的， 胆子大一点的，步子快一点的，也鼓励娃儿搞体育。</p>
                <p> 我们两个娃当时都拉提琴，都学画画，儿子还打篮球，长跑。女儿中长跑，跨栏还得过县里高中第三名，这成绩虽然不咋地，但作为父亲，感觉娃挺不易。</p>
                <p> 现在觉得当时那个思路有问题。</p>
                <p> 第一，两娃自从进了大学，提琴，画画都没有再碰过一次。多年的时间、心血、银子都泡汤。虽然不能说文艺熏陶没有用，平心而论，真心感觉不值得。</p>
                <p> 第二，当时以为文体活动对娃申请名校有帮助，事实证明并不是。当然现在更加清楚，申请名校第一靠钱，第二靠运气，第三靠成绩。尤其是如果人人都做一样的文体活动，而自己娃又只是打酱油，对申请学校完全没用处。</p>
                <p> 那为啥学编程是一个好的选择呢？</p>
                <p> 第一，编程是未来社会的发展方向。这个不需要讨论。未来怎么样，啥都靠不住，最好靠自己。编程工作好找，工资有保证。</p>
                <p> 第二，早点学会编程，不管娃儿将来学啥专业，做啥工作都有用。俺两娃大学毕业后做研究及工作，都需要编程做数据处理，女儿还抽时间上过俺的编程课，让俺自豪了一阵。 </p>
                <p> 第三，目前这个情形，如果一个娃能在中学毕业前，逐步把大学计算机系头两年的编程课程上完，并开发出一堆App，我觉得会对申请大学有帮助。</p>
                <p> 第四，退一万步说，即使娃上个普通大学，或者娃大学毕业后找不到好的工作，软件开发技术总是可以作为护身符的，不用担心娃回家啃老。</p>
                <p> 俺猜想可能会有家长认同这些想法，反正闲着也是闲着，就拉着几个搞软件的，开了这个极限编程学校。</p>
                <p> 极限编程学校教些啥呢？</p>
                <p> 简单说，大学计算机系头两年的编程内容，从一张白纸开始，啥都教。</p>
                <p> 第一，我们教网页开发，前端界面，后段数据处理都包括。 </p>
                <p> 第二，我们教AP Computer Science A，通过AP考试后可以拿大学的学分。 </p>
                <p> 第三，我们教正式的大学课程，从易到难，一步步往上走。 </p>
                <p> 极限编程学校学校有啥特点呢？</p>
                <p> 我们是以动手操作为特点。因为是小班，所有的内容都是由老师带着动手做，而且以做project为主，从易到难，学生可以时刻看到自己的进步。</p>
                <p> 极限编程学校的上课时间呢？</p>
                <p> 这个可以商量。有兴趣的家长可以一起讨论。另外，我们还有编程夏令营，娃放暑假后天天来上课，一个夏天能学很多内容。</p>
                <p> 我们也有编程集训营，十五周时间，强化培训，这个是给有兴趣转行做编程的人准备的。</p>
                <p> 极限编程学校对学生有年龄限制吗？</p>
                <p> 原则上没有，但娃得有兴趣，真正想学，不吵不闹，坐得住。所以估计得中学以上，俺们这不做托儿所。</p>
                <p> 极限编程学校能开起来吗？</p>
                <p> 不知道。感觉应该可以。长岛人那么多，有市场，又独此一家编程学校, 如果能够开起来，对长岛人民，包括华人社区，也是一个贡献。拜托朋友们帮忙宣传一下吧。</p>
                <p>下面是我们预计开设的一些课程，详细内容请看英文页面。</p>
              </p>
            </Slide>
          </div>

        </div>

        {/*list hidden until mobile*/}
        <Slide left>
          <p className="course-list" style={{color:"white", width:"100%", textAlign:"left", padding:"5vw"}}>
            <p>可能因为俺是老师，也是过来人，因此时常有人问俺娃儿课外应该学点啥。我回答说学编程。</p>
            <p> 你可能不以为然, 事实也这样。作为中国人，几乎家家都领着娃儿学提琴、学钢琴，学画画。思想解放一点的， 胆子大一点的，步子快一点的，也鼓励娃儿搞体育。</p>
            <p> 我们两个娃当时都拉提琴，都学画画，儿子还打篮球，长跑。女儿中长跑，跨栏还得过县里高中第三名，这成绩虽然不咋地，但作为父亲，感觉娃挺不易。</p>
            <p> 现在觉得当时那个思路有问题。</p>
            <p> 第一，两娃自从进了大学，提琴，画画都没有再碰过一次。多年的时间、心血、银子都泡汤。虽然不能说文艺熏陶没有用，平心而论，真心感觉不值得。</p>
            <p> 第二，当时以为文体活动对娃申请名校有帮助，事实证明并不是。当然现在更加清楚，申请名校第一靠钱，第二靠运气，第三靠成绩。尤其是如果人人都做一样的文体活动，而自己娃又只是打酱油，对申请学校完全没用处。</p>
            <p> 那为啥学编程是一个好的选择呢？</p>
            <p> 第一，编程是未来社会的发展方向。这个不需要讨论。未来怎么样，啥都靠不住，最好靠自己。编程工作好找，工资有保证。</p>
            <p> 第二，早点学会编程，不管娃儿将来学啥专业，做啥工作都有用。俺两娃大学毕业后做研究及工作，都需要编程做数据处理，女儿还抽时间上过俺的编程课，好让俺自豪了一阵。 </p>
            <p> 第三，目前这个情形，如果一个娃能在中学毕业前，逐步把大学计算机系头两年的编程课程上完，并开发出一堆App，我觉得会对申请大学有帮助。</p>
            <p> 第四，退一步说，即使娃上个普通大学，或者娃大学毕业后找不到好的工作，软件开发技术总是可以作为护身符，不用担心娃回家啃老。</p>
            <p> 俺猜想可能会有家长认同这些想法，反正闲着也是闲着，就拉着几个搞软件的，开了这个极限编程学校。</p>
            <p> 极限编程学校教些啥呢？</p>
            <p> 简单说，大学计算机系头两年的编程内容，从一张白纸开始，啥都教。</p>
            <p> 第一，我们教网页开发，前端界面，后段数据处理都包括。 </p>
            <p> 第二，我们教AP Computer Science A，通过AP考试后可以拿大学的学分。 </p>
            <p> 第三，我们教正式的大学课程，从易到难，一步步往上走。 </p>
            <p> 极限编程学校学校有啥特点呢？</p>
            <p> 我们是以动手操作为特点。因为是小班，所有的内容都是由老师带着动手做，而且以做project为主，从易到难，学生可以时刻看到自己的进步。</p>
            <p> 极限编程学校的上课时间呢？</p>
            <p> 这个可以商量。有兴趣的家长可以一起讨论。另外，我们还有编程夏令营，娃放暑假后天天来上课，一个夏天能学很多内容。</p>
            <p> 我们也有编程集训营，十五周时间，强化培训，这个是给有兴趣转行做编程的人准备的。</p>
            <p> 极限编程学校对学生有年龄限制吗？</p>
            <p> 原则上没有，但娃得有兴趣，真正想学，不吵不闹，坐得住。所以估计得中学以上。俺们不做托儿所。</p>
            <p> 极限编程学校能开起来吗？</p>
            <p> 不知道。感觉应该可以。长岛人那么多，有市场，又独此一家编程学校, 如果能够开起来，对长岛广大人民，包括华人社区，也是一个贡献。拜托朋友们帮忙宣传一下吧。</p>
            <p>下面是我们预计开设的一些课程，详细内容请看英文页面。</p>
          </p>
        </Slide>
      </div>


        {/*Full Boot*/}
      <div className="course-top-div">
        <h1 className="center-text bold-text">编程集训营</h1>

        <div className="course-div">
          <div className="course-image-div">
            <img alt="curriculum " src={curr_img} className="curriculum-image"
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
            <img alt="curriculum " src={apcs} className="curriculum-image"
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
            <img src={frontEnd} alt="front end web development extreme coding school" className="course-image"
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
            <img src={react} alt="front end web development extreme coding school" className="course-image"
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
