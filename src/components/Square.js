import { useState } from "react";

const Square = ({ player, setPlayer, board, setBoard, num, setWinner }) => {
    const [value, setValue] = useState('')
    const [symbol, setSymbol] = useState('')

    const win = (playerBoard) => {
        const winnerBoards = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        const checkLine = (line) => line.every(num => playerBoard.includes(num))
       
        for (let line of winnerBoards) {
            if (checkLine(line)) {
                return true
            }
        }

        return false
    }

    const markSquare = (player, num) => {
        if (value == '') { 
            setValue(player ? 'O' : 'X')
            setSymbol(player ? 'o' : 'x')

            board[player].push(num)
            board[player].sort()
            setBoard(board)

            setWinner(win(board[player]))

            setPlayer(!player ? 1 : 0)
        }
    } 

    return (
        <div className={`square ${symbol}`} onClick={() => markSquare(player, num)}>
            {value}
        </div>
    )
}

export default Square;