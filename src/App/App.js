import React from "react";
import Menu from "../Menu/Menu";
import Display from "../Display/Display";
import "./App.scss";

class App extends React.Component {
  state = {
    activeSegment: ""
  };
  hoverSelect = e => {
    e.target.style.backgroundColor = "RGB(176, 203, 215)";
    this.setState({ activeSegment: e.target.className });
  };
  hoverUnSelect = e => {
    e.target.style.backgroundColor = "unset";
  };

  render() {
    return (
      <div className="App">
        <div className="placeholder"></div>
        <Menu
          activeSegment={this.state.activeSegment}
          hoverSelect={this.hoverSelect}
          hoverUnSelect={this.hoverUnSelect}
        />
        <Display activeSegment={this.state.activeSegment} />
      </div>
    );
  }
}

export default App;
