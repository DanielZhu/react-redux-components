import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NotifyActions from './components/notify/actions'

import styles from './styles.css'

//notify
import Notify from './components/notify'

class App extends Component {

	openNotify() {
    this.props.actions.addNotify('Message', {
      delay: 3000,
    });
	}

  render() {
    // const { counter, actions } = this.props
    return (
    	<div>
    		<Notify />
	      <div className={styles.container}>
	        <button onClick={this.openNotify.bind(this)}>
	        	open notify
	        </button>
	      </div>
    	</div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number,
  actions: PropTypes.object
};


function mapStateToProps(state) {
  return {
    state: state
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NotifyActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
