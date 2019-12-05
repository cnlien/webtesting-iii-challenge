import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

describe ('should match snapshot', () => {
    it('defaults to unlocked and open gate', () => {
        const controls = rtl.render(<Controls />);
        expect(controls.baseElement).toMatchSnapshot();
    });
});

describe ('Open Gate is Disabled', () => {
    it('Gate is Locked. Open Button is Disabled', () => {
        const { getByText } = render (
            <Controls locked={true} closed={true} />
        );
        const openButton = getByText("Open Gate");
        expect (openButton.disabled).toBe(true)
    })
});

describe('<Controls/>', () => {
    it('Unlocked and Open', () => {
        const { getByText } = render(
            <Controls locked={false} closed={false} />
        );
        const closeGateBtn = getByText('Close Gate')
        expect(closeGateBtn.disabled).toBe(false)

    })
})