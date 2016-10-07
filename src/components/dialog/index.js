import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';

import Dialog from './Dialog.js';


class DialogContainer extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.state = {
      state: 'closed',
    };
  }

  componentDidMount() {
    console.log('did mount', this.props);
    this.props.actions.registerDialog(this.props.id);
  }

  close() {
    this.props.actions.closeDialog(this.props.id);
  }

  render() {
    const dialog = this.props.dialog.items.filter(item => item.id === this.props.id)[0];
    if (!dialog || !dialog.open) return null;

    return (
      <div>

        <Dialog
          id={this.props.id}
          open={dialog.open}
          close={this.close}
          children={this.props.children}
        />

      </div>
    );
  }
}

export default connect(
  ({ components }) => ({ dialog: components.dialog }),
  dispatch => ({ actions: bindActionCreators(Actions, dispatch) })
)(DialogContainer);
