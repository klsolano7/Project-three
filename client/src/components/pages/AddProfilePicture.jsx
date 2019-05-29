import React, { Component } from "react";
import api from "../../api";
export default class AddProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      imageUrl: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // this method handles just the file upload
  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
    this.setState({pic: e.target.files[0]})

  };

  // this method submits the form
  handleSubmit = e => {
    e.preventDefault();

      api.addPicture(this.state.pic).then(res=>{
          console.log(res)
          this.props.resetPic(res.secure_url)
          //this.setState({secure_url:res.secure_url})    
      })
  };

  render() {
    return (
      <div>
        <h2>New Thing</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Name</label>
          <input type="file" onChange={e => this.handleFileUpload(e)} />
          <button type="submit">Save new thing</button>
        </form>
      </div>
    );
  }
}
