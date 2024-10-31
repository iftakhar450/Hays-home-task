import { render, screen, fireEvent } from '@testing-library/react';
import { SideNav } from '../../components/RasterImage/SideNav';
import { vi } from 'vitest';

describe('SideNav', () => {
    const mockOnCheckedChange = vi.fn();
    const mockOnHoverChange = vi.fn();

    const defaultProps = {
        size: 6,
        grids: { 0: true, 1: false, 2: true, 3: false, 4: true, 5: false },
        onCheckedChange: mockOnCheckedChange,
        onHoverChange: mockOnHoverChange,
    };

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('renders the correct number of checkboxes', () => {
        render(<SideNav {...defaultProps} />);
        // Check if the number of checkboxes matches the 'size' prop
        const checkboxes = screen.getAllByRole('checkbox');
        expect(checkboxes).toHaveLength(defaultProps.size);
    });

    test('calls onCheckedChange with the correct index when a checkbox is clicked', () => {
        render(<SideNav {...defaultProps} />);

        // Find the first unchecked checkbox and click it
        const firstUncheckedCheckbox = screen.getByLabelText('Cell 2');
        fireEvent.click(firstUncheckedCheckbox);
        // Expect `onCheckedChange` to be called with the correct index
        expect(mockOnCheckedChange).toHaveBeenCalledWith(1);
    });

    test('calls onHoverChange with the correct index on mouse enter and null on mouse leave', () => {
        render(<SideNav {...defaultProps} />);

        // Simulate mouse enter and leave on a specific cell
        const cellLabel = screen.getByText('Cell 3');
        fireEvent.mouseEnter(cellLabel);
        expect(mockOnHoverChange).toHaveBeenCalledWith(2);

        fireEvent.mouseLeave(cellLabel);
        expect(mockOnHoverChange).toHaveBeenCalledWith(null);
    });

    test('checkboxes reflect the correct checked state from grids prop', () => {
        render(<SideNav {...defaultProps} />);
        // Check that the checkboxes match the `grids` prop state
        Object.values(defaultProps.grids).forEach((isChecked, index) => {
            const checkbox = screen.getByLabelText(`Cell ${index + 1}`) as HTMLInputElement;
            expect(checkbox.checked).toBe(isChecked);
        });
    });
});