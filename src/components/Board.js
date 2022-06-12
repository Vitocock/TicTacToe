import Square from "./Square"
import WinScreen from './WinScreen'
import { useState, useEffect } from "react"

const Board = () => {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    // Player 0 = 'x' ; player 1 = 'o' // [[player0],[player1]]

    const [player, setPlayer] = useState(0)
    const [board, setBoard] = useState([[], []])
    const [winner, setWinner] = useState(false)

    

    return (
        <>
        <div className="board">
            {values.map(value => 
                <Square 
                    key={value} 
                    num = {value} 
                    player={player} 
                    setPlayer={setPlayer} 
                    board={board} 
                    setBoard={setBoard}
                    setWinner={setWinner}
                />
            )}
        </div>
        {winner ? <WinScreen player={player}/> : ''}
        </>
    )
}


export default Board