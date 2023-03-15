import React, { useState } from 'react';

function GuessInput({ getValueInput }) {
  const [guess, setGuess] = useState('')

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => {
      e.preventDefault();
      guess ? getValueInput(guess) : console.log('vacio', guess)
      setGuess('')

    }}>
      <label htmlFor="guess-input">Su respuesta:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        title='Tip: Es una palabra de 5 letras'
        maxLength={5}
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase())
        }}></input>
    </form>
  )
}

export default GuessInput;
