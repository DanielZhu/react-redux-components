import React, { Component } from 'react';
import NotifyComponent from './single';

export default class Single extends Component {

  constructor(props) {
    super(props);
    this.timers = [];
    this.startClosing = this.handleTimer.bind(this);

    this.config = {
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
    this.cleanTimer();
  }

  selfDestruct() {
    this.props.closeAction(this.props.id);
  }

  opened() {
    this.setState({
      ...this.state,
      transitionState: 'opened',
    });
  }

  cleanTimer() {
    this.timers.forEach(item => clearTimeout(item));
  }

  handleTimer() {
    this.cleanTimer();

    this.setState({
      ...this.state,
      transitionState: 'closing',
    });

    this.timers.push(
      setTimeout(this.selfDestruct.bind(this),
      this.config.delayOut
    ));
  }

  render() {
    return (
      <NotifyComponent
        msg={this.props.msg}
        closeAction={this.startClosing}
        transitionState={this.state.transitionState}
      />
    );
  }
}
