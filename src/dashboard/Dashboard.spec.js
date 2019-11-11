import React from 'react';
import {render, getByTestId} from "@testing-library/react";

import Dashboard from "../dashboard/Dashboard";
// Test away

test("renders dashboard according to snapshot", ()=> {
    expect(render(<Dashboard />)).toMatchSnapshot();
});



