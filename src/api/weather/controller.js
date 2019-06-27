//https://api.darksky.net/forecast/c4fc0099e0db4df6a2d9a870b6ab3a8e/37.8267,-122.4233
const axios = require('axios')
const apiKey = 'c4fc0099e0db4df6a2d9a870b6ab3a8e'
const baseURL = 'https://api.darksky.net/'

const instance = axios.create({
  baseURL: 'https://api.darksky.net',
  timeout: 10000,
});

const getWeather = async (lat, lng) => {
  try {
    const weatherByLatLng = await instance.request({
      url: '/forecast/' + apiKey + '/' + [lat, lng].join(",") + '?units=si&lang=es', method: 'get'
    })

    return {
      temperature: weatherByLatLng.data.currently.temperature,
      icon: weatherByLatLng.data.currently.icon,
      summary: weatherByLatLng.data.currently.summary,
    }

  }
  catch (e) {
    throw new Error(e => {
      console.log(e)
    })
  }
}

module.exports = { getWeather }
