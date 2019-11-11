// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Display from './Display';


test("it renders correctly ", ()=>{
    expect(render(<Display />)).toMatchSnapshot();
});

describe("Displays correct data depending on props", ()=> {
    it("displays closed if closed", ()=> {
        const {getByText} = render(<Display closed/>);
        getByText(/Closed/i)
    });

    it("displays open if open", ()=> {
        const {getByText} = render(<Display />);
        getByText(/Open/i)
    })
});