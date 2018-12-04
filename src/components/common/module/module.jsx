import React from 'react';
import Column from 'components/common/layout/column';

class Module extends React.Component {
	render() {
		const {
			heading,
			children
		} = this.props;

		return (
			<Column className="module" gutter>
				{heading &&
					<h2>{heading}</h2>
				}
				{children}
			</Column>
		)
	}
};

export default Module;
