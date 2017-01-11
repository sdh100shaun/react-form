import React from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import AttendanceFormInputComponent from "./AttendanceFormInputComponent.jsx";
import DeclarationComponent from "./DeclarationComponent.jsx";
var css = require("../styles/style.sass");


class AttendanceFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value, item: props.item, formItems: {}, focusedInput: null,
      startDate: null,
      endDate: null,
      daysAbsent: 0,
      excludeWeekends: (this.props.route) ? this.props.route.excludeWeekends : props.excludeWeekends(),
      error: {},
      username:'',
      cohort:'',
      orientation:(window.innerWidth < 600) ? "vertical":"horizontal"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
    this.state.formItems["startDate"] = startDate;
    this.state.formItems["endDate"] = endDate;

    if (endDate) {
      this.state.daysAbsent = endDate.diff(startDate, "days") + 1;
    }

    var excludedDays = 0
    if (this.state.excludeWeekends) {
      var iDate = moment(startDate);

      while (iDate <= endDate) {


        if (iDate.get("day") == 6 || iDate.get("day") == 0) {

          excludedDays += 1

        }
        iDate.add(1, "d")

      }
    }

    this.state.daysAbsent = this.state.daysAbsent - excludedDays

  }



  onFocusChange(focusedInput) {
    this.setState({ focusedInput });

  }



  handleInput(e) {

    this.state.formItems[e.target.name] = e.target.value;



  }
  handleTextAreaChange(e) {

    this.setState({ error: {} });
    this.state.formItems["reason"] = e.target.value;

  }



  handleDateChange() {

  }


  handleSubmit(event) {

    var reason = this.state.formItems["reason"] == undefined ? "" : this.state.formItems["reason"]
    var reportedDays = this.state.daysAbsent == undefined ? 0 : this.state.daysAbsent
    if (reason.length < 3) {
      this.setState({ error: { textarea: "Please complete this field is required", textareaclass: "error" } })
    }
    else {
      alert("A name was submitted: " + JSON.stringify(this.state.formItems));

    }
    event.preventDefault();
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    let confirmation = null
    if (this.state.daysAbsent > 0) {
      confirmation = <p className="alert alert-warning"> By submission of this form I declare that I have reported {this.state.daysAbsent} days absent from my course</p>;
    }

    return (
      <form onSubmit={this.handleSubmit} className="form-vertical">
        <div className="row">
          <div className="form-group">
            <label className="col-xs-10  control-label">
              Name:
      </label>
            <div className="col-xs-10">
              <AttendanceFormInputComponent value={this.state.username} placeholder="e.g uczse" name="username" handler={this.handleInput} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-10  control-label" htmlFor="cohort" >
              Cohort:
        </label>
            <div className="col-xs-10">

              <AttendanceFormInputComponent value={this.state.cohort} name="cohort" handler={this.handleInput} />

            </div>
          </div>
        </div><div className="row">
          <div className="form-group">
            <label className="col-md-10 control-label">
              Period of absence:
        </label>
            <div className="col-xs-10">
              <DateRangePicker onDatesChange={this.onDatesChange}
                displayFormat="D/MM/Y"
                onFocusChange={this.onFocusChange}
                focusedInput={focusedInput}
                startDate={startDate}
                endDate={endDate}
                isOutsideRange={() => false} 
                orientation={this.state.orientation} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-10 control-label">
              Reason for Absence:
        </label>
            <div className="col-xs-10">
              <p className="warning"> {this.state.error.textarea}</p>

              <textarea className={"col-xs-10 form-control " + this.state.error.textareaclass} value={this.state.reason} onChange={this.handleTextAreaChange} />

            </div>
          </div>


          <div className=" col-xs-10 clearfix">


            {confirmation}


          </div>
          <div className="col-xs-10 clearfix">
            <DeclarationComponent daysAbsent={() => this.state.daysAbsent} />
          </div>
          <div className="form-group clearfix">
            <div className="col-xs-10">
              <input type="submit" value="Report Absence" className="btn btn-warning btn-lg" />
            </div>
          </div>
        </div>

      </form>

    )
  }
}
export default AttendanceFormComponent; 
