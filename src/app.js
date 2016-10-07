import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NotifyActions from './components/notify/actions';
import * as DialogActions from './components/dialog/actions';

import styles from './styles.css';
import Notify from './components/notify';
import Dialog from './components/dialog';

const App = ({ actionsNotify, actionsDialog }) => (
  <div>

    <Notify />

    <Dialog id="dialog1">
      <div>
        Content
      </div>
    </Dialog>

    <Dialog id="dialog2">
      <div>
        Content
      </div>
    </Dialog>


    <div className={styles.container}>
      <button onClick={() => actionsNotify.addNotify('Olar!11! success', { delay: 100000, type: 'success' })}>
        Open notify success
      </button>
      <button onClick={() => actionsNotify.addNotify('Olar!11! error', { delay: 10000, type: 'error' })}>
        Open notify error
      </button>
      <button onClick={actionsNotify.closeAll}>
        Close All
      </button>
      <br />
      <button onClick={() => actionsDialog.openDialog('dialog1')}>
        Open Dialog
      </button>
      <button onClick={() => actionsDialog.closeDialog('dialog1')}>
        Close Dialog
      </button>
      <br />
      <button onClick={() => actionsDialog.openDialog('dialog2')}>
        Open Dialog2
      </button>
      <button onClick={() => actionsDialog.closeDialog('dialog2')}>
        Close Dialog2
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
    actionsNotify: bindActionCreators(NotifyActions, dispatch),
    actionsDialog: bindActionCreators(DialogActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
