import React, { useState } from "react"
import "./SearchBar.css"

interface SearchBarProps {
  fetchWeather: (city: string) => void
}

export default function SearchBar({ fetchWeather }: SearchBarProps) {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchWeather(input)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city"
      />
      <button type="submit">Get Weather</button>
    </form>
  )
}
