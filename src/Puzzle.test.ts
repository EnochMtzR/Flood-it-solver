import Puzzle from "./Puzzle";

describe("Testing Puzzle functionality", () => {
    test("should throw an error when invalid params are given", () => {
        expect(() => {
            new Puzzle({ colorRange: 3 });
        }).toThrow();
    })

    test("should populate grid with grid when provided", () => {
        const grid = [
            [0, 1, 0],
            [2, 0, 2],
            [2, 2, 1]];

        const puzzle = new Puzzle({ grid, colorRange: 3 });

        expect(puzzle.grid.toValueArray()).toEqual(grid);
    });

    test("Should create grid with defined size", () => {
        const puzzle = new Puzzle({ size: 6, colorRange: 3 });

        const grid = puzzle.grid.toValueArray().flat();

        expect(grid).toHaveLength(36);
    })

    test("Should populate grid with colors from given range", () => {
        const puzzle = new Puzzle({ size: 6, colorRange: 3 });

        const grid = puzzle.grid.toValueArray().flat();

        expect(grid.every(element => element >= 0 && element < 3)).toBe(true);
    })

    test("flood() should fill the current cluster correctly", () => {
        const grid = [
            [2, 2, 0],
            [2, 0, 2],
            [2, 2, 1]];
        const expectedGrid = [
            [1, 1, 0],
            [1, 0, 2],
            [1, 1, 1]];
        const puzzle = new Puzzle({ grid, colorRange: 3 });

        const finalClusterSize = puzzle.flood(1);

        expect(puzzle.grid.toValueArray()).toEqual(expectedGrid);
        expect(finalClusterSize).toBe(6);
    })



    test("flood() should fill only origin when no cluster exists", () => {
        const grid = [
            [0, 1, 0],
            [2, 0, 2],
            [2, 2, 1]];
        const expectedGrid = [
            [2, 1, 0],
            [2, 0, 2],
            [2, 2, 1]];
        const puzzle = new Puzzle({ grid, colorRange: 3 });

        const finalClusterSize = puzzle.flood(2);

        expect(puzzle.grid.toValueArray()).toEqual(expectedGrid);
        expect(finalClusterSize).toBe(4);
    })
})