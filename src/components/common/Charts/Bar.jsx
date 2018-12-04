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
							<div className='data-point-wrapper'>
								<div className='data-point' key={index} style={{width: dataPoint.value + 'px'}}>
									<span class='value'>{dataPoint.value}</span>
								</div>
							</div>
						)}
				</div>
			</div>
		)
	}
};

export default BarChart;
