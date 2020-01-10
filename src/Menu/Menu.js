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
          ></li>
          <li
            onMouseOver={this.props.hoverSelect}
            onMouseOut={this.props.hoverUnSelect}
            className="Subscribe"
          ></li>
          <li
            onMouseOver={this.props.hoverSelect}
            onMouseOut={this.props.hoverUnSelect}
            className="Social"
          ></li>
          <li
            onMouseOver={this.props.hoverSelect}
            onMouseOut={this.props.hoverUnSelect}
            className="About"
          ></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
