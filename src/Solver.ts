import Puzzle from "./Puzzle";

export default class Solver {
    private readonly puzzle: Puzzle;

    constructor(puzzle: Puzzle) {
        this.puzzle = puzzle;
    }

    solve() {
        let result = [] as number[];

        while (!this.isPuzzleSolved()) {
            let bestColorChoice = this.findBestColorChoice();

            this.puzzle.flood(bestColorChoice);
            result.push(bestColorChoice);
        }

        return result;
    }

    private findBestColorChoice() {
        let maxClusterSize = 0;
        let result = null;

        for (let currentColor = 0; currentColor < this.puzzle.colorRange; currentColor++) {
            const testPuzzle = this.clonePuzzle(this.puzzle);

            if (this.originColor(testPuzzle) === currentColor)
                continue;

            const finalClusterSize = testPuzzle.flood(currentColor);

            if (finalClusterSize > maxClusterSize) {
                maxClusterSize = finalClusterSize;
                result = currentColor;
            }
        }

        if (result == null)
            throw new Error("A solution couldn't be found!");

        return result;
    }

    private originColor(testPuzzle: Puzzle) {
        const origin = testPuzzle.grid.getOrigin();

        return origin.color;
    }

    private clonePuzzle(puzzle: Puzzle) {
        const params = { grid: puzzle.grid.toValueArray(), colorRange: puzzle.colorRange };
        return new Puzzle(params);
    }

    private isPuzzleSolved() {
        const grid = this.puzzle.grid.toValueArray().flat();

        return !grid.some(element => element != grid[0]);
    }
}