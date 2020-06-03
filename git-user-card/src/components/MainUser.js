import React from "react";
import Card from "./maincard";

function MainUser(props) {
  console.log(props);

  return (
    <div>
      {props.users.map((user) => {
        return <Card props={user} key={user.id} />;
      })}
    </div>
  );
}
export default MainUser;
