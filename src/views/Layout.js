import React from 'react';
import {connect} from 'react-redux';
import Header from 'components/Header/Header';
import Nav from 'components/Header/Nav';

class Layout extends React.Component {
	constructor(props, dispatch) {
		super(props, dispatch);
	}
	render() {

		return (
			<React.Fragment>
				<Nav />
				<div className="col">
					<Header />
					<main>
						{this.props.children}
					</main>
				</div>
			</React.Fragment>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps)(Layout);
