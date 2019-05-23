import React, { Component } from "react";
import api from "../../api"
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'
class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetails: {},
        event: null,
 
      
    };
  }
  componentDidMount() {
   api.getEventDetails(this.props.match.params.id).then(details=>{
     console.log('details ',details)
     this.setState({eventDetails : details})
   });
  }


  

  editEventItem = (e) =>{
  console.log("edittttt", e)
  }

  render() {
    return (
      <div>
        {/* <div><h1>Event</h1></div> */}
        <div className="mainBox">
          <h1>
        {this.state.eventDetails.name}
          </h1>
        </div>
        <form>
        <div>
        {this.state.eventDetails.address}
        </div>
        <div>
        {this.state.eventDetails.city + " "}
        {this.state.eventDetails.state}
        </div>
        <div>
        {this.state.eventDetails.zipcode}
        </div>
        <div>
        {this.state.eventDetails.description}
        </div>
        <div>
        {this.state.eventDetails.category}
        </div>
        <div>
        <Link to={`/editevent/${this.state.eventDetails._id}`}>Edit</Link>
        </div>
        </form>
      </div>
    );
  }
}

export default Event;


