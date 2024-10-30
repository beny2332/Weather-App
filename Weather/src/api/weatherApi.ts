export const getWeather = async (location: string) => {
  const apiKey = "d7f64e05043d19af9eb95658ec1a2f74"
  let url = ""

  // Check if the location is a city name or coordinates
  if (location.includes(",")) {
    // Assume coordinates are in the format "latitude,longitude"
    const [latitude, longitude] = location.split(",")
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  } else {
    // Assume the location is a city name
    url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
  }

  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
  return {
    temp: data.main.temp,
    icon: data.weather[0].icon,
    city: data.name,
  }
}
