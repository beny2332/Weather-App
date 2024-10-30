import SearchBar from "./comps/SearchBar/SearchBar"
import WeatherDisplay from "./comps/WeatherDisplay/WeatherDisplay"
import { useWeather } from "./hooks/useWeather"

export default function App() {
  const { weatherData, unit, setUnit, fetchWeather } = useWeather()

  return (
    <div className="app">
      <SearchBar fetchWeather={fetchWeather} />
      <WeatherDisplay
        temp={weatherData.temp}
        unit={unit}
        setUnit={setUnit}
        icon={weatherData.icon}
        city={weatherData.city}
      />
    </div>
  )
}
