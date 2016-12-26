import React from 'react';
import ReactDOM from 'react-dom';
import { DateRangePicker } from 'react-dates';
import AttendanceFormInputComponent from './AttendanceFormInputComponent.jsx';
import 'react-dates/lib/css/_datepicker.css';

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

        <label>
          Name:
           <AttendanceFormInputComponent value='' placeholder='e.g uczse' name='username' handler={this.handleInput} />
        </label>
        <label>
          Another name:
           <AttendanceFormInputComponent value='' name='realname' handler={this.handleInput} />
        </label>
        <br />
        <DateRangePicker onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate} />
        <br />
        <input type="submit" value="Submit" />
      
      </form>
    );
  }
}
ReactDOM.render(<AttendanceFormComponent  />,document.getElementById('app'));