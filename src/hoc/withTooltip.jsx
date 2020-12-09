import React from 'react';

function withTooltip(Component) {
  return class WithTooltip extends React.Component {
    state = { showTooltip: false}

    mouseOver = () => this.setState({ showTooltip: true });
    onMouseOut = () => this.setState({ showTooltip: false });

    render() {
      return (<div onMouseOver={this.mouseOver} onMouseOut={this.onMouseOut}>
        <Component {...this.props} showTooltip={this.state.showTooltip}/>
      </div>);
    }
  };
}

export default withTooltip;