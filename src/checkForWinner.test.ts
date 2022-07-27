import {checkForWinner} from './checkForWinner';

test('checkForWinner', () => {
    expect(checkForWinner([])).toBe(undefined);
    expect(checkForWinner(['X', 'X', 'X', 'O', 'O'])).toBe('X');
    expect(checkForWinner(['X', 'O', 'X', 'O', 'O'])).toBe(undefined);

});


// 0 1 2
// 3 4 5
// 6 7 8