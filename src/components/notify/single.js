import React, { Component } from 'react';
import cx from 'classnames';
import styles from './notify.css';

export default class Single extends Component {

  constructor(props) {
    super(props);
    this.timers = [];

    this.config = {
      close: props.config.close !== undefined ? this.props.close : true,
      delay: props.config.delay || 1000,
      delayIn: 0,
      delayOut: 300,
    };

    this.state = {
      closing: false,
      opened: false,
    };
  }


  componentDidMount() {
    if (this.config.close) {
      this.timers.push(
        setTimeout(this.handleTimer.bind(this),
        this.config.delay)
      );
    }

    this.timers.push(
      setTimeout(this.opened.bind(this),
      this.config.delayIn
    ));
  }

  componentWillUnmount() {
    this.timers.forEach(() => clearTimeout(this.timer));
  }

  getOpenedClass() {
    if (this.state.opened) {
      return styles.opened;
    }
    return null;
  }

  getCloseClass() {
    if (this.state.closing) {
      return styles.closing;
    }
    return null;
  }

  selfDestruct() {
    this.props.closeAction(this.props.id);
  }


  opened() {
    this.setState({
      ...this.state,
      opened: true,
    });
  }

  handleTimer() {
    this.setState({
      ...this.state,
      closing: true,
    });
    this.timers.push(
      setTimeout(this.selfDestruct.bind(this),
      this.config.delayOut
    ));
  }

  render() {
    return (
      <div className={cx(styles.item, this.getCloseClass(), this.getOpenedClass())}>
        {this.props.msg}
      </div>
    );
  }
}

