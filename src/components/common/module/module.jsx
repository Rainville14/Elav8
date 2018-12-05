import React from 'react';
import Column from 'components/common/layout/column';

class Module extends React.Component {
	render() {
		const {
			heading,
			children
		} = this.props;

		return (
			<Column gutter>
				<div className="module">
					{heading &&
						<h3>{heading}</h3>
					}
					{children}
				</div>
			</Column>
		)
	}
};

export default Module;
