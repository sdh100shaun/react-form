import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import absences from './absences'

const rootReducer = combineReducers({
	absences,
	routing: routerReducer
});

export default rootReducer;
