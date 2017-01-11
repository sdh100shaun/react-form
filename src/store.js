import {createStore,compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/index';
import absences from './data/absences';

const defaultState = {
	absences
};

const store = createStore(rootReducer,defaultState);

export const history = syncHistoryWithStore(browserHistory,store);

export default store;