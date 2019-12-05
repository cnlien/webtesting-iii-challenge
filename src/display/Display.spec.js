import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Display from './Display';

describe ('<Display />', () => {
    
    it ('Shows (unlocked, open)',()=>{
        const { getByText } = render(<Display/>);
        expect(getByText('Unlocked'));
        expect(getByText('Open'));
    })

    it('Uses props to change state', () => {
        const { getByText } = render(
            <Display locked={true} closed={true} />
        );
        expect(getByText('Locked'));
        expect(getByText('Closed'));
    })
})