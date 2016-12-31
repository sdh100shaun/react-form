import React from 'react';
import ReactDOM from 'react-dom';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import AttendanceFormInputComponent from './AttendanceFormInputComponent.jsx';
var css = require("../styles/style.sass");



class AttendanceFormComponent extends React.Component {
   constructor(props) {
    super(props);
    this.state = {value: props.value,item:props.item,formItems:{}, focusedInput: null,
      startDate: null,
      endDate: null,
      excludedDays: 0,
      excludeWeekends: props.excludeWeekends()};
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
    console.log(this.state.excludeWeekends)
    if(this.state.excludeWeekends)
    {
      var iDate = moment(startDate);
      this.state.excludedDays = 0
      while(iDate <= endDate)
      {

      
        if(iDate.get('day') == 6 || iDate.get('day') == 0 )
        {
          this.state.excludedDays +=1
         
        }
        iDate.add(1, 'd')
        
      }
    }
    
    console.log(this.state.excludedDays)

  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });

  }
    
  

  handleInput(e) {
     this.state.formItems[e.target.name] = e.target.value;
     
    

  }
  handleTextAreaChange(){


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
<form onSubmit={this.handleSubmit} className="form-vertical">
  <div className="row">
    <div className='form-group'>
      <label className="col-xs-10  control-label">
        Name:
      </label>
      <div className="col-xs-10">
        <AttendanceFormInputComponent value='' placeholder='e.g uczse' name='username' handler={this.handleInput} />
        </div>
      </div>
      <div className='form-group'>
        <label className="col-xs-10  control-label" htmlFor="cohort" >
          Cohort:
        </label>
        <div className="col-xs-10">
          <AttendanceFormInputComponent value={this.state.userCohort} name='cohort' handler={this.handleInput} />
            
          </div>
        </div>
      </div><div className="row">
      <div className='form-group'>
        <label className="col-md-10 control-label">
          Period of absence:
        </label>
        <div className="col-xs-10">
          <DateRangePicker onDatesChange={this.onDatesChange}
          displayFormat='D/MM/Y'
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate} 
          isOutsideRange={()=>false} />
        </div>
      </div>
      <div className='form-group'>
        <label className="col-xs-10 control-label">
          Reason for Absence:
        </label>
        <div className="col-xs-10">
          <textarea className='col-xs-10 form-control' value={this.state.reason} onChange={this.handleTextAreaChange} />
        </div>
      </div>
      <div className='form-group clearfix'>
        <div className="col-xs-10">
          <input type="submit" value="Report Absence" className="btn btn-warning btn-lg" />
        </div>
      </div>
    </div>
  </form> 
    );
  }
}
ReactDOM.render(<AttendanceFormComponent excludeWeekends={()=>false} />,document.getElementById('app'));