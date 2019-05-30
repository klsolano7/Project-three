import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import api from "../../api";
import { MDBCol, MDBIcon } from "mdbreact";

const publicIp = require("public-ip");
const iplocation = require("iplocation").default;

export default class SearchEvent extends Component {
  state = {
    event: null,
    eventItems: [],
    query: "",
    category: "Community",
    location : {}
  };

  componentDidMount() {
    // axios.get(`http://localhost:3000/api/events/geteventlist`)
    //     .then(theEvent => {
    //       this.setState({
    //          event: theEvent.data.eventItems
    //       })
    //     })
    //     console.log("hereeeeeeeeee", this.state.event)
    // }
    (async () => {
      iplocation(await publicIp.v4())
      .then((res) => {
        console.log("theeeeee response", res)
        this.setState({location : res})
      })
      .catch(err => {
      });
  
    })();

   

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
    if (this.state.event) {
      console.log("this is the state ---- ", this.state);
      return this.state.event.map((eachEvent, i) => {
        if (
          eachEvent.name
            .toLowerCase()
            .indexOf(this.state.query.toLowerCase()) === 0 &&
          this.state.query.length > 0 &&
          this.state.category === eachEvent.category && Number(this.state.location.postal) === eachEvent.zipcode
        ) {
          return (
            <Link to={`/searchevent/${eachEvent._id}`}>
              <div key={i}>{eachEvent.name}</div>
            </Link>
          );
        }
      });
    }
  };

  searchEvent = e => {
    console.log("search bar -----", e);
    let query = e.target.value;
    console.log("queryyyyyy", query);
    api.getEvents(query).then(result => {
      this.setState({
        eventItems: result.eventItems,
        query
      });
    });
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ category: e.target.value });
  };
  render() {
    console.log("hereeeeeeeeee+++++++++++++++", this.state.event);
    return (
      <div
        style={{
          backgroundImage: "url(./img/background5.jpg)",
          backgroundSize: "cover",
          height: "90vh",
          width: "100%",
          margin: "0px",
          padding: "0px",
          overflowX: "hidden"
        }}
      >
        {/* <h1 style={{marginTop:'0%', fontSize: '30px', fontWeight: "bold"}}>Search for an event</h1> */}
        <div className="searchBarEdit" style={{ marginTop: "2%" }}>
          <MDBCol md="10">
            <h1 style={{color: "white", fontWeight: 'bold'}}>Events in {this.state.location.city} </h1>
            <h1 style={{color: "white", fontWeight: 'bold'}}>Zipcode {this.state.location.postal} </h1>
            <form className="form-inline mt-3 mb-3 box">
              <MDBIcon icon="search" />
        
              <input
                style={{ textAlign: "center" }}
                className="form-control form-control-lg ml-3 w-75 "
                type="text"
                placeholder="Search for an event"
                aria-label="Search"
                onChange={this.searchEvent}
              />
            </form>
            <select className="browser-default custom-select" style={{width:"50vw"}}>
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
            {/* <select
              style={{
                marginLeft: "1%",
                marginBottom: "1%",
                border: "solid black 1px"
              }}
              onChange={this.handleChange}
            >
              <option value="Sports">Sports</option>
              <option value="Spirituality">Spirituality</option>
              <option value="Technology">Technology</option>
              <option value="Entertainment">Entertainment</option>
            </select> */}
          </MDBCol>
        </div>

        {/* <h4>{this.state.event}</h4> */}
        {/* <h4>{this.state.data.eventItems.name}</h4> */}
        <div style={{ color: "black", fontSize: "25px" }}>
          {this.showEventsList()}
        </div>
      </div>
    );
  }
}
