import React from "react";
import faker from "faker";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a className="author" href="/">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};

export default CommentDetail;
