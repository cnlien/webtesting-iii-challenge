import React from 'react';
import 'jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

describe('<Controls />', () => {

    it('Gate is Opened and Unlocked', () => {
      const mock = jest.fn();
      const { queryByText } = render(
        <Controls 
            locked={false}
            closed={false}
            toggleClosed={mock}
        />);
      const lockGate = queryByText("Lock Gate");
      const closeButton = queryByText("Close Gate");

      expect(lockGate.disabled).toBe(true)
      expect(closeButton.disabled).toBe(false)
      fireEvent.click(closeButton);
      expect(mock).toBeCalled()
    })

    it('Gate is Closed and Unlocked', () => {
      const mock = jest.fn();
      const { queryByText } = render(
        <Controls
            locked={false}
            closed={true}
            toggleClosed={mock}
        />);
      const lockGate = queryByText("Lock Gate");
      const openButton = queryByText("Open Gate");

      expect(lockGate.disabled).toBe(false)
      expect(openButton.disabled).toBe(false)
      fireEvent.click(openButton);
      expect(mock).toBeCalled()
    })

    it('Gate is Closed and Locked', () => {
      const mock = jest.fn();
      const { queryByText } = render(
        <Controls 
            locked={true} 
            closed={true} 
            toggleLocked={mock}
        />);
      const unlockButton = queryByText("Unlock Gate");
      const openButton = queryByText("Open Gate");

      expect(unlockButton.disabled).toBe(false)
      expect(openButton.disabled).toBe(true)
      fireEvent.click(unlockButton);
      expect(mock).toBeCalled()
    })
  })