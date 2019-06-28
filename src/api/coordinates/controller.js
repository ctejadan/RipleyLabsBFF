const OpenStreetMapClient = require('./OpenStreetMapClient')

const byCity = async city => {
  try {
    const openStreetMapClient = new OpenStreetMapClient()
    const coordinatesByCity = openStreetMapClient.getCoordinatesByCity(city)
    return { lat: coordinatesByCity.data[0].lat, lng: coordinatesByCity.data[0].lon }
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = { byCity }
