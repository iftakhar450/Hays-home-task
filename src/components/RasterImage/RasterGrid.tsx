import imgURL from './../../assets/raster.jpeg'
import { IGridRaster } from './RasterContainer';
type RasterGridProps = {
  size?: number;
  grids: IGridRaster
  currentHover: number | null
}
export const RasterGrid = ({ size = 6, grids, currentHover }: RasterGridProps) => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {
        Array.from({ length: size }).map((_, index) => {
          const isSelected = grids[index]
          return (
            < div
              data-testid={`grid-${index}`}
              className={`size-44 bg-cover bg-center flex items-center justify-center border-2 ${index === currentHover ? 'border-blue-500 border-4' : 'border-black'}`}
              style={{ backgroundImage: `url(${imgURL})` }
              }
              key={`grid-${index}`}
            >
              <div className={`${isSelected ? 'bg-white/50' : 'bg-white'} h-full w-full rounded-lg flex items-center justify-center`}>
                Cell {index + 1}
              </div>
            </div>

          )
        }
        )}
    </div >

  )
};
