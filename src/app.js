import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NotifyActions from './components/notify/actions';

import styles from './styles.css';
import Notify from './components/notify';
import Dialog from './components/dialog';

const App = ({ actions }) => (
  <div>

    <Notify />

    <Dialog id="dialog1">
      <div>
        Content
      </div>
    </Dialog>


    <div className={styles.container}>
      <button onClick={() => actions.addNotify('Olar!11! success', { delay: 100000, type: 'success' })}>
        Open notify success
      </button>
      <button onClick={() => actions.addNotify('Olar!11! error', { delay: 10000, type: 'error' })}>
        Open notify error
      </button>
      <button onClick={actions.closeAll}>
        Close All
      </button>
      <br />
      <button onClick={() => actions.openDialog('dialog1')}>
        Open Dialog
      </button>
    </div>
  </div>
);


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
