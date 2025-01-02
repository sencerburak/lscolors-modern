import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LSColorsGenerator from '../components/LSColorsGenerator';

describe('LSColorsGenerator', () => {
  it('renders without crashing', () => {
    render(<LSColorsGenerator />);
    expect(screen.getByText(/LSCOLORS Generator/i)).toBeInTheDocument();
  });
});