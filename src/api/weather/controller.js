const DarkSkyClient = require('./DarkSkyClient')

const getWeather = async(lat, lng) => {
  try {
    const darkSkyClient = new DarkSkyClient()
    const weatherByLatLng = await darkSkyClient.getWeatherByCoordinates(lat, lng)

    return {
      temperature: weatherByLatLng.currently.temperature,
      icon: weatherByLatLng.currently.icon,
      summary: weatherByLatLng.currently.summary
    }
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = { getWeather }
