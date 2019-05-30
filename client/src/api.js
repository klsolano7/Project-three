import axios from "axios";
const baseURL = process.env.NODE_ENV === "production"
? "/api"
: "https://thelinkup.herokuapp.com/api"; 

const service = axios.create({
  baseURL:baseURL,
  withCredentials: true
});

const errHandler = err => {
  console.error("THE ERROR -------------", err);
  if (err.response && err.response.data) {
    console.error("API response", err.response.data);
    throw err.response.data.message;
  }
  throw err;
};

export default {
  service: service,

  // This method is synchronous and returns true or false
  // To know if the user is connected, we just check if we have a value for localStorage.getItem('user')
  isLoggedIn() {
    return localStorage.getItem("user") != null;
  },

  // This method returns the user from the localStorage
  // Be careful, the value is the one when the user logged in for the last time
  getLocalStorageUser() {
    return JSON.parse(localStorage.getItem("user"));
  },

  // This method signs up and logs in the user
  signup(userInfo) {
    return service
      .post("/signup", userInfo)
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem("user", JSON.stringify(res.data));
        
        return res.data;
      })
      .catch(errHandler);
  },

  login(username, password) {
    return service
      .post("/login", {
        username,
        password
      })
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem("user", JSON.stringify(res.data));
        return res.data;
      })
      .catch(errHandler);
  },

  logout() {
    localStorage.removeItem("user");
    return service.get("/logout");
  },

  getUser() {
    return service
    .get("/me")
    .then(res => res.data)
    .catch(errHandler);
  },

  // This is an example on how to use this method in a different file
  // api.getCountries().then(countries => { /* ... */ })
  getCountries() {
    return service
      .get("/countries")
      .then(res => res.data)
      .catch(errHandler);
  },

  addCountry(body) {
    return service
      .post("/countries", body)
      .then(res => res.data)
      .catch(errHandler);
  },

  getSecret() {
    return service
      .get("/secret")
      .then(res => res.data)
      .catch(errHandler);
  },

  addPicture(file) {
    const formData = new FormData();
    formData.append("imageUrl", file);
    console.log(formData,34234, file)

    return service
      .post("/savepic", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => res.data)
      .catch(errHandler);
  },

  //Events axios calls -Kenneth

  getEvents() {
    return service
      .get("/events/geteventlist")
      .then(res => res.data)
      .catch(errHandler);
  },

  addEvent(body) {



    return service
      .post("/events/addevent", body)
      .then(res => res.data)
      .catch(errHandler);
  },

  getEventDetails(id) {
    return service
      .get(`/searchevent/${id}`)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });
  },

  updateEventDetails(id, newEdit) {
    return service
      .post(`/editevent/${id}`, { newEdit })
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });
  },

  updateEventDetails(id, newEdit) {
    return service
      .post(`/editevent/${id}`, { newEdit })
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });
  },

  deleteItem(id, somethingelse) {
    console.log(id);
    return service
      .delete(`/deleteevent/${id}`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });
  },


  addItem(userID, newEvent, thePic){

    const formData = new FormData();
    formData.append("imageUrl", thePic);
    formData.append("name", newEvent.name)
    formData.append("address", newEvent.address)
    formData.append("state", newEvent.state)
    formData.append("city", newEvent.city)
    formData.append("zipcode", newEvent.zipcode)
    formData.append("description", newEvent.description)
    formData.append("category", newEvent.category)




    return service
      .post(`/addevent/${userID}`, formData, {withCredentials: true})
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });
  },


  addEventPicture(file, eventId) {
    const formData = new FormData();
    formData.append("imageUrl", file);
    console.log(formData,34234, file)

    return service
      .post(`/updatepic/${eventId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => res.data)
      .catch(errHandler);
  },


};
