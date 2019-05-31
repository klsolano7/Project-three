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
      })
  };

  render() {
    return (
      <div className="uploadPicContainer">
        <div className="upload1">
        <h2 style={{fontWeight: 'bold'}}>Upload Image</h2>
        </div>
        <form onSubmit={e => this.handleSubmit(e)}>
          
          <div className="upload2" >
          {/* <input type="file" onChange={e => this.handleFileUpload(e)}  /> */}
          <button className="uploadPicBtn">
          <input type="file" id="files" class="hidden" onChange={e => this.handleFileUpload(e)}/>
          
          <label for="files">Select file</label>
          </button>
          </div>
          <div className="upload3">
          <button className="savePicButton" type="submit">Save profile picture</button>
          </div>
        </form>
      </div>
    );
  }
}
