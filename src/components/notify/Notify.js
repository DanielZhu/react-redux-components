import React, { Component } from 'react';
import NotifyComponent from './single';

/*
  animation timer: 300ms
  lifecycle:
    - born -> componentDidMount start 300ms timer
    - full opened -> on end 300ms, change state do opened and start timer default || config
    - start closing - action
    - self destroy - action
*/

export default class Single extends Component {

  constructor(props) {
    super(props);
    this.timers = [];
    this.startClose = this.startClose.bind(this);

    this.config = {
      type: props.config.type || 'success',
      close: props.config.close !== undefined ? this.props.close : true,
      delay: props.config.delay || 1000,
      delayIn: 0,
      delayOut: 300,
    };

    this.state = {
      transitionState: 'opening',
    };
  }

  componentDidMount() {
    this.timers.push(
      setTimeout(
      this.opened.bind(this),
      this.config.delayIn
    ));
  }

  componentWillReceiveProps(update) {
    if (update.closing && this.state.transitionState === 'opened') {
      this.activeCloseTimer();
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    this.timers.forEach(item => clearTimeout(item));
  }

  selfDestruct() {
    this.props.destroy(this.props.id);
  }

  changeState(status) {
    this.setState({
      ...this.state,
      transitionState: status,
    });
  }

  startClose() {
    this.timers.forEach(item => clearTimeout(item));
    this.props.close(this.props.id);
  }

  activeCloseTimer() {
    this.changeState('closing');
    this.timers.push(setTimeout(this.selfDestruct.bind(this), 300));
  }

  activeTimer() {
    if (this.config.close) {
      this.timers.push(
        setTimeout(
        this.startClose.bind(this),
        this.config.delay
      ));
    }
  }

  opened() {
    this.changeState('opened');
    this.activeTimer();
  }

  render() {
    return (
      <NotifyComponent
        type={this.config.type}
        msg={this.props.msg}
        transitionState={this.state.transitionState}
        closing={this.props.closing}
        close={this.startClose}
      />
    );
  }
}
