import React, { Fragment } from "react";

const CommentDetail = (props) => {
  return (
    <Fragment>
      <div className="blurring dimmable image">
        <div className="ui dimmer">
          <div className="content">
            <div className="center">
              <div className="ui inverted button">Add Friend</div>
            </div>
          </div>
        </div>
        <img alt="avatar" src={props.avatar} className="ui image" />
      </div>
      <div className="content">
        <a className="header" href="/">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.comment}</div>

        <div className="extra content">
          <span className="right floated">Joined in {props.joined}</span>
          <span>
            <i className="user icon"></i>
            {props.friends} friends
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default CommentDetail;
