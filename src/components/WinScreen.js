const WinScreen = ({player}) => {
    const playerSymbol = player ? 'x' : 'o'
    return (
        <div className="winner">
            <p><span className={playerSymbol}>{playerSymbol}</span> ha ganado!!</p>
            <button className={playerSymbol}onClick={() => {window.location.reload()}}>Volver a jugar</button>
        </div>
    )
}

export default WinScreen