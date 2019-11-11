import React from 'react';
import {render} from "@testing-library/react";
// Test away!
import Controls from "./Controls"


test("renders controls component", ()=> {
    expect(render(<Controls />)).toMatchSnapshot();
});

describe("Displays buttons for closed and locked states", ()=> {
    it("displays lock button if unlocked", ()=> {
        const {getByText} = render(<Controls />);
        getByText(/Lock Gate/);
    });
    it("displays unlock button if locked", ()=> {
        const {getByText} = render(<Controls locked/>);
        getByText(/Unlock Gate/);
    });
    it("displays close button if opened", ()=> {
        const {getByText} = render(<Controls/>);
        getByText(/Close Gate/);
    });

    it("displays open button if closed", ()=> {
        const {getByText} = render(<Controls closed/>);
        getByText(/Open Gate/);
    });
})

describe("disables buttons depending on closed/locks states", ()=> {
    it("disables close toggle button if gate is locked", ()=> {
        const {getByTestId} = render(<Controls locked/>);
        expect(getByTestId("toggle-close-button").disabled).toBe(true);
    });
    it("disables lock toggle button if gate is open", ()=> {
        const {getByTestId} = render(<Controls />);
        expect(getByTestId("toggle-lock-button").disabled).toBe(true);
    });
})