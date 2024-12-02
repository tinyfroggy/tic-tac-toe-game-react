const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  
];


export function calcWinner(squares) {

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner : squares[a], line: lines[i]
      }
    }
  }

  return null
}

export function calcBestMove(squares, player) {
  const opponent = player === 'x' ? 'o' : 'x';

  const evaluateMove = (index) => {
    let score = 0;

    lines.forEach((line) => {
      if (line.includes(index)) {
        const playerCount = line.filter((i) => squares[i] === player).length;
        const opponentCount = line.filter((i) => squares[i] === opponent).length;

        if (opponentCount === 0) score += Math.pow(10, playerCount);
        if (playerCount === 0) score += Math.pow(5, opponentCount); 
      }
    });

    const strategicSquares = [4, 0, 2, 6, 8];
    if (strategicSquares.includes(index)) score += 5;

    return score;
  };

  let bestMove = null;
  let bestScore = -Infinity;

  squares.forEach((square, index) => {
    if (square === '') {
      const score = evaluateMove(index);
      if (score > bestScore) {
        bestScore = score;
        bestMove = index;
      }
    }
  });

  return bestMove;
}
