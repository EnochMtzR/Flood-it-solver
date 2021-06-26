import Cell from "./Cell";

export default interface IFloodingState {
    originalColor: number;
    floodingColor: number;
    currentCell: Cell;
    visitedCells: Map<string, Cell>;
};
