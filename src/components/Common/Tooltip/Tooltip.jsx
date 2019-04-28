import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './Tooltip.module.css';

export default class Tooltip extends Component {
  state = {
    active: false,
    clientX: 0,
    clientY: 0
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
    this.tooltipRef = React.createRef();
  }

  showTooltip = e => {
    // e.preventDefault();
    const { clientX, clientY } = e;
    console.log({ clientX, clientY });

    this.setState({
      ...this.state,
      active: true,
      clientX: clientX,
      clientY: clientY
    });
  };

  hideTooltip = () => {
    this.setState({ ...this.state, active: false, clientX: 0, clientY: 0 });
  };

  preserveTooltip = () => {
    this.setState({ ...this.state, active: true });
  };

  renderTooltip = () => {
    const { active } = this.state;
    const { render } = this.props;

    if (active) {
      console.log(this.targetRef.current.getBoundingClientRect());
      if (this.tooltipRef.current !== null) {
        console.log(this.isInViewport(this.tooltipRef.current));
      }
      const { height } = this.targetRef.current.getBoundingClientRect();
      const tooltipStyle = {
        position: 'absolute',
        top: Math.abs(this.state.clientY - height),
        left: this.state.clientX,
        display: 'block'
      };

      const html = (
        <div
          style={tooltipStyle}
          className={styles.Animate}
          onMouseEnter={this.preserveTooltip}
          onMouseLeave={this.hideTooltip}
        >
          <div
            id="tooltip-content"
            role="tooltip"
            style={{
              position: 'absolute',
              padding: '4px 4px',
              borderRadius: 4,
              background: '#333',
              color: 'white',
              display: 'block'
              // zIndex: '200'
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
        className={this.props.style}
        style={{ display: 'block' }}
      >
        {children}
      </span>
    );

    return [source, this.renderTooltip()];
  }
}
