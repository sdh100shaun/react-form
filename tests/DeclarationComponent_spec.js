import React from "react"
import ReactDOM from "react-dom"
import ReactTestUtils from "react-addons-test-utils" // ES6
import DeclarationComponent from "../src/components/DeclarationComponent.jsx"

import { expect } from "chai"

describe("DeclarationComponent", () => {

    it("Should have rendered", () =>{
        let handlerFunction = function(){}
        const daysAbsent = 7
        const component = ReactTestUtils.renderIntoDocument( <DeclarationComponent daysAbsent={() => daysAbsent} />)
        
        const DeclarationComponentEle = ReactTestUtils.findRenderedComponentWithType(component, DeclarationComponent)

        expect(DeclarationComponent).to.be.ok
       
    })

    

});