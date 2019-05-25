import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import api from "../../api";
import { MDBCol, MDBIcon } from "mdbreact";

export default class SearchEvent extends Component {
  state = {
    event: null,
    eventItems: [],
    query: ""
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
    if (this.state.event) {
      console.log("this is the state ---- ", this.state);
      return this.state.event.map((eachEvent, i) => {
        if (eachEvent.name.toLowerCase().indexOf(this.state.query.toLowerCase()) === 0 && this.state.query.length > 0) {
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

  render() {
    console.log("hereeeeeeeeee+++++++++++++++", this.state.event);
    return (
      <div>
        <h1 style={{marginTop:'2%', fontSize: '20px'}}>Search for an event</h1>
        <div className="searchBarEdit">
          <MDBCol md="10">
            <form className="form-inline mt-3 mb-3 box">

                <MDBIcon icon="search" />

              <input
                className="form-control form-control-lg ml-3 w-75 "
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={this.searchEvent}
              />
                          
            </form>
            <select style={{marginLeft: '1%', marginBottom:'1%', border:'solid black 1px'}}>
  <option value="volvo">Sports</option>
  <option value="saab">Spirituality</option>
  <option value="opel">Technology</option>
  <option value="audi">Entertainment</option>
</select>

          </MDBCol>
        </div>

        
        {/* <h4>{this.state.event}</h4> */}
        {/* <h4>{this.state.data.eventItems.name}</h4> */}
        {this.showEventsList()}
      </div>
    );
  }
}
