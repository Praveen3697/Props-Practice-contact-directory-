import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar cardImg={props.img} />
      </div>
      <div className="bottom">
        <Info detailInfo={props.tel} />
        <Info detailInfo={props.mail} />
      </div>
    </div>
  );
}

export default Card;
