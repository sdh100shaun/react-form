import React from 'react';
import ReactDOM from 'react-dom';

class AttendanceFormInputComponent extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {value:'',name:''};
    this.handler = this.handler.bind(this)
    
    this.state.name = props.name
    this.state.handler = props.handler
    
  }
  
  handler(e){
    this.state.handler(e)
  	this.setState({
      value: e.target.value
    });
    
  }
  
  render() {
    return <input type="text" value={this.state.value} name={this.state.name} onChange={(e)=>this.handler(e)}/>
  }
}
export default AttendanceFormInputComponent;