import { First } from './First';
import { render, screen } from '@testing-library/react';

describe('First tests', () => {
  it('renders correctly', () => {
    render(<First />);
      expect(true).toBeTruthy();

      const heading = screen.getByRole('heading');
      expect(heading).toBeInTheDocument();
  });
});
