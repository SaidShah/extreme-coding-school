import React, { Component } from 'react';
import database from './base'
// import senderMail from './sendmail'

class ApplyForm extends Component {

    state={
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      college: '',
      major: '',
      course: '',
      comments: '',
      contacted: '',
      dateapplied: ''
    }

    componentDidMount() {
      let userLocArr= this.props.props.location.pathname.split("/")
      let userCourse = userLocArr[userLocArr.length-1]
      if(userCourse==="FrontEnd8wSS-June"){
        this.setState({course: "FrontEnd8wSS-June"})
      }else if(userCourse==="FrontEnd8wTTR-June"){
        this.setState({course: "FrontEnd8wTTR-June"})
      }else if(userCourse ==="DataStruct8wMW-June"){
        this.setState({course: "DataStruct8wMW-June"})
      }else if(userCourse ==="dataStructuresTR"){
        this.setState({course: "dataStructuresTR"})
      }else if(userCourse==="APCS4w-June"){
        this.setState({course: "APCS4w-June"})
      }else if(userCourse==="APCS8wMW-June"){
        this.setState({course: "APCS8wMW-June"})
      }else if(userCourse==="APCS8wTTR-June"){
        this.setState({course: "APCS8wTTR-June"})
      }else if(userCourse==="react"){
        this.setState({course: "reactRedux"})
      }else if(userCourse==="MiniBootcamp"){
        this.setState({course: "MiniBootcamp"})
      }else if(userCourse==="BootCamp"){
        this.setState({course: "BootCamp"})
      }else if(userCourse==="JavaInt8wMW-June"){
        this.setState({course: "JavaInt8wMW-June"})
      }else if(userCourse==="JavaInt8wTTR-June"){
        this.setState({course: "JavaInt8wTTR-June"})
      }else if(userCourse==="JavaInt8wSS-June"){
        this.setState({course: "JavaInt8wSS-June"})
      }else if(userCourse==="BootCampJune"){
        this.setState({course: "BootCampJune"})
      }else if(userCourse==="MiniBootcampJune"){
        this.setState({course: "MiniBootcampJune"})
      }
      window.scrollTo(0,0)
    }

    handleChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })

    }

    redirectUser=()=>{
      this.props.props.history.push('/thankyou')
    }



    handleSubmit=(e,values)=>{
      e.preventDefault();

      let userEmail = values.email
      let id = values.phone.replace(/[^0-9]+/g, "")
      let fName = values.firstName.replace(/[a-zA-Z]+/g,"")
      let lName = values.lastName.replace(/[a-zA-Z]+/g,"")
      let mail = values.email.replace(/[a-zA-Z0-9_.]+/g,"")

      let error = null;
      if(mail.length !== 1) {
        error = "Invalid Email. Please enter as email@example.com"
      } else if(id.length !== 10) {
        error = "Invalid Phone."
      } else if(fName.length !== 0){
        error = "Please enter valid first name"
      } else if (lName.length !== 0 || mail.length !== 1){
        error = "Please enter valid last name"
      }
      if(error !== null) {
        document.getElementById("errorMsg").innerText = error
      } else{
        document.getElementById("errorMsg").innerText=""
        let separator= '/'
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        database.database().ref('users/'+id).set({
          first_Name: values.firstName,
          last_Name: values.lastName,
          email: values.email,
          phone: values.phone,
          college: values.college,
          major: values.major,
          course: values.course,
          comments: values.comments,
          contacted: 'no',
          dateapplied: `${month<10?`0${month}`:`${month}`}${separator}${date}${separator}${year}`


        },()=>this.setState({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          college: '',
          major: '',
          course: '',
          comments: '',
          contacted: '',
          dateapplied: ''
        },()=>this.sendMail(userEmail)))
      }


    }

    sendMail=(givenEmail)=>{

      //
      // const msg = {
      //   to: `${givenEmail}`,
      //   from: 'admissions@extremecodingschool.com',
      //   subject: 'Sending with SendGrid is Fun',
      //   text: 'and easy to do anywhere, even with Node.js',
      //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      // };
      //
      // senderMail(msg)
      this.redirectUser()
    }



    render() {

      return (
        <form onSubmit={(e)=>this.handleSubmit(e,this.state)} className="form-width">

          <div className="signup-form">
            <div className="card">
              <div className="card-block">

                <div className="form-header blue-gradient">
                  <h3 className="white-text"><i className="fa fa-user padding-header"></i> Apply Now</h3>
                </div>

                <div className="md-form margin-left">
                  <i className="fa fa-user prefix"></i>
                  <input type="text"  className="form-control" placeholder="First Name" value={this.state.firstName} name="firstName" onChange={this.handleChange} required/>
                </div>
                <div className="md-form margin-left">
                  <i className="fa fa-user prefix "></i>
                  <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} name="lastName" onChange={this.handleChange} required/>
                </div>
                <div className="md-form margin-left">
                  <i className="fa fa-envelope prefix "></i>
                  <input type="text"  className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} required/>
                </div>

                <div className="md-form margin-left">
                  <i className="fa fa-phone prefix"></i>
                  <input type="text"  className="form-control " placeholder="Phone Number" value={this.state.phone} name="phone" onChange={this.handleChange} required/>
                </div>

                <div className="md-form margin-left">
                  <i className="fa fa-envelope prefix "></i>
                  <textarea  className="form-control" placeholder="Questions/Comments? Preferred method of contact?" value={this.state.comments} name="comments" onChange={this.handleChange} />
                </div>

                <div className="select-box-div">
                  <label className="select-box">
                    College Degree
                    <select value={this.state.college} name="college" onChange={this.handleChange} className="form-control">
                      <option defaultValue value="none">No Degree</option>
                      <option value="associates">Associates</option>
                      <option value="bachelors">Bachelors</option>
                      <option value="masters">Masters</option>
                      <option value="phd">Phd</option>
                    </select>
                  </label>

                  <label className="select-box">
                    Degree Major
                    <select value={this.state.major} name="major" onChange={this.handleChange} className="form-control">
                      <option defaultValue value="none">No Major</option>
                      <option value="computerScience">Computer Science</option>
                      <option value="informationTechnology">Information Technology</option>
                      <option value="informationSystems">Information Systems</option>
                      <option value="cyberSecurity">Cyber Security</option>
                      <option value="nonTech">STEM Major</option>
                      <option value="other">Other Major</option>
                    </select>
                  </label>
                </div>

                <div className="select-box-div">
                  <label className="select-box-course">
                    Course
                    <select value={this.state.course} name="course" onChange={this.handleChange} className="form-control">
                      <option defaultValue value="none">Select Your Course</option>
                      <option value="BootCampJune">Full Stack Bootcamp Mon-Fri 15 Weeks June</option>
                      <option value="MiniBootcampJune">Mini-Bootcamp Mon-Fri 8 Weeks June</option>
                      <option value="APCS8wMW-June">APCS-A Mon & Wed 8 Weeks June</option>
                      <option value="APCS8wTTR-June">APCS-A Tues & Thur 8 Weeks June</option>
                      <option value="APCS4w-June">APCS-A Sat & Sun 4 Weeks June</option>
                      <option value="FrontEnd8wSS-June">Web Development Sat & Sun 8 Weeks June</option>
                      <option value="FrontEnd8wTTR-June">Web Development Tues & Thurs 8 Weeks June</option>
                      <option value="DataStruct8wMW-June">Data Structures Mon & Wed 8 Weeks June</option>
                      {/*<option value="dataStructuresTR">Data Structures Tues & Thur 8 Weeks</option>*/}
                      {/*<option value="reactRedux">React & Redux Mon & Wed 4 Weeks</option>*/}
                      <option value="JavaInt8wMW-June">Intro to Java Mon & Wed 8 Weeks June</option>
                      <option value="JavaInt8wTTR-June">Intro to Java Tues & Thurs 8 Weeks June</option>
                      <option value="JavaInt8wSS-June">Intro to Java Sat & Sun 8 Weeks June</option>
                    </select>
                  </label>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn">Submit</button>
                  <hr></hr>
                  <h3 className="error" id="errorMsg"> </h3>
                </div>

              </div>
            </div>
          </div>

        </form>
      );
    }

}


export default ApplyForm;
