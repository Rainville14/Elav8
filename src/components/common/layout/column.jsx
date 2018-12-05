import React from 'react';
import classnames from 'classnames';

class Column extends React.Component {
	render() {
		const {
			children,
			className,
			gutter
		} = this.props;

		return (
			<div 
				className = {
					classnames(
						className,
						'col',
						{'col-gutter': gutter}
						)
				}>
				{children}
			</div>
		)
	}
};

export default Column;
