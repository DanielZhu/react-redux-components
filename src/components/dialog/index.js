import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTransition from 'react-addons-css-transition-group';

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
    this.props.actions.registerDialog(this.props.id);
  }

  close() {
    this.props.actions.closeDialog(this.props.id);
  }

  render() {
    const dialog = this.props.dialog.items.filter(item => item.id === this.props.id);

    return (
      <div>
        <ReactTransition
          transitionName="dialog"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {dialog.map(({ id, open }) => <Dialog
            id={id}
            key={new Date().getTime() + id}
            open={open}
            close={this.close}
            children={this.props.children}
          />)}
        </ReactTransition>

      </div>
    );
  }
}

export default connect(
  ({ components }) => ({ dialog: components.dialog }),
  dispatch => ({ actions: bindActionCreators(Actions, dispatch) })
)(DialogContainer);
