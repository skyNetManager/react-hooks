import React, { Component } from 'react';
import withToolTIp from "./withTooltip";

class Movie extends Component {
  render() {
    return (
      <div>
        Movie
        {this.props.showTooltip && <div>Some tooltip</div>}
      </div>
    );
  }
}

export default withToolTIp(Movie);
 