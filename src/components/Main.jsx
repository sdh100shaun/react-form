import React from 'react'
import { Link } from 'react-router'

import AttendanceFormComponent from "./AttendanceFormComponent.jsx"


class Main extends React.Component 
{
	constructor(props) {
    	super(props);

	}
	render() {
			return <div>
						
						<p>
						All absences due to sickness must be reported on this form on your return to the course.
						</p>
						<AttendanceFormComponent {...this.props} excludeWeekends={()=>true} />

					</div>
					
	}
	
}
export default Main;