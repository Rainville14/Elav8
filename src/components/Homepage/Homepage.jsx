import React from 'react';
import {connect} from 'react-redux';
import Column from 'components/common/layout/column';
import Module from 'components/common/module/module';

class Homepage extends React.Component {
	render() {
		const {
			siteName
		} = this.props;

		return (
			<Column>
				{`This is ${siteName} Homepage`}
				<Module
					heading='Latest Updates'>
					This is a module
				</Module>
			</Column>
		)
	}
};
const mapStateToProps = (state, {form}) => {
	return {
		siteName: state.config.formattedSite
	};
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
