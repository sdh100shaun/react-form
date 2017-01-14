import React from "react"
import { Link } from 'react-router'

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
            statement = <p>{this.state.absences[0].username}
            <Link to='/'> Go back </Link>
            </p>
        }

        return (
                statement
        )
    }
}
export default ThanksComponent;