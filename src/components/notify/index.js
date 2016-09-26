import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NotifyActions from './actions';

import styles from './notify.css';
import Single from './Notify';

// eslint-disable-next-line react/prefer-stateless-function
class Notify extends Component {

  render() {
    return (
      <div className={styles.notify}>
        {this.props.notify.items.map(({ id, msg, config }) => {
          const props = {
            key: id,
            closeAction: this.props.actions.removeNotify,
            msg,
            config,
            id,
          };

          return <Single {...props} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notify: state.components.notify,
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
)(Notify);
