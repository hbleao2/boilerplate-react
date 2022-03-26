import React from 'react';
import { render } from '@testing-library/react';

import { Button } from '.';
import './style.module.scss';

describe('Button', () => {
  it('should be able to renders correctly', () => {
    render(<Button />);
  });
});
