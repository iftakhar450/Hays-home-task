import { IGridRaster } from "../components";

export const createDefaultGrid = (size: number): IGridRaster =>
    Object.fromEntries(Array.from({ length: size }, (_, i) => [i, true])) as IGridRaster;
