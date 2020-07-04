import React from "react";

const ApprovalCard = (props) => {
  return (
    <div className="ui special cards">
      <div className="card">{props.children}</div>
    </div>
  );
};

export default ApprovalCard;
