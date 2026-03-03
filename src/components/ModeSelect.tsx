import React from "react";

interface ModeSelectProps {
    onSelect: (mode: "character" | "location") => void

}

const ModeSelect = ({ onSelect }: ModeSelectProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src="https://1000logos.net/wp-content/uploads/2022/08/One-Piece-Logo.png" alt="One Piece Logo" className="w-96 mb-8" />
      <h1 className ="font-mono text-2xl py-4">Select your gamemode</h1>
      <div className="flex gap-4">
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-mono"
        onClick={() => onSelect("character")}>Characters</button>

        <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-mono"
        onClick={() => onSelect("location")}>locations</button>
      </div>
    </div>
  )
}

export default ModeSelect