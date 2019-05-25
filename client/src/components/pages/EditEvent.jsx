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
export default class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetails: {},
      event: null,
      name: "",
      address: "",
      state: "",
      city: "",
      zipcode: "",
      description: "",
      category: "", 
      user: null
    };
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

  handleClick(e) {
    console.log("clicked", e);
    e.preventDefault();
    // let data = {
    //   username: this.state.username,
    //   name: this.state.name,
    //   password: this.state.password,
    // }
  }

  componentDidMount() {
    console.log(this.props, 32452345432543);
    api.getEventDetails(this.props.match.params.id).then(details => {
      console.log("details ", details);

      this.setState({ eventDetails: details });
    });
  }

  //async example//
  // getDetails = async () => {
  //   let details = await  api.getEventDetails(this.props.match.params.id)
  //   this.setState({ eventDetails: details });
  // }

  saveEditEventItem = e => {
    api.updateEventDetails(this.props.match.params.id, this.state.eventDetails)
    .then(result => {
      console.log(this);
      this.props.history.push("/searchevent");
    });
  };

  removeEventItem = e => {
    //ERASE BUTTON FUNCTION//
    console.log("I clicked the delete button", e);

    api
      .deleteItem(this.props.match.params.id, this.state.eventDetails)
      .then(result => {
        console.log(this);
        this.props.history.push("/searchevent");
      });
    console.log(
      "paramssssssssss",
      this.props.match.params.id,
      "Event details!!!---",
      this.state.eventDetails
    );
  };

  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6" style={{marginTop: '1%'}}>
              <MDBCard>
                <div className="header pt-3 grey lighten-2">
                  <MDBRow className="d-flex justify-content-start">
                    <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                      Add your event
                    </h3>
                  </MDBRow>
                </div>
                <MDBCardBody className="mx-4 mt-4">
                  <form>
                    <MDBInput
                      name="name"
                      type="text"
                      value={this.state.eventDetails.name}
                      onChange={e => this.handleInputChange(e)}
                      label="Event name"
                      group
                      type="text"
                      validate
                    />
                    <MDBInput
                      name="address"
                      type="text"
                      value={this.state.eventDetails.address}
                      onChange={e => this.handleInputChange(e)}
                      label="Address"
                      group
                      type="text"
                      validate
                    />
                    <MDBInput
                      name="city"
                      type="text"
                      value={this.state.eventDetails.city}
                      onChange={e => this.handleInputChange(e)}
                      label="City"
                      group
                      type="text"
                      validate
                    />
                    <MDBInput
                      name="state"
                      type="text"
                      value={this.state.eventDetails.state}
                      onChange={e => this.handleInputChange(e)}
                      label="State"
                      group
                      type="text"
                      validate
                    />
                    <MDBInput
                      name="zipcode"
                      type="text"
                      value={this.state.eventDetails.zipcode}
                      onChange={e => this.handleInputChange(e)}
                      label="Zipcode"
                      group
                      type="text"
                      validate
                    />
                    <MDBInput
                      name="description"
                      type="text"
                      value={this.state.eventDetails.description}
                      onChange={e => this.handleInputChange(e)}
                      label="Description"
                      group
                      type="text"
                      validate
                    />
                    <MDBInput
                      name="category"
                      type="text"
                      value={this.state.eventDetails.category}
                      onChange={e => this.handleInputChange(e)}
                      label="Category"
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
                      Save Event
                    </MDBBtn>
                    <MDBBtn
                      onClick={this.removeEventItem}
                      color="danger"
                      type="button"
                      className="btn-block z-depth-2" 
                    >
                      Delete event
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


