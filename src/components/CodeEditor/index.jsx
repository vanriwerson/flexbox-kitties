import './style.css'

function CodeEditor() {
  const EDITOR_ROWS = Array.from({ length: 10 }, (_, index) => index + 1);
  
  return (
    <section className='editor-container'>
      <div className='rows-container'>
        { EDITOR_ROWS.map((row) => (<span key={row}>{row}</span>)) }
      </div>

      <div className='code-container'>
        <p className='css-selector'>{ '#yard {' }</p>

        <p className='indented'>
          <span className='prop'>display:</span>
          <span className='value'>flex</span>
          <span>;</span>
        </p>

        <div className='user-answer' contentEditable></div>

        <p className='css-selector'>{ '}' }</p>
      </div>
    </section>
  )
}

export default CodeEditor
