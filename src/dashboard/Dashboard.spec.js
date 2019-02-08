// Test away
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('The dashboard component', () => {
  afterEach(cleanup);

  it('renders the dashboard', () => {
    render(<Dashboard />);
  });

  it('the close button changes display text to closed', () => {
    const { getByText } = render(<Dashboard />);
    const button = getByText('Close Gate');

    fireEvent.click(button);

    const ledText = getByText('Closed');
    expect(ledText).toBeDefined();
  });

  test('the lock button is disabled when the gate is open', () => {
    const { getByText } = render(<Dashboard />);
    const lockButton = getByText('Lock Gate');

    fireEvent.click(lockButton);

    const ledText = getByText('Unlocked');
    expect(ledText).toBeDefined();
  });

  test('gate can be locked after closing', () => {
    const { getByText } = render(<Dashboard />);
    const closeButton = getByText('Close Gate');
    const lockButton = getByText('Lock Gate');

    fireEvent.click(closeButton);
    fireEvent.click(lockButton);

    const ledText = getByText('Locked');
    expect(ledText).toBeDefined();
  });

  test('gate can not be opened after locking', () => {
    const { getByText } = render(<Dashboard />);
    const closeButton = getByText('Close Gate');
    const lockButton = getByText('Lock Gate');

    fireEvent.click(closeButton);
    fireEvent.click(lockButton);
    fireEvent.click(closeButton);

    const ledText = getByText('Closed');
    expect(ledText).toBeDefined();
  });

});