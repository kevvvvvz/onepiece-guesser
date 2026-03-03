import { useState, useEffect } from "react"
import { supabase } from "../lib/supabase"
import { Character, Location } from "../types"

export const useGameData = () => {
    const [characters, setCharacters] = useState<Character[]>([])
    const [locations, setLocations] = useState<Location[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)
                // Fetch characters from Supabase
                const { data: charactersData, error: charactersError } = await supabase
                    .from("characters")
                    .select("*")
                if (charactersError) throw charactersError
                setCharacters(charactersData || [])
                // Fetch locations from Supabase
                const { data: locationsData, error: locationsError } = await supabase
                    .from("locations")
                    .select("*")
                if (locationsError) throw locationsError
                setLocations(locationsData || [])
            } catch (err) {
                setError(err.message || "An error occurred while fetching game data.")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { characters, locations, loading, error}
}  