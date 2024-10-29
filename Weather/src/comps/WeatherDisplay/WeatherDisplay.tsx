import React from "react"
import TemperatureToggle from "../TemperatureToggle/TemperatureToggle"
import "./WeatherDisplay.css"

interface WeatherDisplayProps {
  temp: number | null
  unit: string
  setUnit: (unit: string) => void
  icon: string
  city: string
}

export default function WeatherDisplay({
  temp,
  unit,
  setUnit,
  icon,
  city,
}: WeatherDisplayProps) {
  const convertTemperature = (temp: number) => {
    return unit === "C" ? temp - 273.15 : ((temp - 273.15) * 9) / 5 + 32
  }

  return (
    <div className="weather-display">
      {temp !== null && (
        <>
          <div className="city-name">{city}</div>
          <div className="temperature">
            {convertTemperature(temp).toFixed(2)}°{unit}
          </div>
          <div className="weather-icon">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="Weather icon"
            />
          </div>
          <TemperatureToggle unit={unit} setUnit={setUnit} />
        </>
      )}
    </div>
  )
}
