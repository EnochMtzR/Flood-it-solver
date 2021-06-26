import Cell from "./Cell";

export default class Grid {
    readonly value: Cell[][];

    constructor(gridValues: number[][]) {
        this.value = gridValues.map(
            (subArray, row) => subArray.map(
                (color, column) => new Cell(column, row, color)
            )
        )
    }

    getOrigin() {
        return this.value[0][0];
    }

    toValueArray() {
        return this.value.map(
            subArray => subArray.map(
                cell => cell.color
            )
        );
    }
}