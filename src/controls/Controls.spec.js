// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

describe('Controls functions', () => {

  it('executes the function when lock is clicked', () => {
    const mockFun = jest.fn();
    const { getByText } = render(<Controls toggleLocked={mockFun} closed={true} locked={false}/>);
    const button = getByText(/lock gate/i);

    fireEvent.click(button);

    expect(mockFun).toHaveBeenCalledTimes(1);
  });


  it('executes the function when close is clicked', () => {
    const mockFun = jest.fn();
    const { getByText } = render(<Controls toggleClosed={mockFun} closed={false}/>);
    const button = getByText(/close gate/i);

    fireEvent.click(button);

    expect(mockFun).toHaveBeenCalledTimes(1);
  });

  
  it('disables the locked button if the gate is open', () => {
    const mockFun = jest.fn();
    const { getByText } = render(<Controls toggleLocked={mockFun} closed={false} />);
    const button = getByText(/lock gate/i);

    expect(button).toBeDisabled();

    fireEvent.click(button);

    expect(mockFun).toHaveBeenCalledTimes(0);
  });
});