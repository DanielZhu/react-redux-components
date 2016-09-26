import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NotifyActions from './components/notify/actions';

import styles from './styles.css';
import Notify from './components/notify';

class App extends Component {

  constructor(props) {
    super(props);

    this.open = this.openNotify.bind(this);
  }

  openNotify() {
    this.props.actions.addNotify('Message', {
      delay: 30000,
    });
  }

  render() {
    return (
      <div>
        <Notify />
        <div className={styles.container}>
          <button onClick={this.open}>
            Open notify
          </button>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    state,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NotifyActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
