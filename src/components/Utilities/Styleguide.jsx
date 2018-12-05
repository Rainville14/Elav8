import React from 'react';
import {Form} from 'react-final-form';
import BarChart from 'components/common/Charts/Bar';
import Row from 'components/common/layout/row';
import Input from 'components/common/Forms/Input';
import Module from 'components/common/module/module';

class Styleguide extends React.Component {
	onSubmit = (values) => {
		console.log('Submitted --- ' + JSON.stringify(values))
	}
	render() {
		const {
			onSubmit
		} = this.props;

		return (
			<Row>
				<Module>
					<BarChart
						title='My Stats'
						data={[{
							value: 30
						}, {
							value: 100
						}, {
							value: 50
						}, {
							value: 70
						}]}>
					</BarChart>
				</Module>

				<Module>
					<Form
						onSubmit={this.onSubmit}
						render={({handleSubmit, pristine, invalid}) => (
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
				</Module>
			</Row>
		)
	}
};

export default Styleguide;
