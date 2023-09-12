import CodeEditor from '../CodeEditor'
import Yard from '../Yard'
import './style.css'

function GameBoard() {
  return (
    <section className='game-container'>
      <CodeEditor />

      <Yard />
    </section>
  )
}

export default GameBoard
