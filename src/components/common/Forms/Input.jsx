import React from 'react';
import {Field} from 'react-final-form';

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
			<Field
				name={name}
				type={type}>
				{({input, meta: {active, touched, error, submitFailed}}) => (
					<div className="form-field flex">
						<label htmlFor={name}>{label}</label>
						<input
							{...input}
							type={type}
							id={id}
							className={classNames}
							name={name}
						 />
					</div>
				)}
			</Field>
		)
	}
};

export default Input;
