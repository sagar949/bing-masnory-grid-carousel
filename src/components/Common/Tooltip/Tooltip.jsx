import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Tooltip extends Component {
  state = {
    active: false
  };
  constructor(props) {
    super(props);
    const id = 'tooltip';
    this.tooltipWrapper = document.querySelector(`#${id}`);
    if (!this.tooltipWrapper) {
      this.tooltipWrapper = document.createElement('div');
      this.tooltipWrapper.setAttribute('id', id);
      document.body.appendChild(this.tooltipWrapper);
    }

    this.targetRef = React.createRef();
  }

  showTooltip = () => {
    this.setState({ ...this.state, active: true });
  };

  hideTooltip = () => {
    this.setState({ ...this.state, active: false });
  };
  renderTooltip = () => {
    const { active } = this.state;
    const { render } = this.props;

    if (active) {
      const {
        top,
        left,
        width
      } = this.targetRef.current.getBoundingClientRect();
      const tooltipStyle = {
        position: 'absolute',
        bottom: window.innerHeight - top + -8 - window.scrollY,
        left: left + width / 2 + window.scrollX,
        zIndex: '100'
      };
      const html = (
        <div style={tooltipStyle}>
          <div
            id="tooltip-content"
            role="tooltip"
            style={{
              position: 'relative',
              left: '-50%',
              //   top: '100%',
              padding: '4px 4px',
              borderRadius: 4,
              background: '#333',
              color: 'white'
            }}
          >
            {render}
          </div>
        </div>
      );
      return ReactDOM.createPortal(html, this.tooltipWrapper);
    }
    return null;
  };

  render() {
    const { children } = this.props;
    const source = (
      <span
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
        tabIndex="0"
        role="button"
        onFocus={this.showTooltip}
        onBlur={this.hideTooltip}
        key="0"
        ref={this.targetRef}
        aria-describedby="tooltip-content"
      >
        {children}
      </span>
    );

    return [source, this.renderTooltip()];
  }
}
