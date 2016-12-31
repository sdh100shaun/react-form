import React from 'react';
import ReactTestUtils from 'react-addons-test-utils' // ES6
import AttendanceFormInputComponent from '../src/components/AttendanceFormInputComponent.jsx';

import { expect } from 'chai';


describe('AttendanceFormInputComponent', () => {
	it('should render a input of type AttendanceFormInputComponent', () => {
		
		let handlerFunction = function(){};
		const component = ReactTestUtils.renderIntoDocument( <AttendanceFormInputComponent value='' placeholder='e.g uczse' name='username' handler={handlerFunction} />
       );
		const AttendanceFormInputComponentEle = ReactTestUtils.findRenderedComponentWithType(component, AttendanceFormInputComponent);

		expect(AttendanceFormInputComponent).to.be.ok;
	});

	it('should have a class of input-md',()=>{
		let handlerFunction = function(){};
		const component = ReactTestUtils.renderIntoDocument( <AttendanceFormInputComponent value='' placeholder='e.g uczse' name='username' handler={handlerFunction} />
       );
		const AttendanceFormInputComponentEle = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'input-md');

	});
});