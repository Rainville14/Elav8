import React from 'react';
import { connect } from 'react-redux';
import { getSession } from 'actions/Account';

class Session extends React.Component {
    componentDidMount = () => {
        const {
            getSession
        } = this.props;

        getSession();
    }

    render() {
        return (
            this.props.children
        )
    }
}

const mapDispatchToProps = {
    getSession
}

export default connect(null, mapDispatchToProps)(Session)
