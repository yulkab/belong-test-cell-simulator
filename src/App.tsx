import { useCallback, useState } from 'react';
import produce from 'immer';

const ROWS = 20;
const COLS = 40;

const BOARD_WIDTH = 20;
const BOARD_HEIGHT = 20;

const neighbourCoords = [
  [-1, -1], [-1, 0], [-1, 1], [0, 1], [0, -1], [1, -1], [1, 0], [1, 1]
]

function App() {
  const [grid, setUpBoard] = useState(() => {
    return Array(ROWS).fill(Array(COLS).fill(0))
  })

  const runSimulator = useCallback(() => {
      setUpBoard((curGrid) => {
      
        return produce(curGrid, gridCopy => {
          for (let y = 0; y < ROWS; y++) {
            for (let x = 0; x < COLS; x++) {
              let neighbourCells = 0
              neighbourCoords.forEach(([a, b]) => {
                
                  const newY = (y + a + ROWS) % ROWS;
                  const newX = (x + b + COLS) % COLS;
                  neighbourCells += curGrid[newY][newX] > 0 ? 1 : 0;
                
              })
              if (neighbourCells < 2 || neighbourCells > 3) { // under-population or overcrowding
                gridCopy[y][x] = 0;
              } else if (curGrid[y][x] >= 1 && neighbourCells >= 2 && neighbourCells <= 3) { //  lives on to the next generation
                gridCopy[y][x] = curGrid[y][x] + 1;
              } else if (curGrid[y][x] === 0 && neighbourCells === 3) { // comes to life
                gridCopy[y][x] = 1;             
              } else {
               
              }
            }
          }

        })
      })
  }, [])

  function resetBoard() {
    setUpBoard((curGrid) => {
      return (produce(curGrid, gridCopy => {
        for (let y = 0; y < ROWS; y++) {
          for (let x = 0; x < COLS; x++) {
            gridCopy[y][x] = 0
          }
        }
      }))
    })
  }

  return (
    <div className="page-wrap">
      <h1> Cell Simulator </h1>
   
        <div className='gridBoard' style={{gridTemplateColumns: `repeat(${COLS}, ${BOARD_WIDTH}px)`}}>
          {grid.map((rows, y) =>
            rows.map((cols: number[], x: number) =>
              <div className='gridCell'
                onClick={() => {
                  const newGrid = produce(grid, gridCopy => {
                    gridCopy[y][x] = grid[y][x] ? 0 : 1;
                  });
                  setUpBoard(newGrid)
                }}
                key={`${y}-${x}`}
                style={{
                  width: BOARD_WIDTH,
                  height: BOARD_HEIGHT,
                  backgroundColor: grid[y][x] ? '#35b1e4' : undefined,                  
                }} />))}
        </div>
        
        <div>
          <button className='btn' onClick={runSimulator}>  Next Generation </button>
          <button className='btn' onClick={resetBoard}> Reset </button>
        </div>

    </div>
  );
}

export default App;
