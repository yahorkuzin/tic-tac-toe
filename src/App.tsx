import React, { useState, useEffect } from 'react';
import './App.css';
import { checkForWinner } from './checkForWinner';
import { Square } from './Square';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [data, setData] = useState<string[]>([]);
  const [winner, setWinner] = useState<string | undefined>();
  const [isGameFinished, setIsGameFinished] = useState(false);


  useEffect(() => {
    const foundWinner = checkForWinner(data);

    if (!foundWinner && data.filter(item => !!item).length === 9) setIsGameFinished(true);

    if (foundWinner) {
      setWinner(foundWinner);
      setIsGameFinished(true);
    }
  }, [data])

  const onSquareClick = (index: number) => {
    if (data[index] || winner) return;

    const updatedData = [...data];
    updatedData[index] = currentPlayer;
    setData(updatedData);
    setCurrentPlayer((prev) => prev === 'X' ? 'O' : 'X');
  }

  const onRestartClick = () => {
    setData([]);
    setCurrentPlayer('X');
    setWinner(undefined);
    setIsGameFinished(false);
  }

  return (
    <div className="App">
      <div className='squares-container'>
        {new Array(9).fill('').map((_, index) => (
          <Square key={index} value={data[index]} onClick={() => onSquareClick(index)} />
        ))}
      </div>
      <div>
        {!winner && !isGameFinished && <div>Current Player: { currentPlayer }</div>}
        {!!winner && <div>Winner: {winner}</div>}
        {!winner && isGameFinished && <div>Game is finished</div>}
        {isGameFinished && <button onClick={onRestartClick}>Restart</button>}
      </div>
    </div>
  );
}

export default App;
