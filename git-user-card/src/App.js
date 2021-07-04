import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import GithubCard from "./Components/GithubCard";
import Followers from "./Components/Followers";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      githubData: {},
      githubFollowers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Hoey1")
      .then((res) => {
        this.setState({
          githubData: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://api.github.com/users/Hoey1/followers")
      .then((res) => {
        this.setState({
          githubFollowers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="main">
        <div className="card">
          <GithubCard githubData={this.state.githubData} />
        </div>
        <div className="header-followers">
          <h2>Followers</h2>
        </div>
        <div className="follower">
          {this.state.githubFollowers.map((follower) => {
            return <Followers follower={follower} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
