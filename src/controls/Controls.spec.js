import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';
afterEach(rtl.cleanup);

describe ('should match snapshot', () => {
    it('defaults to unlocked and open gate', () => {
        const controls = rtl.render(<Controls />);
        expect(controls.baseElement).toMatchSnapshot();
    });
});