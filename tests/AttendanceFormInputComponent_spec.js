import React from "react"
import ReactDOM from "react-dom"
import ReactTestUtils from "react-addons-test-utils" // ES6
import AttendanceFormInputComponent from "../src/components/AttendanceFormInputComponent.jsx"

import { expect } from "chai"


describe("AttendanceFormInputComponent", () => {
    it("should render a input of type AttendanceFormInputComponent", () => {
		
        let handlerFunction = function(){}
        const component = ReactTestUtils.renderIntoDocument( <AttendanceFormInputComponent value='' placeholder='e.g uczse' name='username' handler={handlerFunction} />
       )
        const AttendanceFormInputComponentEle = ReactTestUtils.findRenderedComponentWithType(component, AttendanceFormInputComponent)

        expect(AttendanceFormInputComponent).to.be.ok
    })

    it("should have a class of input-md",()=>{
        let handlerFunction = function(){}
        const component = ReactTestUtils.renderIntoDocument( <AttendanceFormInputComponent value='' placeholder='e.g uczse' name='username' handler={handlerFunction} />
       )
        const AttendanceFormInputComponentEle = ReactTestUtils.findRenderedDOMComponentWithClass(component, "input-md")

    })
    it("should update value of state on change",()=>{

        let handlerFunction = function(){}
        const component = ReactTestUtils.renderIntoDocument( <AttendanceFormInputComponent value='' placeholder='e.g uczse' name='username' handler={handlerFunction} />
       )
       
       const renderedDOM = ReactDOM.findDOMNode(component)
        

       const AttendanceFormInputComponentEle = ReactTestUtils.findRenderedDOMComponentWithClass(component, "input-md")
       
       ReactTestUtils.Simulate.change(AttendanceFormInputComponentEle,{target: { value: 'test' }})

       expect(component.state.value).to.equal("test")
    })
})