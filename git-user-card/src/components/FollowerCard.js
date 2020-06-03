import React from "react";

function FollowersCard({ props }) {
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
    <div className="card">
      <div className="img-wrapper">
        <img src={avatar_url} alt="profile picture" />
      </div>
      <h2>{login}</h2>
    </div>
  );
}
export default FollowersCard;
