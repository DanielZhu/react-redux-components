import React, { Component } from 'react';

export default class Dialog extends Component {
  constructor(props) {
    super(props);
    this.timers = [];
    console.log(this.props);
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

  render() {
    return (
      <div>
        {this.props ? 'true' : 'false'}
      </div>
    );
  }
}
