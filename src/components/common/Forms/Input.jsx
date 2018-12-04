import React from 'react';

class Input extends React.Component {
	render() {
		const {
			type,
			classNames,
			id,
			name,
			label
		} = this.props;

		return (
			<div className="form-field flex">
				<label htmlFor={name}>{label}</label>
				<input type={type} id={id} className={classNames} name={name} />
			</div>
		)
	}
};

export default Input;
