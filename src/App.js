import './App.css';
import Board from './components/Board'

const App = () => {

  return (
    <div className='App'>
      <h1>
        <span className='x'>Tic</span>
        <span className='o'>Tac</span>
        <span className='x'>Toe</span>
      </h1>
      <Board/>
    </div>
  )
}

export default App;
