import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';

import Dialog from './Dialog.js';


class DialogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.q = 's';
    // console.log(props);
  }

  componentDidMount() {
    console.log('did mount', this.props);
    this.props.actions.registerDialog(this.props.id);
  }

  render() {
    return (
      <div>

        <Dialog
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
