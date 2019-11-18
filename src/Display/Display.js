import React from "react";
import Listen from "../Listen/Listen";
import Subscribe from "../Subscribe/Subscribe";
import Social from "../Social/Social";
import About from "../About/About";

class Display extends React.Component {
  active = () => {
    let activeSegment = "";
    switch (this.props.activeSegment) {
      case "Listen":
        activeSegment = <Listen />;
        break;
      case "Subscribe":
        activeSegment = <Subscribe />;
        break;
      case "Social":
        activeSegment = <Social />;
        break;
      case "About":
        activeSegment = <About />;
        break;
      default:
        activeSegment = <Listen />;
        break;
    }
    return activeSegment;
  };
  render() {
    return <div className="Display">{this.active()}</div>;
  }
}

export default Display;
