import { render, screen } from '@testing-library/react';
import { RasterGrid } from '../../components/RasterImage/RasterGrid';

describe('RasterGrid', () => {
    const defaultProps = {
        size: 6,
        grids: { 0: true, 1: false, 2: true, 3: false, 4: true, 5: false },
        currentHover: 1,
    };

    test('renders the correct number of grid cells', () => {
        render(<RasterGrid {...defaultProps} />);
        // Expect the number of cells to match the 'size' prop
        const cells = screen.getAllByText(/Cell/i);
        expect(cells).toHaveLength(defaultProps.size);
    });
    test('displays correct "selected" styling for each cell based on grids prop', () => {
        render(<RasterGrid {...defaultProps} />);
        Object.values(defaultProps.grids).forEach((isSelected, index) => {
            const cell = screen.getByText(`Cell ${index + 1}`);
            if (isSelected) {
                expect(cell.closest('div')).toHaveClass('bg-white/50 h-full w-full rounded-lg flex items-center justify-center');

            } else {
                expect(cell.closest('div')).toHaveClass('bg-white h-full w-full rounded-lg flex items-center justify-center');
            }
        });
    });
    test('applies hover styling to the correct cell', () => {
        const hoveredProps = { ...defaultProps, currentHover: 2 };
        render(<RasterGrid {...hoveredProps} />);
        const hoveredCell = screen.getByTestId('grid-2');
        expect(hoveredCell).toHaveClass('border-blue-500');
    });
    test('applies default border styling to non-hovered cells', () => {
        render(<RasterGrid {...defaultProps} />);
        // Verify that all cells except the hovered one have the default 'border-black' class
        Object.keys(defaultProps.grids).forEach((_, index) => {
            const cell = screen.getByTestId(`grid-${index}`);
            if (index !== defaultProps.currentHover) {
                expect(cell).toHaveClass('border-black');
            }
        });
    });

});