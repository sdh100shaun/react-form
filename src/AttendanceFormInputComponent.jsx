import React from 'react';
import ReactDOM from 'react-dom';

class AttendanceFormInputComponent extends React.Component{
  
  constructor(props){
    super(props);
    this.state=props;
    
  }
  
  
  
  render() {
    return <input type="text" value={this.state.value} name={this.state.name} onChange={this.state.handler}/>
  }
}
export default AttendanceFormInputComponent;