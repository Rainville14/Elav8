import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    getGreeting = () => {
        const {
            name,
            isAuthenticated
        } = this.props;

        if (!isAuthenticated) {
            return (
                <Link to="/login" >Login</Link>
            )
        } else {
            return (
                <div className="user">{name}</div>
            )
        }
    }

    render() {
        const {
            sessionFetched
        } = this.props;

        return (
            <div className="col" id="account-greeting">
                {sessionFetched &&
                    this.getGreeting()
                }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        name: state.user.name,
        sessionFetched: state.session.fetched,
        isAuthenticated: state.user.isAuthenticated
    };
};

export default connect(mapStateToProps)(Greeting);
