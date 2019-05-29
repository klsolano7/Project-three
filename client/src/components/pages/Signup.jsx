

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import api from '../../api';
import { Link } from 'react-router-dom'

import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

class Home extends React.Component {

  state={
    open: true,
      username: "",
      name: "",
      password: "",
      message: null

    
  }
    // handleInputChange = handleInputChange.bind(this)
  // toggle = () => {
  //   this.setState({open:!this.state.open})
  // }

  handleInputChange(event) {
    // console.log("the event in the handle input function -------------- ", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  
  
  handleClick(e) {
    e.preventDefault()
    let data = {
      username: this.state.username,
      name: this.state.name,
      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.resetUser(result)
        this.props.history.push("/dashboard") // Redirect to the home page
      })
      .catch(err => {
        console.log("EEEEEERRRRRRRRRRRRRRRROOOOOORRRRRRR  >>>>>>>>>>>>>>>>>>>>>> ", err)
        this.setState({
        message: err.toString() 
      })
    })
  }



  render(){
  return (
    <React.Fragment>
    <MDBContainer className={this.state.open ? "show" : "hidden"}>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Sign Up
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <form>
              <MDBInput type="name" value={this.state.name} name="name" onChange={(e) => this.handleInputChange(e)} label="Your name" group type="text" validate />
              <MDBInput type="text" value={this.state.username} name="username" onChange={(e) => this.handleInputChange(e)} label="Your email" group type="text" validate />
              
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0" 
                type="password" value={this.state.password} name="password" onChange={(e) => this.handleInputChange(e)}
              />
              </form>
              {/* <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Password?
                </a>
              </p> */}
              <div className="text-center mb-4 mt-5">
                <MDBBtn color="danger" type="button" className="btn-block z-depth-2" /*onClick={this.toggle}*/ onClick={(e) => this.handleClick(e)}               
                  >

                  SignUp 


                </MDBBtn>
              </div>



                  <Link className="dark-grey-text font-weight-bold ml-1" to={`/`}>Login</Link>


            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
    </React.Fragment>
  );
};
}

export default Home;















// import React, { Component } from 'react';
// import api from '../../api';

// export default class Signup extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       username: "",
//       name: "",
//       password: "",
//       message: null
//     }
//     this.handleInputChange = this.handleInputChange.bind(this)
//   }

//   handleInputChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   handleClick(e) {
//     e.preventDefault()
//     let data = {
//       username: this.state.username,
//       name: this.state.name,
//       password: this.state.password,
//     }
//     api.signup(data)
//       .then(result => {
//         console.log('SUCCESS!')
//         this.props.history.push("/") // Redirect to the home page
//       })
//       .catch(err => this.setState({ message: err.toString() }))
//   }

//   render() {
//     return (
//       <div className="Signup">
//         <h2>Signup</h2>
//         <form>
//           Username: <input type="text" value={this.state.username} name="username" onChange={this.handleInputChange} /> <br />
//           Name: <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} /> <br />
//           Password: <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} /> <br />
//           <button onClick={(e) => this.handleClick(e)}>Signup</button>
//         </form>
//         {this.state.message && <div className="info info-danger">
//           {this.state.message}
//         </div>}
//       </div>
//     );
//   }
// }