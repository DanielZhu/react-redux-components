import React, {Component} from 'react'
import cx from 'classnames'

import styles from './notify.css'

export default class extends Component {

	constructor(props) {
		super(props);
		this.timers = [];

		this.config = {
			close: props.config.close !== undefined ? this.props.close : true,
			delay: props.config.delay  || 1000,
			delayIn: 0,
			delayOut: 300
		}

		this.state = {
			closing: false,
			opened: false
		}
	}

	//Start timer
	componentDidMount() {
		if (this.config.close)
			this.timers.push(
				setTimeout(this.handleTimer.bind(this),
				this.config.delay)
			);

		this.timers.push(
			setTimeout(this.opened.bind(this),
			this.config.delayIn
		))
	}

	//disable timer when unmout
	componentWillUnmount() {
		this.timers.forEach(() => clearTimeout(this.timer))
	}

	handleTimer() {
		this.setState({
			...this.state,
			closing: true
		});
		this.timers.push(
			setTimeout(this.selfDestruct.bind(this),
			this.config.delayOut
		))
	}

	opened() {
		this.setState({
			...this.state,
			opened: true
		})
	}

	selfDestruct() {
		this.props.closeAction(this.props.id);
	}

	getCloseClass() {
		if (this.state.closing)
			return styles.closing
	}

	getOpenedClass() {
		if (this.state.opened)
			return styles.opened
	}

	render() {
		return (
			<div className={cx(styles.item, this.getCloseClass(), this.getOpenedClass())}>
				{this.props.msg}
			</div>
		)
	}
}

