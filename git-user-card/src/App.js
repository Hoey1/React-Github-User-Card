import React from "react";
import "./App.css";
import axios from "axios";
import MainUser from "./components/MainUser";
import Followers from "./components/Followers";
import Search from "./components/Search";

const baseurl = "https://api.github.com/users";

class App extends React.Component {
  state = { users: [], followers: [], search: "", url: "" };

  componentDidMount() {
    console.log("you searched!");
    axios
      .get(`${this.state.url}`)
      .then((res) => {
        this.setState({ ...this.state, users: [res.data] });
        axios
          .get(`${this.state.url}/followers`)
          .then((res) => {
            console.log(res);
            this.setState({ ...this.state, followers: res.data });
          })
          .catch((err) => {
            console.log("there was an error with your followers");
          });
      })
      .catch((err) => {
        console.log("there was an error with your request");
        console.log(err);
      });
  }
  componentDidUpdate() {
    console.log(this.state);
    axios
      .get(`${this.state.url}`)
      .then((res) => {
        this.setState({ ...this.state, users: [res.data] });
      })
      .catch((err) => {
        console.log("there was an error with your request");
        console.log(err);
      });
    axios
      .get(`${this.state.url}/followers`)
      .then((res) => {
        console.log(res);
        this.setState({ ...this.state, followers: res.data });
      })
      .catch((err) => {
        console.log("there was an error with your followers");
      });
  }

  onFocus = (event) => {
    event.target.placeholder = "";
    event.target.style.boxShadow = "2px 2px 2px grey";
  };
  onBlur = (event) => {
    event.target.placeholder = "search here";
    event.target.style.boxShadow = "none";
  };
  onChange = (event) => {
    const value = event.target.value;
    this.setState({ ...this.state, search: value });
  };
  onSubmit = (event) => {
    this.setState({ ...this.state, url: `${baseurl}/${this.state.search}` });
    document.getElementById("search").value = "";
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <h1>Display Github User Info!</h1>
        <Search
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onSubmit={this.onSubmit}
        />
        <MainUser users={this.state.users} />
        <div className="followers-container">
          <h2>Here are their followers!</h2>
          <Followers followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
