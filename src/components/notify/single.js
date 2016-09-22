import React, {Component} from 'react'

export default class extends Component {

	constructor(props) {
		super(props);
		console.log(this);
		this.timer = null;
	}

	//Start timer
	componentDidMount() {
		this.timer = setTimeout(this.handleTimer.bind(this), 1000);
	}

	//disable timer when unmout
	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	handleTimer() {
		console.log('esse', this);
		let {id} = this.props;
		console.log('id', id);
		this.props.closeAction(id)
		console.log('handleTimer');
	}

	render() {
		return (
			<div>
				{this.props.msg}
			</div>
		)
	}
}

