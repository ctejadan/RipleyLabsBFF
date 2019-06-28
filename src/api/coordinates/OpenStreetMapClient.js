const axios = require('axios')

class OpenStreetMapClient {
  openStreetMapInstance() {
    return axios.create({
      baseURL: 'https://nominatim.openstreetmap.org/',
      timeout: 5000
    })
  }

  getCoordinatesByCity(city) {
    return new Promise((resolve, reject) => {
      const openStreetMapInstance = this.openStreetMapInstance()
      openStreetMapInstance.request({
        url: 'search',
        method: 'get',
        params: { q: city, format: 'json' }
      }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

module.exports = OpenStreetMapClient
