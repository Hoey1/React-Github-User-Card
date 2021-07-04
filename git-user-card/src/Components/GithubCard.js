import React from "react";
import "./GithubCard.css";
import GitHubCalendar from "react-github-calendar";

class GithubCard extends React.Component {
  render() {
    return (
      <div className="user-card">
        <img className="card-img" src={this.props.githubData.avatar_url} />
        <p>
          <span className="bold">Name:</span> {this.props.githubData.name}
        </p>
        <p>
          <span className="bold">Location:</span>{" "}
          {this.props.githubData.location}
        </p>
        <p>
          <span className="bold">Role:</span> {this.props.githubData.bio}
        </p>
        <p>
          <span className="bold">Github:</span> {this.props.githubData.html_url}
        </p>
        <p>
          <span className="bold">Following:</span>{" "}
          {this.props.githubData.following}
        </p>
        <p>
          <span className="bold">Followers:</span>{" "}
          {this.props.githubData.followers}
        </p>
        <GitHubCalendar username="hoey1" fullYear={false} />
      </div>
    );
  }
}
export default GithubCard;
