import React from "react";
import faker from "faker";
import CommentDetail from "./components/CommentDetail.js";
import ApprovalCard from "./components/ApprovalCard.js";
import SeasonDisplay from "./components/SeasonDisplay.js";
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
    return <div className="borderWhite">{this.renderContent()}</div>;

    //   <div className="App">
    //     {/* <SeasonDisplay lat={lat} /> */}

    //     <div className="ui container comments">
    //       <ApprovalCard>
    //         <CommentDetail
    //           name="Sammyn"
    //           timeAgo="Today 16:05"
    //           comment="I like the subject"
    //           avatar={faker.image.avatar()}
    //         />
    //       </ApprovalCard>
    //       <ApprovalCard>
    //         <CommentDetail
    //           name="Christine"
    //           timeAgo="Today 17:53"
    //           comment="The content is amazing"
    //           avatar={faker.image.avatar()}
    //         />
    //       </ApprovalCard>
    //       <ApprovalCard>
    //         <CommentDetail
    //           name="Elaine"
    //           timeAgo="Yesterday 21:15"
    //           comment="Nice blog post"
    //           avatar={faker.image.avatar()}
    //         />
    //       </ApprovalCard>
    //     </div>
    //   </div>
    // );
  }
}

export default App;
