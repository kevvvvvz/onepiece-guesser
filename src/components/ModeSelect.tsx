import React from "react";

interface ModeSelectProps {
    onSelect: (mode: "character" | "location") => void

}

const ModeSelect = ({ onSelect }: ModeSelectProps) => {
  return (
    <div>
      <h1>Select your gamemode</h1>
      <button onClick={() => onSelect("character")}>Characters</button>
      <button onClick={() => onSelect("location")}>locations</button>
    </div>
  )
}

export default ModeSelect