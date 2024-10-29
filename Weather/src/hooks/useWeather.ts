import { useState, useEffect } from 'react';
import { getWeather } from '../api/weatherApi';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    temp: null,
    icon: '',
    city: '',
  });
  const [unit, setUnit] = useState('C');
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const fetchWeather = async (location: string) => {
    const data = await getWeather(location);
    setWeatherData({
      temp: data.temp,
      icon: data.icon,
      city: data.city,
    });
  };

  const fetchWeatherByCoords = async (latitude: number, longitude: number) => {
    const data = await getWeather(`${latitude},${longitude}`);
    setWeatherData({
      temp: data.temp,
      icon: data.icon,
      city: data.city,
    });
  };

  const getUserLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          await fetchWeatherByCoords(latitude, longitude);
        },
        (error) => {
          console.error('Error getting user location: ', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser');
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return {
    weatherData,
    unit,
    setUnit,
    fetchWeather,
    getUserLocation,
    userLocation,
  };
};