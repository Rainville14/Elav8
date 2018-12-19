import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { objectExists } from 'utils/object';

class Greeting extends React.Component {
    render() {
        const {
            authenticated
        } = this.props;

        return (
            <div className="col" id="account-greeting">
                {!authenticated ? (
                    <Link to="/login">Login</Link>
                )
                    : (
                        <div className="user">Matt</div>
                    )
                }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        authenticated: objectExists(state, 'user.isAuthenticated') ? state.user.isAuthenticated : false
    };
};

export default connect(mapStateToProps)(Greeting);
