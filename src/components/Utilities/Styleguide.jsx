import React from 'react';
import { Form } from 'react-final-form';
import Column from 'components/common/layout/column';
import Row from 'components/common/layout/row';
import Input from 'components/common/Forms/Input';

class Styleguide extends React.Component {
	onSubmit = (values) => {
		console.log('Submitted --- ' + JSON.stringify(values))
	}
	render() {
		const {
			onSubmit
		} = this.props;

		return (
			<Form
				onSubmit={this.onSubmit}
				render={({ handleSubmit, pristine, invalid }) => (
					<form onSubmit={handleSubmit}>
				<Row>
					<Input
						name='userName'
						id='userName'
						type='text'
						label='Username'
					/>
				</Row>
				<Row>
					<Input
						name='checkbox'
						id='checkbox'
						type='checkbox'
						label='Checkbox'
					/>
				</Row>
				<Row>
					<Input
						name='gender'
						id='male'
						type='radio'
						label='Male'
					/>
				</Row>
				</form>
				)}>
			</Form>
		)
	}
};

export default Styleguide;
