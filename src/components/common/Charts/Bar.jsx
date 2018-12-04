import React from 'react';

class BarChart extends React.Component {
	render() {
		const {
			data,
			title
		} = this.props;

		return (
			<div className='chart--bar'>
				<h3 className='title'>{title}</h3>
				<div className='chart'>
					{data &&
						data.map((dataPoint, index) =>
							<div className='data-point-wrapper' key={index}>
								<div className='data-point' style={{width: dataPoint.value + 'px'}}>
									<span className='value'>{dataPoint.value}</span>
								</div>
							</div>
						)}
				</div>
			</div>
		)
	}
};

export default BarChart;
