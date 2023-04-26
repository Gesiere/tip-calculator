import { useState } from 'react'
import FormContainer from './FormContainer'
import './sass/main.scss'

function App() {
  return (
    <div className="container">
      <h2>
        spli <br /> tter{' '}
      </h2>
      <div className="form-container">
        <FormContainer />
      </div>

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Gesiere">Gesiere Tarasele</a>.
      </div>
    </div>
  )
}

export default App
