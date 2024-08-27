import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Presentational from './Presentational';

describe('<Presentational />', () => {
  test('it should mount', () => {
    render(<Presentational />);

    const Presentational = screen.getByTestId('Presentational');

    expect(Presentational).toBeInTheDocument();
  });
});