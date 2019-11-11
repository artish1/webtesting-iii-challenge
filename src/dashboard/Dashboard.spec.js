import React from 'react';
import {render, getByTestId} from "@testing-library/react";

import Dashboard from "../dashboard/Dashboard";
// Test away

test("renders dashboard according to snapshot", ()=> {
    expect(render(<Dashboard />)).toMatchSnapshot();
});

describe("Defaults to unlocked/open state", () => {

    it("defaults to unlocked gate", ()=> {
        const {getByText} = render(<Dashboard />);
        getByText(/Unlocked/);
    });

    it("defaults to open gate", ()=> {
        const {getByText} = render(<Dashboard />);
        getByText(/Open/);
    })
    
});

