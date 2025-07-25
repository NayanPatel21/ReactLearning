// import profilepicture from "./assets/profilepicture.jpg";
// import React from 'react';
import profileImage from "../assets/profile.jpg";
function Card() {
  return (
    <div className="card">
      <img
        alt="profile picture"
        src={profileImage}
        className="card-picture"
      ></img>
      <h2 className="card-h2">My cart header</h2>
      <p className="card-font"> This is just sample text</p>
    </div>
  );
}
export default Card;
