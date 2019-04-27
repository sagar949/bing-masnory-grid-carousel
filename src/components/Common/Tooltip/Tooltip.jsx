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

  renderTooltip = () => {
    const { active } = this.state;
    const { render } = this.props;

    if (active) {
      console.log(this.targetRef.current.getBoundingClientRect());
      if (this.tooltipRef.current !== null) {
        console.log(this.isInViewport(this.tooltipRef.current));
      }
      const {
        top,
        left,
        right,
        bottom,
        height,
        width
      } = this.targetRef.current.getBoundingClientRect();
      // const tooltipStyle = {
      //   position: 'absolute',
      //   bottom: window.innerHeight - top - 20 - window.scrollY,
      //   left: left + width / 2 + window.scrollX,
      //   // transform: 'translateX(300)',
      //   zIndex: '100',
      //   diplay: 'block'
      // };
      const tooltipStyle = {
        position: 'absolute',
        top:
          this.state.clientY - height > 0
            ? this.state.clientY - height
            : Math.abs(this.state.clientY - height),
        // top: '50%',
        left: this.state.clientX,
        zIndex: '100'
      };

      const html = (
        <div style={tooltipStyle} className={styles.Animate}>
          <div
            id="tooltip-content"
            role="tooltip"
            style={{
              position: 'absolute',
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
        className={this.props.style}
        style={{ display: 'block' }}
      >
        {children}
      </span>
    );

    return [source, this.renderTooltip()];
  }
}
