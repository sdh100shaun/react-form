import React from 'react';
import ReactDOM from 'react-dom';
import AttendanceFormInputComponent from './AttendanceFormInputComponent.jsx';

class AttendanceFormComponent extends React.Component {
   constructor(props) {
    super(props);
    this.state = {value: props.value,item:props.item,formItems:{}};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChild = this.handleChild.bind(this);
  }

  handleChild(e) {
     this.state.formItems[e.target.name] = e.target.value;
     console.log(this.state.formItems);
    

  }


  handleSubmit(event) {
    console.log(this.state);
    alert('A name was submitted: ' + JSON.stringify(this.state.formItems));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
           <AttendanceFormInputComponent value='username' name='username' handler={this.handleChild} />
        </label>
        <label>
          Another name:
           <AttendanceFormInputComponent value='realname' name='realname' handler={this.handleChild} />
        </label>
        <input type="submit" value="Submit" />
      
      </form>
    );
  }
}
  
ReactDOM.render(<AttendanceFormComponent  />,document.getElementById('app'));