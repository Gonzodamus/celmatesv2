import React from "react";
import "./Menu.scss";

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        <ul>
          <li
            onMouseOver={this.props.hoverSelect}
            onMouseOut={this.props.hoverUnSelect}
            className="Listen"
          >
            Listen Now
          </li>
          <li
            onMouseOver={this.props.hoverSelect}
            onMouseOut={this.props.hoverUnSelect}
            className="Subscribe"
          >
            Subscribe
          </li>
          <li
            onMouseOver={this.props.hoverSelect}
            onMouseOut={this.props.hoverUnSelect}
            className="Social"
          >
            Social Media
          </li>
          <li
            onMouseOver={this.props.hoverSelect}
            onMouseOut={this.props.hoverUnSelect}
            className="About"
          >
            About Us
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
