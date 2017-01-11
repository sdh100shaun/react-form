import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/absence'
import Main from './Main.jsx'

function mapStateToProps (state) {
	// state
	return {
		absences: state.absences
	}
};

function mapDispatchToProps (dispatch) {
	return bindActionCreators(actionCreators,dispatch);
}
const App = connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;