export interface Character {
  id: string
  name: string
  image: string
  crew: string
}

export interface Location {
  id: string
  name: string
  image: string
  arc: string
}

export interface GameState {
  score: number
  currentIndex: number
  isPlaying: boolean
  mode?: "character" | "location"
}