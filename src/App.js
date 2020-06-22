import React from "react";
import CommentDetail from "./CommentDetail.js";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="ui container comments">
          <CommentDetail
            name="Sammyn"
            timeAgo="Today 16:05"
            comment={this.comment}
          />
          <CommentDetail
            name="Christine"
            timeAgo="Today 17:53"
            comment={this.comment}
          />
          <CommentDetail
            name="Elaine"
            timeAgo="Yesterday 21:15"
            comment={this.comment}
          />
        </div>
      </div>
    );
  }
}

export default App;
