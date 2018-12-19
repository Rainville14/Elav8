import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Greeting from 'components/common/Account/Greeting';
import { objectExists } from 'utils/object';

class Header extends React.Component {
	render() {
		const {
			authenticated
		} = this.props;

		return (
			<header className="row">
				<div className="header--inner">
					<nav>
						<Greeting />
					</nav>
				</div>
			</header>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		authenticated: objectExists(state, 'user.isAuthenticated') ? state.user.isAuthenticated : false
	};
};

export default connect(mapStateToProps)(Header);
