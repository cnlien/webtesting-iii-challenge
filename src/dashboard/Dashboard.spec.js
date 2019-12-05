import React from "react";
import * as rtl from "@testing-library/react";

import Dashboard from './Dashboard';

describe ('Should Match Snapshot', () => {
    it('Renders the Dashboard', () => {
        const dashboard = rtl.render(<Dashboard />);
        expect(dashboard.baseElement).toMatchSnapshot();
    });
});