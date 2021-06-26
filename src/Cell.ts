export default class Cell {
    color: number;
    readonly column: number;
    readonly row: number;

    constructor(column: number, row: number, color: number) {
        this.column = column;
        this.row = row;
        this.color = color;
    }
}