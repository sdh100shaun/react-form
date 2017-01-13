import React from "react"
class ThanksComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const props = JSON.stringify(this.props)
        return (

            <p>
                {props}
            </p>
        )
    }
}
export default ThanksComponent;