const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org/search',
  timeout: 10000,
});

const byCity = async (city) => {
  try {
    const coordinatesByCity = await instance.request({
      method: 'get',
      params: { q: city, format: 'json' }
    })
    return { lat: coordinatesByCity.data[0].lat, lng: coordinatesByCity.data[0].lon }
  }
  catch (e) {
    throw new Error(e => {
      console.log(e)
    })
  }
}

module.exports = { byCity }
