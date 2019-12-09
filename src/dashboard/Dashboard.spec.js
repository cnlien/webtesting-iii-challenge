import React from "react";
import * as rtl from "@testing-library/react";
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe ('Should Match Snapshot', () => {
    it('Renders the Default Gate Unlocked and Open', () => {
        const dashboard = rtl.render(<Dashboard />);
        expect(dashboard.baseElement).toMatchSnapshot();
    });
});