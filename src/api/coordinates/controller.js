const OpenStreetMapClient = require('./OpenStreetMapClient')

const byCity = async city => {
  try {
    const openStreetMapClient = new OpenStreetMapClient()
    const coordinatesByCity = await openStreetMapClient.getCoordinatesByCity(city)
    return { lat: coordinatesByCity[0].lat, lng: coordinatesByCity[0].lon }
  } catch (e) {
    throw new Error('Bad data')
  }
}

module.exports = { byCity }
