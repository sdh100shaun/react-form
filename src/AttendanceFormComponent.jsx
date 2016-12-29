import React from 'react';
import ReactDOM from 'react-dom';
import { DateRangePicker } from 'react-dates';
import AttendanceFormInputComponent from './AttendanceFormInputComponent.jsx';
var css = require("./style.sass");



class AttendanceFormComponent extends React.Component {
   constructor(props) {
    super(props);
    this.state = {value: props.value,item:props.item,formItems:{}, focusedInput: null,
      startDate: null,
      endDate: null,};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
    this.state.formItems['startDate'] = startDate;
    this.state.formItems['endDate'] = endDate;

  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }
    
  

  handleInput(e) {
     this.state.formItems[e.target.name] = e.target.value;
     console.log(this.state.formItems);
    

  }

  handleDateChange(){

  }


  handleSubmit(event) {
    console.log(this.state);
    alert('A name was submitted: ' + JSON.stringify(this.state.formItems));
    event.preventDefault();
  }

  render() {
       const { focusedInput, startDate, endDate } = this.state;
    return (
<form onSubmit={this.handleSubmit}>
  <div className="row">
    <div className='form-group'>
      <label className="col-md-4 col-lg-4 col-sm-12  control-label">
        Name:
        <AttendanceFormInputComponent value='' placeholder='e.g uczse' name='username' handler={this.handleInput} />
        </label>
      </div>
      <div className='form-group'>
        <label className="col-md-4 col-lg-4 col-sm-12  control-label" htmlFor="cohort" >
          Cohort:
          <AttendanceFormInputComponent value={this.state.userCohort} name='cohort' handler={this.handleInput} />
          </label>
        </div>
      </div><div className="row">
      <div className='form-group'>
        <label className="col-md-4 col-lg-4 col-sm-12  control-label">
          Period of absence:
        </label>
        <DateRangePicker onDatesChange={this.onDatesChange}
        displayFormat='D/MM/Y'
        onFocusChange={this.onFocusChange}
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate} />
      </div>
      <div className='form-group'>
        <label className="col-md-4 col-lg-4 col-sm-12 control-label">
          Reason for Absence:
        </label>
        <textarea className='col-md-offset-1 col-md-6 form-control' value={this.state.reason} onChange={this.handleChange} />
      </div>
      <div className='form-group'>
        <input type="submit" value="Submit" className="btn btn-success btn-lg" />
      </div>
    </div>
  </form>
    );
  }
}
ReactDOM.render(<AttendanceFormComponent  />,document.getElementById('app'));