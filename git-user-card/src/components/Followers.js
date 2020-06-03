import React from "react";
import FollowersCard from "./followercard";

function Followers(props) {
  console.log(props.followers);
  return (
    <div className="followers-wrapper">
      {props.followers.map((follower) => {
        console.log(follower);
        return <FollowersCard key={follower.id} props={follower} />;
      })}
    </div>
  );
}
export default Followers;
