import React, { useEffect } from "react";
import { useState } from "react";

interface GameCardProps {
    name: string
    image: string
    onGuess: (guess: string) => void

}

const GameCard = ({ name, image, onGuess }: GameCardProps) => {
    const [guess, setGuess] = useState("")
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
      setImageLoaded(false)
    }, [image])
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-800 rounded-lg animate-pulse" />
      )}
      <img className={`w-full h-64 object-contain rounded-lg transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`} src={image} alt={name} onLoad={() => setImageLoaded(true)} />

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