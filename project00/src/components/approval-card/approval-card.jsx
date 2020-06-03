import React from "react";

const ApprovalCard = (props) => {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <img
            className="right floated mini ui image"
            src={props.avatar}
            alt="avatar"
          />
          <div className="header">
            {props.firstName} {props.lastName}
          </div>
          <div className="meta">Friends of Veronika</div>
          <div className="description">{props.desc}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <img
            className="right floated mini ui image"
            src={props.avatar}
            alt="avatar"
          />
          <div className="header">
            {props.firstName} {props.lastName}
          </div>
          <div className="meta">New Member</div>
          <div className="description">{props.desc}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
