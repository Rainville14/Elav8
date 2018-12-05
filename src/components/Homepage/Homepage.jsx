import React from 'react';
import { connect } from 'react-redux';
import Column from 'components/common/layout/column';
import Row from 'components/common/layout/row';
import Module from 'components/common/module/module';
import BarChart from 'components/common/Charts/Bar';

class Homepage extends React.Component {
	render() {
		const {
			siteName
		} = this.props;

		return (
			<Row>
				<Module
					heading='Latest Updates'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam dictum odio at molestie. Pellentesque elementum sem vitae imperdiet scelerisque. Vestibulum sed lorem metus. Nulla nulla lectus, bibendum at metus id, auctor vulputate nibh. Pellentesque eu tempus purus, eget laoreet risus. Vivamus velit nisl, bibendum eget tincidunt quis, pulvinar non augue. Nam cursus dolor non leo laoreet interdum. Morbi vel magna vitae enim blandit pretium. Nullam turpis velit, condimentum et dolor sit amet, pellentesque mattis felis. Mauris tempus sollicitudin mattis. Morbi nec massa sit amet nisl malesuada tempus.
						</Module>
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
					<BarChart
						title='Other Stats'
						data={[{
							value: 60
						}, {
							value: 160
						}, {
							value: 90
						}, {
							value: 70
						}]}>
					</BarChart>
				</Module>
			</Row>
		)
	}
};
const mapStateToProps = (state, { form }) => {
	return {
		siteName: state.config.formattedSite
	};
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
