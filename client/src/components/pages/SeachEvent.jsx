



import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import api from "../../api";
import { MDBCol, MDBIcon } from "mdbreact";

export default class SearchEvent extends Component {
  state = {
    event: null
  };

  componentDidMount() {
    // axios.get(`http://localhost:5000/api/events/geteventlist`)
    //     .then(theEvent => {
    //       this.setState({
    //          event: theEvent.data.eventItems
    //       })
    //     })
    //     console.log("hereeeeeeeeee", this.state.event)
    // }

    console.log("getting ready to show the list");
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

  showEventsList = () => {
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

    if (this.state.event) {
      console.log("this is the state ---- ", this.state);
      return this.state.event.map((eachEvent, i) => {
        return (
          <Link to={`/searchevent/${eachEvent._id}`}>
            <div key={i}>{eachEvent.name}</div>
          </Link>
        );
      });
    }
  };

  render() {
    console.log("hereeeeeeeeee+++++++++++++++", this.state.event);
    return (
      <div >
        <div className="searchBarEdit">
    <MDBCol md="10" >
      <form className="form-inline mt-3 mb-3 box">
        <MDBIcon icon="search" />
        <input className="form-control form-control-lg ml-3 w-75 " type="text" placeholder="Search" aria-label="Search"  />
      </form>
    </MDBCol>
    </div>

        <h1>Search for an event</h1>
        {/* <h4>{this.state.event}</h4> */}
        {/* <h4>{this.state.data.eventItems.name}</h4> */}
        {this.showEventsList()}
      </div>
    );
  }
}
