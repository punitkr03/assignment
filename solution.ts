function generateCombinations(arrays: string[][]): string[] {
    const result: string[] = [];

    function backtrack(index: number, current: string) {
        if (index === arrays.length) {
            result.push(current);
            return;
        }
        for (let i = 0; i < arrays[index].length; i++) {
            backtrack(index + 1, current ? `${current}/${arrays[index][i]}` : arrays[index][i]);
        }
    }

    backtrack(0, "");
    return result;
}

const arrays = [["a", "b"], ["x", "y"], ["1", "2"]];
const combinations = generateCombinations(arrays);
console.log(combinations);
