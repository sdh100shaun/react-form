import React from 'react'
import {render} from 'react-dom'
import AttendanceFormComponent from "./components/AttendanceFormComponent.jsx"
import { DateRangePicker } from "react-dates";
import moment from "moment";
import AttendanceFormInputComponent from "./components/AttendanceFormInputComponent.jsx";
import DeclarationComponent from "./components/DeclarationComponent.jsx";
var css = require("./styles/style.sass");

import {Router,Route,IndexRoute,browserHistory} from 'react-router'

const router = (
	<Router history={browserHistory}>
		<Route path="/">
		 <IndexRoute excludeWeekends={()=>true} component={AttendanceFormComponent}></IndexRoute>
		</Route>

	</Router>

)

render(router,document.getElementById('app'));