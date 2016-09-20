import React, {Component} from 'react'

import styles from './notify.css'

export default class extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className={styles.notify}>
				notify
			</div>
		)
	}
}