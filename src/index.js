import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import {
	applyMiddleware,
	compose,
	createStore,
	combineReducers
} from 'redux';
import { createLogger } from 'redux-logger';

import { Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer } from 'react-router-redux';

import Session from 'components/common/Account/Session';

import baseSiteConfig from 'configs/sites/base';

import Base from 'controllers/base';
import Utilities from 'controllers/utilities';

import Layout from 'views/Layout';

import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import configReducer from 'reducers/ConfigReducer';
import userReducer from 'reducers/UserReducer';
import sessionReducer from 'reducers/SessionReducer';

import apiMiddleware from 'middleware/apiMiddleware';

import 'gridly/dist/gridly.min';
import 'styles/global.scss';

const rootReducer = combineReducers({
	form: formReducer,
	routing: routerReducer,
	config: configReducer(baseSiteConfig),
	user: userReducer,
	session: sessionReducer
});

const Routes = [
	...Base,
	...Utilities
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createClientStore = (state, rootReducer, history) => {
	if (!process.env.DEVTOOLS) {
		return createStore(rootReducer, state, composeEnhancers(applyMiddleware(thunk, apiMiddleware, routerMiddleware(history), createLogger()))
		);
	} else {
		return createStore(rootReducer, state, composeEnhancers(applyMiddleware(thunk, apiMiddleware, routerMiddleware(history)))
		);
	}
};

const history = createHistory();
// Can inject state in here eventually
const store = createClientStore({}, rootReducer, history);

if (document.getElementById('app')) {
	ReactDOM.render(
		<Provider store={store}>
			<Session>
				<ConnectedRouter history={history}>
					<Switch>
						<Layout>
							{Routes.map((route) =>
								<Route
									key={route.path}
									path={route.path}
									component={route.component}
									exact={route.exact}
								/>
							)}
						</Layout>
					</Switch>
				</ConnectedRouter>
			</Session>
		</Provider>, document.getElementById('app')
	);
}
