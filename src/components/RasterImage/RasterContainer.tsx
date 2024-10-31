import { useState } from "react"
import { RasterGrid } from "./RasterGrid"
import { SideNav } from "./SideNav"
import { createDefaultGrid } from "../../utils";

export interface IGridRaster {
    [status: number]: boolean;
}
export const RasterContainer = () => {
    const gridSize = 6;
    const [grids, setGrids] = useState<IGridRaster>(() => createDefaultGrid(gridSize));
    const [currentHover, setCurrentHover] = useState<number | null>(null)
    return (
        <div className='flex w-full mt-10'>
            <div className='w-1/3 flex items-center justify-center'>
                <SideNav size={gridSize} grids={grids}
                    onHoverChange={(id: number | null) => setCurrentHover(id)}
                    onCheckedChange={(id: number) => setGrids((prevGrid) => ({
                        ...prevGrid,
                        [id]: !prevGrid[id], // Toggle the boolean value of the clicked item
                    }))} />
            </div>
            <div className='flex-1'>
                <RasterGrid size={gridSize} grids={grids} currentHover={currentHover} />
            </div>
        </div>
    )
}
