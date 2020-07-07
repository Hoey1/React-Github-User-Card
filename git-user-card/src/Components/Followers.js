import React from "react";
import "./Followers.css";

class Followers extends React.Component {
  render() {
    return (
      <div className="follower-card">
        <img className="follower-img" src={this.props.follower.avatar_url} />
        <p>
          <span className="bold">Github:</span> {this.props.follower.html_url}
        </p>
      </div>
    );
  }
}
export default Followers;
