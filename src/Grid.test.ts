import Cell from "./Cell";
import Grid from "./Grid";

describe("Testing Grid functionality", () => {
    test("new Grid() should populate grid correctly", () => {
        const gridValues = validGridValues();
        const expectedGrid = expectedCellBasedGrid();

        const grid = new Grid(gridValues)

        expect(grid.value).toEqual(expectedGrid);
    })

    test("toValueArray() should return correct valueGrid", () => {
        const gridValues = validGridValues();
        const grid = new Grid(gridValues);

        const valueArray = grid.toValueArray();

        expect(valueArray).toEqual(gridValues);
    })

    test("getOrigin() should return origin cell", () => {
        const gridValues = validGridValues();
        const expectedOrigin = new Cell(0, 0, 1);
        const grid = new Grid(gridValues);

        const origin = grid.getOrigin();

        expect(origin).toEqual(expectedOrigin);
    })

    test("getAdjacentCells() should return all adjacentCells", () => {
        const gridValues = validGridValues();
        const expectedCells = expectedCenterAdjacentCells();
        const grid = new Grid(gridValues);
        const testCell = grid.value[1][1];

        const adjacentCells = grid.getAdjacentCells(testCell);

        expect(adjacentCells).toEqual(expectedCells);
    })

    test("getAdjacentCells() should return only valid cells", () => {
        const gridValues = validGridValues();
        const expectedCells = expectedOriginAdjacentCells();
        const grid = new Grid(gridValues);
        const testCell = grid.value[0][0];

        const adjacentCells = grid.getAdjacentCells(testCell);

        expect(adjacentCells).toEqual(expectedCells);
    })

})

function validGridValues() {
    return [
        [1, 2, 0],
        [0, 1, 2],
        [2, 1, 2]
    ];
}

function expectedCellBasedGrid() {
    return [
        [new Cell(0, 0, 1), new Cell(1, 0, 2), new Cell(2, 0, 0)],
        [new Cell(0, 1, 0), new Cell(1, 1, 1), new Cell(2, 1, 2)],
        [new Cell(0, 2, 2), new Cell(1, 2, 1), new Cell(2, 2, 2)]
    ];
}

function expectedCenterAdjacentCells() {
    return [
        new Cell(1, 0, 2),
        new Cell(2, 1, 2),
        new Cell(1, 2, 1),
        new Cell(0, 1, 0)
    ];
}

function expectedOriginAdjacentCells() {
    return [
        new Cell(1, 0, 2),
        new Cell(0, 1, 0)
    ];
}

