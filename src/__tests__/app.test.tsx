import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the heading and RasterContainer', () => {
  render(<App />);
  
  // Check for the heading text
  const headingElement = screen.getByText(/Raster Interaction/i);
  expect(headingElement).toBeInTheDocument();

  // Check for the presence of RasterContainer by its className or other method
  const containerElement = screen.getByRole('heading', { name: /Raster Interaction/i });
  expect(containerElement).toBeInTheDocument();
});