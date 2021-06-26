import Cell from "./Cell";
import Grid from "./Grid";
import IFloodingState from "./IFloodingState";
import IPuzzleParams from "./IPuzzleParams";

export default class Puzzle {
    readonly grid: Grid;
    readonly colorRange: number

    constructor(params: IPuzzleParams) {
        validateParams(params);
        const gridValues = params.grid
            ? params.grid
            : createValueGrid(params.size!, params.colorRange)

        this.grid = new Grid(gridValues);
        this.colorRange = params.colorRange;
    }

    flood(floodingColor: number) {
        const origin = this.grid.getOrigin();
        const currentState = initializeCurrentState(floodingColor, origin);
        const cluster = [] as Cell[];
        let finalClusterSize = 1;

        cluster.push(origin);

        while (cluster.length) {
            currentState.currentCell = cluster.pop()!;
            const adjacentCells = this.grid.getAdjacentCells(currentState.currentCell);

            setCurrentCellAsVisited(currentState);
            finalClusterSize = addAdjacentCellsToCluster(adjacentCells, currentState, cluster, finalClusterSize);

            currentState.currentCell.color = floodingColor;
        }

        return finalClusterSize;
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

function initializeCurrentState(floodingColor: number, origin: Cell) {
    return {
        floodingColor,
        originalColor: origin.color,
        visitedCells: new Map<string, Cell>()
    } as IFloodingState;
}

function setCurrentCellAsVisited({ currentCell, visitedCells }: IFloodingState) {
    visitedCells.set(currentCell.toString(), currentCell);
}

function addAdjacentCellsToCluster(adjacentCells: Cell[], currentState: IFloodingState, cluster: Cell[], finalClusterSize: number): number {
    adjacentCells.forEach(adjacentCell => {
        if (isAdjacentCellInCluster(adjacentCell, currentState)
            && !wasAdjacentCellVisited(adjacentCell, currentState)) {
            cluster.push(adjacentCell);
            finalClusterSize++;
        }
    })
    return finalClusterSize;
}

function isAdjacentCellInCluster(
    adjacentCell: Cell,
    {
        originalColor,
        floodingColor,
        currentCell
    }: IFloodingState) {
    return (currentCell.color === originalColor && adjacentCell.color === originalColor)
        || adjacentCell.color === floodingColor;
}

function wasAdjacentCellVisited(adjacentCell: Cell, { visitedCells }: IFloodingState) {
    return visitedCells.get(adjacentCell.toString());
}

