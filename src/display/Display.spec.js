// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

describe('Display component', () => {
  it('should show Unlocked when unlocked', () => {
    const { getByText } = render(<Display locked={false}/>);
    const output = getByText(/unlocked/i);

    expect(output).toBeDefined();
  });

  it('show Locked when locked', () => {
    const { getByText } = render(<Display locked={true} />);
    const output = getByText(/locked/i);

    expect(output).toBeDefined();
  });

  it('should show closed when closed', () => {
    const { getByText } = render(<Display closed={true} />);
    const output = getByText(/closed/i);

    expect(output).toBeDefined();
  });

  it('should show open when opened', () => {
    const { getByText } = render(<Display closed={false} />);
    const output = getByText(/open/i);

    expect(output).toBeDefined();
  });
});
