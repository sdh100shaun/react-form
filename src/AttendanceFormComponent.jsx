import React from 'react';
import ReactDOM from 'react-dom';
import AttendanceFormInputComponent from './AttendanceFormInputComponent.jsx';

class AttendanceFormComponent extends React.Component {
   constructor(props) {
    super(props);
    this.state = {value: props.value,item:props.item};
    this.properties={};
    this.handleChild = this.handleChild.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChild(e) {
     this.properties[e.target.name] = e.target.value;
     console.log(this.properties);
     this.state.value=e.target.value;
    
    
     
  }


  handleSubmit(event) {
    console.log(this.state);
    alert('A name was submitted: ' + this.state.value.trim());
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
           <AttendanceFormInputComponent value={this.state.value} name={this.state.item} handler={this.handleChild} />
        </label>
        <input type="submit" value="Submit" />
      {this.state.item}
      </form>
    );
  }
}
  
ReactDOM.render(<AttendanceFormComponent value="test31" item="user"/>,document.getElementById('app'));