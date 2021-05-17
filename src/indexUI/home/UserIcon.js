
import React from "react";
import { Link } from "react-router-dom";

export function UserIcon(user) {
  return (
    <div className="facility m-3">
      <div className="userpic">
        <p>{user.icon}</p>
      </div>
      <h2>{user.title} </h2>
      <p> {user.content}</p>
      <Link to="/" >{user.link}</Link>
    </div>
  );
}
export function Course(propssub) {
  return (
    <div className="subject">
      <h4>{propssub.sub} </h4>
    </div>
  );
}
