import React from "react";
import { useState } from "react";

interface GameCardProps {
    name: string
    image: string
    onGuess: (guess: string) => void

}

const GameCard = ({ name, image, onGuess }: GameCardProps) => {
    const [guess, setGuess] = useState("")

  return (
    <div>
      <img src={image} alt={name} />
      <input 
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your answer here"
        />
      <button onClick={() => {
        onGuess(guess)
        setGuess("")
          }}>Submit</button>
    </div>
  )
}

export default GameCard