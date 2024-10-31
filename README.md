
# Raster Grid Application

A React and TypeScript application with a static image and an interactive raster grid overlay. The application provides a fixed set of cells that users can interact with by hovering and clicking to control visibility.

## Features

- **Static Image Display**: Displays a predefined static image as a background.
- **Fixed Raster Definition**: Defines a grid with six cells labeled "Cell 1" to "Cell 6".
- **List View for Cells**: Shows cell names in a vertical list on the left, with checkbox for visibility control.
- **Interactivity**:
  - **Hover Functionality**: Hovering over a cell name highlights the corresponding cell on the image by changing its border color.
  - **Click Functionality**: Clicking on a cell name toggles the cell’s visibility on the image.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iftakhar450/Hays-home-task.git
   cd Hays-home-task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To start the application:

```bash
npm start
```

The app will be accessible at `http://localhost:PORT`.

## Testing

To run tests, including unit tests for interactive components:

```bash
npm test
```

## Project Structure

- **`src/components/RasterContainer.tsx`**: Renders Container for the images grid and side nav.
- **`src/components/RasterGrid.tsx`**: Defines the interactive grid cells.
- **`src/components/SideNav.tsx`**: Lists cells and includes checkbox for visibility control.
- **`src/__tests__`**: Contains test files for each component.

