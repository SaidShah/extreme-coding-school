import React, { Component } from 'react';
import database from './base'


class ApplyForm extends Component {

    state={
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      college: '',
      major: ''
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

      let id = values.phone.replace(/[^0-9]+/g, "")
      let fName = values.firstName.replace(/[a-zA-Z]+/g,"")
      let lName = values.lastName.replace(/[a-zA-Z]+/g,"")
      let mail = values.email.replace(/[a-zA-Z0-9_.]+/g,"")

      if(id.length !== 10 || fName.length !== 0){
        document.getElementById("errorMsg").innerText="Enter Valid Values"
        console.log('IN FIRST IF');
      }else if (lName.length !== 0 || mail.length !== 1){
        document.getElementById("errorMsg").innerText="Enter Valid Values"
        console.log('IN second IF');
      }
      else{
        document.getElementById("errorMsg").innerText=""
        database.database().ref('users/'+id).set({
          first_Name: values.firstName,
          last_Name: values.lastName,
          email: values.email,
          phone: values.phone,
          college: values.college,
          major: values.major
        },()=>this.setState({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          college: '',
          major: ''
        },()=>this.redirectUser()))
      }

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
