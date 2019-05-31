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

export default class AddEvent extends Component {
  state = {
    user: null,
    event: null,
    eventDetails: {},
    event: null,
    name: "",
    address: "",
    state: "",
    city: "",
    zipcode: "",
    description: "",
    category: "",
    user: null,
    imageUrl: ""
  };

  componentDidMount() {
    let user = this.props.user;
  


    api
      .getEvents()
      .then(events => {
        console.log("the events ============= ", events);
        this.setState({
          event: events.eventItems
        });
      })
      .catch(err =>
        console.log("there was an error getting the event >>>>>>>>> ", err)
      );
  }

  handleInputChange(event) {
    this.setState({
      eventDetails: {
        ...this.state.eventDetails,
        [event.target.name]: event.target.value
      }
    });
  }

  showEventsList = () => {

    if (this.state.event) {
      console.log("this is the state ---- ", this.state);
      return this.state.event.map((eachEvent, i) => {
        return (
          <Link to={`/addevent/${eachEvent._id}`}>
            <div key={i}>{eachEvent.name}</div>
          </Link>
        );
      });
    }
  };

  addEventItem = e => {
    let userID = JSON.parse(localStorage.getItem("user"))._id;

    api
      .addItem(userID, this.state.eventDetails, this.state.pic)

      .then(result => {
        console.log(this);

      });
  };

  /////////////image upload////////////

  // this method handles just the file upload
  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
    this.setState({ pic: e.target.files[0] }, () => {
      this.handleSubmit(e);
    });
  };



  render() {
    // console.log("hereeeeeeeeee+++++++++++++++", this.state.event);
    return (
      <React.Fragment>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="10" style={{ marginTop: "1%" }}>
              <MDBCard>
                <div className="header pt-3 grey lighten-2">
                  <MDBRow className="d-flex justify-content-start">
                    <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                      Add your event
                    </h3>
                  </MDBRow>
                </div>
                <MDBCardBody
                  className="mx-4 mt-4" /*style={{padding: '0px', margin:'20px'}}*/
                >
                  <form>
                    <MDBInput
                      name="name"
                      type="text"
                      onChange={e => this.handleInputChange(e)}
                      label="Event name"
                      group
                      type="text"
                      validate
                    />
                    <MDBInput
                      name="address"
                      type="text"
                      onChange={e => this.handleInputChange(e)}
                      label="Address"
                      group
                      type="text"
                      validate
                    />
                    <MDBInput
                      name="city"
                      type="text"
                      onChange={e => this.handleInputChange(e)}
                      label="City"
                      group
                      type="text"
                      validate
                    />
                    <MDBInput
                      name="state"
                      type="text"
                      onChange={e => this.handleInputChange(e)}
                      label="State"
                      group
                      type="text"
                      validate
                    />
                    <MDBInput
                      name="zipcode"
                      type="text"
                      onChange={e => this.handleInputChange(e)}
                      label="Zipcode"
                      group
                      type="text"
                      validate
                    />
                    <MDBInput
                      name="description"
                      type="text"
                      onChange={e => this.handleInputChange(e)}
                      label="Description"
                      group
                      type="text"
                      validate
                    />

                    <select
                      className="browser-default custom-select"
                      name="category"
                      type="text"
                      onChange={e => this.handleInputChange(e)}
                      label="Category"
                      group
                      type="text"
                      validate
                    >
                      <option>Choose your option</option>
                      <option value="Community">Community</option>
                      <option value="Concerts">Concerts</option>
                      <option value="Dating">Dating</option>
                      <option value="Educational">Educational</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Foodie">Foodie</option>

                      <option value="Marketing">Marketing</option>
                      <option value="Networking">Networking</option>
                      <option value="Religion">Religion</option>
                      <option value="Social">Social</option>
                      <option value="Dating">Dating</option>
                      <option value="Sports">Sports</option>
                      <option value="Spirituality">Spirituality</option>
                      <option value="Technology">Technology</option>
                      <option value="Other">Other</option>
                    </select>
                  </form>

                  <form
                    onSubmit={e => this.handleSubmit(e)}
                    style={{ marginTop: "2%" }}
                  >
                    <input
                      type="file"
                      onChange={e => this.handleFileUpload(e)}
                    />
                  </form>
                  <div className="text-center mb-4 mt-5">
                    <MDBBtn
                      color="success"
                      type="button"
                      className="btn-block z-depth-2"
                      onClick={this.addEventItem}
                    >
                      Add Event
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
      
    );
  }
}
