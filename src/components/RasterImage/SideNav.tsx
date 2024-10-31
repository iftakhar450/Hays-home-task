import { IGridRaster } from "./RasterContainer";

type SideNavProps = {
  size?: number;
  onCheckedChange: (id: number) => void;
  grids: IGridRaster
  onHoverChange: (id: number | null) => void
}
export const SideNav = ({ size = 6, onCheckedChange, grids, onHoverChange }: SideNavProps) => {
  return (
    <div className="space-y-4">
      {
        Array.from({ length: size }).map((_, index) =>
          <label className="flex items-center space-x-3" key={`side-nav-${index}`}
            onMouseEnter={() => onHoverChange(index)}
            onMouseLeave={() => onHoverChange(null)}
          >
            <input type="checkbox" checked={grids[index]} onChange={() => onCheckedChange(index)}
              className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500" />
            <span className="text-gray-700 font-medium checked">Cell {index + 1}</span>
          </label>
        )
      }
    </div>
  )
}
