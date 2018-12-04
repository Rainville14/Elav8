import React from 'react';

class Module extends React.Component {
	render() {
		const {
			heading,
			children
		} = this.props;

		return (
			<div className="module">
				{heading &&
					<h2>{heading}</h2>
				}
				{children}
			</div>
		)
	}
};

export default Module;
