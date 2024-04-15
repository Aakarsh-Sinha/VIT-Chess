import React from "react";
import Grid from "./Grid";

import Eyecon from "./images/lichess.jpg";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = "Item";
    this.state = {
      hover: false,
    };
  }

  mouseOver = () => {
    this.setState({ hover: true });
  };

  mouseOut = () => {
    this.setState({ hover: false });
  };

  render() {
    const { item, i } = this.props;
    return (
      <div
        className="grid-box"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        {" "}
        <Grid />
        {this.state.hover ? <img src={Eyecon} alt="Eye icon" /> : null}
      </div>
    );
  }
}

export default Item;
