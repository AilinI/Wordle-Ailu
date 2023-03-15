import React, { useState } from 'react';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

export function Game() {
  const [guesses, setGuesses] = useState([])

  const getValueInput = (value) => {
    setGuesses([...guesses, value])
  }
  return (
    <>
      <GuessResults list={guesses} />
      <GuessInput getValueInput={getValueInput} />
    </>
  )
}

export default Game;
