import React from "react"
import { Link } from 'react-router'
import moment  from 'moment'
class ThanksComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = (this.props.route) ? this.props.route.store.getState() : {}
        
    }

    
    render() {
        let hasAbsence = (this.state.absences) ? true : false
        let statement = null
        if (hasAbsence)
        {
            
           
            statement = 
            <div className="row">
               
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-10 clearfix">
                 <h3>Absence reported </h3>
                 <p>/ reported on { this.state.absences[0].submittedDate.format('MMMM Do YYYY, h:m a') } </p>
                <table className="table table-striped">
                <tbody>
                <tr>
                <td>Student</td>
                <td> {this.state.absences[0].username}</td>
                </tr>
                <tr>
                <td>Cohort</td>
                <td> {this.state.absences[0].cohort}</td>
                </tr>
                <tr>
                <td>Period</td>
                <td> {this.state.absences[0].startDate.format('MMMM Do YYYY')} &#x21d2; {this.state.absences[0].endDate.format('MMMM Do YYYY')}</td>
                </tr>
                <tr>
                <td>Reason</td>
                <td> {this.state.absences[0].reason}</td>
                </tr>
                </tbody>
                </table>
                <Link to='/' className="pull-right"> Go back </Link>
                </div>
            </div>
        }

        return (
                statement
        )
    }
}
export default ThanksComponent;