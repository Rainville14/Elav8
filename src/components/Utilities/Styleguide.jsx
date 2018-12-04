import React from 'react';
import Column from 'components/common/layout/column';
import Row from 'components/common/layout/row';
import Input from 'components/common/Forms/Input';

class Styleguide extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Row>
					<Column>
						Button
					</Column>
					<Column>
						<button className="btn">Button</button>
					</Column>
				</Row>
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
			</React.Fragment>
		)
	}
};

export default Styleguide;
