import Puzzle from "./Puzzle";
import Solver from "./Solver";

describe("Testing Solver functionality", () => {
    test("solve() should return best greedy approach", () => {
        const grid = gridValues();
        const puzzle = new Puzzle({ grid, colorRange: 3 });
        const solver = new Solver(puzzle);

        const solution = solver.solve();

        expect(solution).toEqual([2, 1, 0, 2, 1, 0, 2]);
    })

    //TODO: Add Solver Strategy for handling A* and Greedy algorithms.
})

function gridValues() {
    return [
        [0, 1, 0, 2, 0, 1],
        [2, 0, 2, 1, 2, 1],
        [2, 2, 1, 2, 2, 2],
        [2, 1, 0, 2, 0, 1],
        [2, 1, 0, 1, 1, 1],
        [0, 2, 0, 1, 2, 0]
    ]
}
