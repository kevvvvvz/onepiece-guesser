import React from "react";
import { useState } from "react";
import GameCard from "./components/GameCard";
import ModeSelect from "./components/ModeSelect";
import { GameState, Character, Location } from "./types"
import { useGameData } from "./hooks/useGameData"
import { shuffle } from "./lib/utils"


function App() {
  const { characters, locations, loading, error } = useGameData()
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    currentIndex: 0,
    isPlaying: false,
  })
  const [shuffledCharacters, setShuffledCharacters] = useState<Character[]>([])
  const [shuffledLocations, setShuffledLocations] = useState<Location[]>([])

  const handleModeSelect = (mode: "character" | "location") => {
    if (mode === "character") {
      setShuffledCharacters(shuffle(characters))
    } else {
      setShuffledLocations(shuffle(locations))
    }
    setGameState({
      ...gameState,
      mode,
      isPlaying: true,
    })
  }

  const currentQuestion = gameState.mode === "character"
  ? shuffledCharacters[gameState.currentIndex]
  : shuffledLocations[gameState.currentIndex]

  const handleGuess = (guess: string) => {
    const correct = guess.toLowerCase().trim() === currentQuestion.name.toLowerCase()
    setIsCorrect(correct)
    setShowFeedback(true)
  }
    
  const handleNext = () => {
  const currentArray = gameState.mode === "character" ? shuffledCharacters : shuffledLocations
  const isLastQuestion = gameState.currentIndex + 1 >= currentArray.length

  setShowFeedback(false)
  setGameState({
    ...gameState,
    score: isCorrect ? gameState.score + 1 : gameState.score,
    currentIndex: gameState.currentIndex + 1,
    isPlaying: !isLastQuestion,
  })
  }
    const renderScreen = () => {
      if (loading) {
        return <p>Loading...</p>
      }
      if (error) {
        return <p className="text-red-500">Error: {error}</p>
      }
      
      if (!gameState.isPlaying && gameState.mode) {
        return (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-mono text-2xl text-red-500">Game Over!</h2>
            <p>Your final score: {gameState.score}</p>
            <button className="mt-6 text-white"onClick={() => {
              setShuffledCharacters([])
              setShuffledLocations([])
              setIsCorrect(null)
              setShowFeedback(false)
              setGameState({
              score: 0,
              currentIndex: 0,
              isPlaying: false,
              mode: undefined,
            })}}>Play Again</button>
          </div>
        )
      }

      if (!gameState.isPlaying) {
        return <ModeSelect onSelect={handleModeSelect} />
      }
      if (showFeedback) {
        return (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className={isCorrect ? "text-green-500" : "text-red-500"}>
              {isCorrect ? "Correct!" : `Wrong! The correct answer was: ${currentQuestion.name}`}
            </h2>
            <button className="mt-6 text-white" onClick={handleNext}>Next</button>
          </div>
        )
      }
      return (
        <GameCard 
          name={currentQuestion.name}
          image={currentQuestion.image}
          onGuess={handleGuess}
        />
      )
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-mono text-2xl">
      <h1>One Piece Guesser</h1>
      {gameState.isPlaying && !showFeedback && (
      <div>
        <p className="flex flex-col items-center justify-center text-gray-500 text-xl">Score: {gameState.score}</p>
        <p className="flex flex-col items-center justify-center text-gray-500 text-xl">Question {gameState.currentIndex + 1} of {gameState.mode === "character" ? shuffledCharacters.length : shuffledLocations.length}</p>
      </div>
      )}
      {renderScreen()}
    </div>
  )
}

export default App