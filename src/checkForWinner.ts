const combinations = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
]

export const checkForWinner = (data: string[]): string | undefined=> {
    const winner = combinations.find(combination => combination.every(item => data[item] === data[combination[0]]));
    return winner ? data[winner[0]] : undefined;
}

// 0 1 2
// 3 4 5
// 6 7 8

