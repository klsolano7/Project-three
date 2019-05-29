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
    console.log("userrrrrrrr", this.props)

   api.getEventDetails(this.props.match.params.id).then(details=>{
     console.log('details ',details)
     this.setState({eventDetails : details})
   });
  }



  render() {
    console.log(api.getLocalStorageUser())
    let me = this.state.eventDetails.userID === api.getLocalStorageUser()._id
    console.log('thissssss', this)

    return (
      <div>

        <h1 style={{marginTop: '1%'}}>Event Details</h1>
        <ListGroup style={{margin: '3% 20% 0% 20%', boxShadow: '20px 20px 15px -1px rgba(0,0,0,0.71)'}}>
  <ListGroup.Item>{this.state.eventDetails.name}</ListGroup.Item>
  <ListGroup.Item>{this.state.eventDetails.address}</ListGroup.Item>
  <ListGroup.Item>{this.state.eventDetails.city}</ListGroup.Item>
  <ListGroup.Item>{this.state.eventDetails.state}</ListGroup.Item>
  <ListGroup.Item>{this.state.eventDetails.zipcode}</ListGroup.Item>
  <ListGroup.Item>{this.state.eventDetails.description}</ListGroup.Item>
  <ListGroup.Item>{this.state.eventDetails.category}</ListGroup.Item>

</ListGroup>

<div >
    <img src={this.state.eventDetails.imageUrl} style={{width: '50%', marginTop:"5%"}}/>
  </div>

<div style={{marginTop: '3%'}}>
{me ? 
<Link to={`/editevent/${this.state.eventDetails._id}`}>
  <button style={{width: '12vh', height: '5vh', borderRadius: '20px', marginTop: '4%', backgroundColor: '#00c851', color: 'white'}}>
    Edit</button></Link>
  : '' }
</div>

      </div>
    );
  }
}

export default Event;


// width: 15vh;
// height: 7vh;
// border-radius: 20px;