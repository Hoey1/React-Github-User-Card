import React from "react";

function Card({ props }) {
  console.log(props);
  const {
    url,
    avatar_url,
    login,
    name,
    location,
    followers,
    bio,
    following,
  } = props;

  return (
    <div className="card" href={url}>
      <div className="img-wrapper">
        <img src={avatar_url} alt="profile picture" />
      </div>
      <div className="user-info">
        <div className="user-header">
          <h2>{login}</h2>
          <h3>{name}</h3>
          <h3>{location}</h3>
        </div>
        <p>{bio}</p>
        <p>followers: {followers}</p>
        <p>following: {following}</p>
      </div>
    </div>
  );
}
export default Card;
