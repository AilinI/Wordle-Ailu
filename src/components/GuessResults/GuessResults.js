import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import  Guess  from "../Guess/Guess"

function GuessResults( list ) {

  const table = range(0, NUM_OF_GUESSES_ALLOWED)
    .map((row, index) => list.list[index] ? list.list[index] : '')

  return (
    <div className="guess-results">
      {
        table.map((row, index) => <Guess key={index} tryGuess={row} />)
      }
    </div>
  )
}

export default GuessResults;
