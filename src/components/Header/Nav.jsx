import React from 'react';
import {Link} from 'react-router-dom';
import Logo from 'components/Logo/Logo';

class Nav extends React.Component {
	render() {
		return (
			<section className="side-menu col">
				<Link to="/"><Logo /></Link>
				<nav>
					<Link to="/About">About</Link>
					<Link to="/Portfolio">Portfolio</Link>
					<Link to="/Contact">Contact</Link>
					<Link to="/Utilities/Styleguide">Styleguide</Link>
				</nav>
			</section>
		)
	}
};

export default Nav;
