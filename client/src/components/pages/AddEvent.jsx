import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import api from '../../api';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput  } from "mdbreact";

export default class AddEvent extends Component {

  state={
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
  }

  componentDidMount() {
    // axios.get(`http://localhost:5000/api/events/geteventlist`)
    //     .then(theEvent => {
    //       this.setState({
    //          event: theEvent.data.eventItems
    //       })
    //     })
    //     console.log("hereeeeeeeeee", this.state.event)
    // }
    
    console.log("getting ready to show the list")
    api.getEvents()
      .then(events => {
        console.log("the events ============= ", events)
        this.setState({
          event: events.eventItems
        })
      })
      .catch(err => console.log("there was an error getting the event >>>>>>>>> ", err))
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


showEventsList = () =>{
  // return this.state.event.map((eachEvent, i) =>{
  //   return <Link to={`/addevent`}><div key={i}>{eachEvent.name}</div></Link>
  // })
  // console.log("getting ready to show the list")
  // api.getEvents()
  //   .then(events => {
  //     console.log("the events ============= ", events)
  //     this.setState({
  //       event: events
  //     })
  //   })
  //   .catch(err => console.log("there was an error getting the event >>>>>>>>> ", err))
    
  if(this.state.event) {
    console.log("this is the state ---- ", this.state);
    return this.state.event.map((eachEvent, i) => {
      return <Link to={`/addevent/${eachEvent._id}`}><div key={i}>{eachEvent.name}</div></Link>
    })
  } 
    
}

addEventItem = (e) =>{
  let userID = JSON.parse(localStorage.getItem("user"))._id;

  api.addItem(userID, this.state.eventDetails)

  .then(result => {
    console.log(this);
    this.props.history.push("/dashboard");
  });
}

  render() {
    console.log("hereeeeeeeeee+++++++++++++++", this.state.event)
    return (

      <React.Fragment>
    <MDBContainer >
      <MDBRow>
        <MDBCol md="6">
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
              <MDBInput name="name" type="text" onChange={e => this.handleInputChange(e)} label="Event name" group type="text" validate />
              <MDBInput name="address" type="text" onChange={e => this.handleInputChange(e)} label="Address" group type="text" validate />
              <MDBInput name="city" type="text" onChange={e => this.handleInputChange(e)} label="City" group type="text" validate />
              <MDBInput name="state" type="text" onChange={e => this.handleInputChange(e)} label="State" group type="text" validate />
              <MDBInput name="zipcode" type="text" onChange={e => this.handleInputChange(e)} label="Zipcode" group type="text" validate />
              <MDBInput name="description" type="text" onChange={e => this.handleInputChange(e)} label="Description" group type="text" validate />
              <MDBInput name="category" type="text" onChange={e => this.handleInputChange(e)} label="Category" group type="text" validate />
              {/* <MDBInput type="text" value={this.state.username} name="username" onChange={(e) => this.handleInputChange(e)} label="Your email" group type="text" validate /> */}
              
              
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
                <MDBBtn color="success" type="button" className="btn-block z-depth-2" /*onClick={this.toggle}*/ onClick={this.addEventItem}               
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
      // <div>
      //   <h1>YOUR ADDED EVENTS</h1>
      //   {/* <h4>{this.state.event}</h4> */}
      //   {/* <h4>{this.state.data.eventItems.name}</h4> */}
      //   {/* {this.showEventsList()} */}


      //   <form className="editForm" onSubmit={this.addEventItem}>
      //     <input
      //       name="name"
      //       type="text"
      //       // value={}
      //       onChange={e => this.handleInputChange(e)}
      //     />{" "}
      //     <br />
      //     <input
      //       name="address"
      //       type="text"
      //       // value={}
      //       onChange={e => this.handleInputChange(e)}
      //     />
      //     <br />
      //     <input
      //       name="city"
      //       type="text"
      //       // value={}
      //       onChange={e => this.handleInputChange(e)}
      //     />
      //     <br />
      //     <input
      //       name="state"
      //       type="text"
      //       // value={}
      //       onChange={e => this.handleInputChange(e)}
      //     />
      //     <br />
      //     <input
      //       name="zipcode"
      //       type="text"
      //       // value={}
      //       onChange={e => this.handleInputChange(e)}
      //     />
      //     <br />
      //     <input
      //       name="description"
      //       type="text"
      //       // value={}
      //       onChange={e => this.handleInputChange(e)}
      //     />
      //     <br />
      //     <input
      //       name="category"
      //       type="text"
      //       // value={}
      //       onChange={e => this.handleInputChange(e)}
      //     />
      //     <br />
      //   </form>
      //   <div>
      //   <button
      //       style={{
      //         borderRadius: "15px",
      //         fontSize: "20px",
      //         width: "7vw",
      //         height: "5vh",
      //         marginBottom: "1%",
      //         borderRadius: "20px"
      //       }}
      //       onClick={this.addEventItem}
      //     >
      //       Add event
      //     </button>
      //   </div>
      // </div>

    )
  }
}

