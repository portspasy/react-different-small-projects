import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.avatar} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.firstName} {props.lastName}
        </a>
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        <div className="text">{props.desc}</div>
        <div className="actions">
          <a href="/" className="reply">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
