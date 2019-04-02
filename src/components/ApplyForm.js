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
      course: ''
    }

    componentDidMount() {
      let userLocArr= this.props.props.location.pathname.split("/")
      let userCourse = userLocArr[userLocArr.length-1]
      if(userCourse==="frontEndWebDev4"){
        this.setState({course: "frontEndWebDev4"})
      }else if(userCourse==="frontEndWebDev8"){
        this.setState({course: "frontEndWebDev8"})
      }else if(userCourse ==="dataStructures"){
        this.setState({course: "dataStructures"})
      }else if(userCourse==="apCSa8"){
        this.setState({course: "apCSa8"})
      }else if(userCourse==="apCSa4"){
        this.setState({course: "apCSa4"})
      }else if(userCourse==="react"){
        this.setState({course: "reactRedux"})
      }else if(userCourse==="bootcampTeens"){
        this.setState({course: "BootCampTeens"})
      }
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

      if(id.length !== 10 || fName.length !== 0){
        document.getElementById("errorMsg").innerText="Enter Valid Values"
      }else if (lName.length !== 0 || mail.length !== 1){
        document.getElementById("errorMsg").innerText="Enter Valid Values"
      }
      else{
        document.getElementById("errorMsg").innerText=""
        database.database().ref('users/'+id).set({
          first_Name: values.firstName,
          last_Name: values.lastName,
          email: values.email,
          phone: values.phone,
          college: values.college,
          major: values.major,
          course: values.course
        },()=>this.setState({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          college: '',
          major: '',
          course: ''
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
              <h3><i className="fa fa-user padding-header"></i> Apply Now</h3>
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
        <option defaultValue value="none">No Degree</option>
        <option value="computerScience">Computer Science</option>
        <option value="informationTechnology">Information Technology</option>
        <option value="informationSystems">Information Systems</option>
        <option value="cyberSecurity">Cyber Security</option>
        <option value="nonTech">Non-Tech Degree</option>
        <option value="other">Other</option>
      </select>
    </label>

    <label className="select-box">
   Course
   <select value={this.state.course} name="course" onChange={this.handleChange} className="form-control">
     <option defaultValue value="none">Select Your Course</option>
     <option value="BootCamp">Full-Stack Bootcamp 15 Weeks</option>
     <option value="BootCampTeens">Full-Stack Bootcamp For Young Adults</option>
     <option value="apCSa8">AP Computer Science A 8 Weeks</option>
     <option value="apCSa4">AP Computer Science A 4 Weeks</option>
     <option value="frontEndWebDev4">Web Development Sat & Sun 4 weeks</option>
     <option value="frontEndWebDev8">Web Development Tues & Thurs 8 weeks</option>
     <option value="dataStructures">Java Data Structures & Algorithms 4 weeks</option>
     <option value="reactRedux">React & Redux</option>
     <option value="computerGraphics">Computer Graphics For The Web</option>
   </select>
 </label>


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
