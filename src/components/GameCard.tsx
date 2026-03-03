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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img className="w-full max-w-md h-64 object-cover" src={image} alt={name} />
      <input className="mt-8 bg-transparent text-xl font-mono border border-gray-500 rounded-lg px-4 py-2 text-white outline-none focus:border-red-500"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your answer here"
        />
      <button className="mt-4 font-mono text-white rounded-lg" onClick={() => {
        onGuess(guess)
        setGuess("")
          }}>Submit</button>
    </div>
  )
}

export default GameCard