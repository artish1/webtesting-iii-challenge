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
   it("displays unlocked if unlocked", ()=> {
    const {getByText} = render(<Display />);
    getByText(/Unlocked/i);
   }) 

   it("displays locked if locked", ()=> {
    const {getByText} = render(<Display locked/>);
    getByText(/Locked/);
   })
});

describe("Uses correct led classes depending on props", () => {
    //Red led's
    it("Used red-led class if closed", () => {
        const {getByText, getByTestId} = render(<Display closed/>);
        expect(getByTestId("close-display").classList.contains("red-led")).toBe(true);
    });
    it("Used red-led class if locked", () => {
        const {getByText, getByTestId} = render(<Display locked/>);
        expect(getByTestId("lock-display").classList.contains("red-led")).toBe(true);
    });

    //Green led's
    it("Used green-led class if open", () => {
        const {getByText, getByTestId} = render(<Display />);
        expect(getByTestId("close-display").classList.contains("green-led")).toBe(true);
    });
    it("Used green-led class if unlocked", () => {
        const {getByText, getByTestId} = render(<Display />);
        expect(getByTestId("lock-display").classList.contains("green-led")).toBe(true);
    });
});