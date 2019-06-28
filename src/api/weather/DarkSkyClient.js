const axios = require('axios')
const apiKey = 'c4fc0099e0db4df6a2d9a870b6ab3a8e'
class DarkSkyClient {
  darkSkyInstance() {
    return axios.create({
      baseURL: 'https://api.darksky.net/',
      timeout: 5000
    })
  }

  getWeatherByCoordinates(lat, lng) {
    return new Promise((resolve, reject) => {
      const darkSkyInstance = this.darkSkyInstance()
      darkSkyInstance.request({
        url: 'forecast/' + apiKey + '/' + [lat, lng].join(',') + '?units=si&lang=es',
        method: 'get'
      }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

module.exports = DarkSkyClient
