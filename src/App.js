import React from "react";
import faker from "faker";
import CommentDetail from "./components/CommentDetail.js";
import ApprovalCard from "./components/ApprovalCard.js";
import "./app.css";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <div className="ui container comments">
          <ApprovalCard>
            <CommentDetail
              name="Sammyn"
              timeAgo="Today 16:05"
              comment="I like the subject"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail
              name="Christine"
              timeAgo="Today 17:53"
              comment="The content is amazing"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail
              name="Elaine"
              timeAgo="Yesterday 21:15"
              comment="Nice blog post"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
        </div>
      </div>
    );
  }
}

export default App;
