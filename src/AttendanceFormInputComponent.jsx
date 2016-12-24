import React from 'react';
import ReactDOM from 'react-dom';

class AttendanceFormInputComponent extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {value:props.value,name:props.name,placeholder:props.placeholder};
    this.handler = this.handler.bind(this)
    this.state.handler = props.handler
    
  }
  
  handler(e){
    this.state.handler(e)
  	this.setState({
      value: e.target.value
    });

  }
  
  render() {
    return <input type="text" placeholder={this.state.placeholder} value={this.state.value} name={this.state.name} onChange={(e)=>this.handler(e)}/>
  }
}
export default AttendanceFormInputComponent;