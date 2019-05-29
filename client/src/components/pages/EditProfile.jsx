
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import api from "../../api";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput
} from "mdbreact";

export default class EditProfile extends Component {

  state={
    
    imageUrl:"",
    name:"",
    email:""
}


handleInputChange(event) {
  console.log("the input text -------------- ", event.target.value); //function to edit text input//
  console.log("the current state ============== ", this.state.eventDetails);
  this.setState({
    eventDetails: {
      ...this.state.eventDetails,
      [event.target.name]: event.target.value
    }
  });
}

componentDidMount() {
  console.log(this.props, 32452345432543);
  // api.getEventDetails(this.props.match.params.id).then(details => {
    // console.log("details ", details);

    // this.setState({ eventDetails: details });
  // });
}





  render() {

      return (
      <React.Fragment>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6" style={{marginTop: '1%'}}>
              <MDBCard>
                <div className="header pt-3 grey lighten-2">
                  <MDBRow className="d-flex justify-content-start">
                    <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5" >
                      Edit profile
                    </h3>
                  </MDBRow>
                </div>
                <Link to={`/addprofilepicture`}><img src="./img/profilepic.png" style={{height: '20vh', marginTop: '1%', borderRadius:'20px'}}></img></Link>
                <MDBCardBody className="mx-4 mt-4">
                  <form>
                    <MDBInput
                      name="name"
                      type="text"
                      // value={this.state.eventDetails.name}
                      onChange={e => this.handleInputChange(e)}
                      label="username"
                      group
                      type="text"
                      validate
                    />
                    <MDBInput
                      name="address"
                      type="text"
                      // value={this.state.eventDetails.address}
                      onChange={e => this.handleInputChange(e)}
                      label="email"
                      group
                      type="text"
                      validate
                    />

                    

                  </form>

                  <div className="text-center mb-4 mt-5">
                    <MDBBtn
                      onClick={this.saveEditEventItem}
                      color="success"
                      type="button"
                      className="btn-block z-depth-2" 
                    >
                      Save profile details
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
      // <div>
      //   <h1>Edit your profile</h1>
      //   <Link to={`/addprofilepicture`}><img src="./img/profilepic.png" style={{height: '20vh', marginTop: '1%', borderRadius:'20px'}}></img></Link>
      // </div>
    )
  }
}
