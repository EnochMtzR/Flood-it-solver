import Cell from "./Cell"

describe("Testing Cell functionality", () => {
    test("new Cell() should initialize cell correctly", () => {
        let cell = new Cell(2, 3, 0);

        expect(cell.column).toBe(2);
        expect(cell.row).toBe(3);
        expect(cell.color).toBe(0);
    })

    test("adjacentCells() should return all possible adjacent cells", () => {
        const cell = new Cell(1, 1, 0);
        const expectedCells = expectedAdjacentCells();

        const adjacentCells = cell.calculateAdjacentCells();

        expect(adjacentCells).toEqual(expectedCells);
    })

    test("toString() should return a string representing current cell coordinates", () => {
        const cell = new Cell(2, 0, 1);

        const key = cell.toString();

        expect(key).toBe("2,0");
    })
})

function expectedAdjacentCells() {
    return [
        { column: 1, row: 0 },
        { column: 2, row: 1 },
        { column: 1, row: 2 },
        { column: 0, row: 1 }
    ];
}
