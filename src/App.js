import React from "react";
import faker from "faker";
import CommentDetail from "./components/CommentDetail.js";
import ApprovalCard from "./components/ApprovalCard.js";
import SeasonDisplay from "./components/SeasonDisplay.js";
import BlogPost from "./components/BlogPost.js";
import Loader from "./components/Loader";
import "./styles/app.css";

class App extends React.Component {
  state = { lat: null, errorMsg: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMsg: err.message })
    );
  }

  //helper method
  renderContent() {
    if (this.state.errorMsg && !this.state.lat) {
      return <p>Error: {this.state.errorMsg}</p>;
    }
    if (!this.state.errorMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader />;
  }

  render() {
    return (
      <div className="wrapper">
        <header role="banner" className="header">
          {this.renderContent()}
        </header>
        <main aria-label="content" className="App">
          <BlogPost />
          <div className="ui container comments box">
            <ApprovalCard>
              <CommentDetail
                name="Sammyn"
                timeAgo="Today 16:05"
                comment="I like the subject"
                avatar={faker.image.avatar()}
                joined="2012"
                friends="375"
              />
            </ApprovalCard>
            <ApprovalCard>
              <CommentDetail
                name="Christine"
                timeAgo="Today 17:53"
                comment="The content is amazing"
                avatar={faker.image.avatar()}
                joined="2015"
                friends="150"
              />
            </ApprovalCard>
            <ApprovalCard>
              <CommentDetail
                name="Dean"
                timeAgo="Yesterday 14:23"
                comment="I'm loving it!"
                avatar={faker.image.avatar()}
                joined="2016"
                friends="437"
              />
            </ApprovalCard>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
