import React from "react";
import { checkGuess } from "../../game-helpers"
import { ANSWER } from "../../constants"
const Guess = (tryGuess) => {
  const characters = tryGuess.tryGuess
    ? checkGuess(tryGuess.tryGuess, ANSWER)
    : Array(5).fill({ letter: '', status: '' })

  return (
    <p className="guess">
      {
        characters.map((char, index) =>
          <span key={index} className={`cell ${char.status} `}>{char.letter}</span>
        )}

    </p>
  )
}

export default Guess;
