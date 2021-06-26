import Grid from "./Grid";
import IPuzzleParams from "./IPuzzleParams";

export default class Puzzle {
    readonly grid: Grid;

    constructor(params: IPuzzleParams) {
        validateParams(params);
        const gridValues = params.grid
            ? params.grid
            : createValueGrid(params.size!, params.colorRange)

        this.grid = new Grid(gridValues);
    }
}

function validateParams(params: IPuzzleParams) {
    if (!params.grid && !params.size) {
        throw new Error("Invalid Params! Either an initial grid or a size must be provided.");
    }
}

function createValueGrid(size: number, colorRange: number) {
    const result = [] as number[][];

    for (let row = 0; row < size; row++) {
        result[row] = [];
        for (let col = 0; col < size; col++) {
            result[row][col] = Math.floor(Math.random() * colorRange);
        }
    }

    return result;
}

