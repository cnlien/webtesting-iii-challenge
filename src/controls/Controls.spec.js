import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import {cleanup, render} from '@testing-library/react';

import Controls from './Controls';

afterEach(cleanup);

describe ('should match snapshot', () => {
    it('defaults to unlocked and open gate', () => {
        const controls = rtl.render(<Controls />);
        expect(controls.baseElement).toMatchSnapshot();
    });
});

describe ('Open Gate is Disabled', () => {
    it('Gate is Locked. Open Button is Disabled', () => {
        const mock = jest.fn();
        const { queryByText } = render (
            <Controls locked={true} closed={true} toggleLocked={mock} />
        );
        const openButton = queryByText("Open Gate");
        expect (openButton.disabled).toBe(true)
    })
})