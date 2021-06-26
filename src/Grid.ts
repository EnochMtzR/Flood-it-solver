import Cell from "./Cell";
import ICoordinates from "./ICoordinates";

export default class Grid {
    readonly value: Cell[][];
    private readonly size: number;

    constructor(gridValues: number[][]) {
        this.size = gridValues.length;
        this.value = createCellBasedGrid(gridValues);
    }

    getAdjacentCells(testCell: Cell) {
        const result = [] as Cell[];
        const adjacentCells = testCell.calculateAdjacentCells();

        adjacentCells.forEach(adjacentCell => {
            if (this.cellExists(adjacentCell)) {
                result.push(this.value[adjacentCell.row][adjacentCell.column]);
            }
        });

        return result;
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

    private cellExists({ row, column }: ICoordinates) {
        return row >= 0
            && row < this.size
            && column >= 0
            && column < this.size;
    }
}

function createCellBasedGrid(gridValues: number[][]): Cell[][] {
    return gridValues.map(
        (subArray, row) => subArray.map(
            (color, column) => new Cell(column, row, color)
        )
    );
}
