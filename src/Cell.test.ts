import Cell from "./Cell"

describe("Testing Cell functionality", () => {
    test("new Cell() should initialize cell correctly", () => {
        let cell = new Cell(2, 3, 0);

        expect(cell.column).toBe(2);
        expect(cell.row).toBe(3);
        expect(cell.color).toBe(0);
    })

    //TODO: add support for calculating adjacent cells.
})