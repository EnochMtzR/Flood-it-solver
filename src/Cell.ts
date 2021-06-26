import ICoordinates from "./ICoordinates";

export default class Cell {
    color: number;
    readonly column: number;
    readonly row: number;

    constructor(column: number, row: number, color: number) {
        this.column = column;
        this.row = row;
        this.color = color;
    }

    calculateAdjacentCells(): ICoordinates[] {
        return [
            this.topCell(),
            this.rightCell(),
            this.bottomCell(),
            this.leftCell()
        ]
    }

    toString() {
        return `${this.column},${this.row}`;
    }

    private topCell(): ICoordinates {
        return {
            column: this.column,
            row: this.row - 1
        }
    }

    private rightCell(): ICoordinates {
        return {
            column: this.column + 1,
            row: this.row
        }
    }

    private bottomCell(): ICoordinates {
        return {
            column: this.column,
            row: this.row + 1
        }
    }

    private leftCell(): ICoordinates {
        return {
            column: this.column - 1,
            row: this.row
        }
    }
}