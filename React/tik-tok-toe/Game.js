import React ,{createContext,useState} from 'react';
import Board from './Board';
import { calculateWinner } from './calculateWinner';
export const handle =createContext()
function Game(props) {
    console.log("game called")
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);


    const handleClick = (i) => {
        console.log("handle click called")
        const boardCopy = [...board];
        
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    };
    
    return (
        <div >
            <handle.Provider value={handleClick}>
            <Board squares={board}/>
            </handle.Provider>
            <div style={{textAlign:'centre'}}>
             <p>{winner ? "Winner is" + winner : "Next player is " + (xIsNext? 'X' : 'O')}</p>
             <button onClick={()=>setBoard(Array(9).fill(null))}>Start game</button>
             </div>
        </div>
    );
}

export default Game;