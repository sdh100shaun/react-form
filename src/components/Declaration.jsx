import React from 'react'
import ReactDOM from 'react-dom';

class Declaration extends React.Component {

	constructor(props) {
		super(props);
		this.state={daysAbsent: props.daysAbsent}

	}

	render(){
		let statement = null
		
		if(this.state.daysAbsent() >=7)
		{
			statement = <div>
				<p><strong className="warning">Important - please read</strong></p>
				<p>
					After the first seven days of continuous sickness/absence from the course, including study days, personal study days, practice placement days and any other non-working days, a medical certificate from your doctor must support this form.  Do not delay seeing your doctor if in doubt regarding your medical condition.  Your continued attendance on the course may be affected if you fail to comply with these instructions.
				</p>
			</div>
		}
		return (statement)
	}
}
export default Declaration 